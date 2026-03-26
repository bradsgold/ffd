import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Platform, Linking } from 'react-native';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import protocolAssets from '../data/protocolAssets';
import theme from '../styles/theme';
import Pdf from 'react-native-pdf';

type Props = { pdfUrl: string; onClose: () => void };

export default function PdfViewer({ pdfUrl, onClose }: Props) {
  const [loading, setLoading] = useState(true);
  const [localUri, setLocalUri] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const mod = protocolAssets[pdfUrl];
        if (!mod) throw new Error('Missing module for pdfUrl');

        // load asset into device
        await Asset.loadAsync(mod);
        const asset = Asset.fromModule(mod);
        const uri = asset.localUri || asset.uri;
        if (!uri) throw new Error('Asset has no URI');

        // copy to cache with stable filename
        const fileName = asset.name || `asset_${Date.now()}.pdf`;
        const cachePath = FileSystem.cacheDirectory + fileName;
        if (uri !== cachePath) {
          try {
            await FileSystem.copyAsync({ from: uri, to: cachePath });
          } catch (e) {
            // ignore copy errors; try using original uri
          }
        }

        if (mounted) setLocalUri(cachePath || uri);

        // Pdf is statically imported above; presence depends on native module being installed
        if (mounted) {
          // no-op; Pdf import will be undefined if not installed
        }
      } catch (e) {
        console.warn('PdfViewer load error', e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [pdfUrl]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (Pdf && localUri) {
    return (
      <View style={styles.container}>
        <View style={styles.controls}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
        <Pdf source={{ uri: localUri }} style={styles.pdf} />
      </View>
    );
  }

  // fallback: offer to open externally (content URI on Android, file/remote on others)
  async function openExternal() {
    try {
      // try Android content URI
      if (Platform.OS === 'android' && localUri) {
        const content = await FileSystem.getContentUriAsync(localUri);
        if (content && content.uri) {
          await Linking.openURL(content.uri);
          return;
        }
      }

      // fallback to original mapping or URL
      const mod = protocolAssets[pdfUrl];
      if (mod) {
        await Linking.openURL(mod.uri || '');
        return;
      }
      await Linking.openURL(pdfUrl);
    } catch (e) {
      console.warn('PdfViewer external open failed', e);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.messageBox}>
        <Text style={styles.messageTitle}>PDF viewer not available</Text>
        <Text style={styles.messageText}>For an embedded PDF experience install `react-native-pdf` and build a custom dev-client (EAS). As a fallback you can open the document in an external app or browser.</Text>
        <TouchableOpacity style={styles.openButton} onPress={openExternal}>
          <Text style={styles.openButtonText}>Open in external app</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  controls: { height: 56, justifyContent: 'center', paddingHorizontal: 12, borderBottomWidth: 1, borderColor: theme.colors.cardBorder },
  closeButton: { padding: 8 },
  closeText: { color: theme.colors.textOnCard, fontWeight: '700' },
  pdf: { flex: 1 },
  messageBox: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  messageTitle: { fontWeight: '800', fontSize: 18, marginBottom: 8, color: theme.colors.textOnCard },
  messageText: { color: theme.colors.mutedText, textAlign: 'center', marginBottom: 16 },
  openButton: { paddingHorizontal: 16, paddingVertical: 10, backgroundColor: theme.colors.cardBackground, borderRadius: 8, borderWidth: 1, borderColor: theme.colors.cardBorder },
  openButtonText: { color: theme.colors.textOnCard, fontWeight: '700' },
});
