import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import protocolAssets from '../data/protocolAssets';
import theme from '../styles/theme';
import { Asset } from 'expo-asset';
import type { Props as AppOpenProps } from '../../App';

type Props = { onOpenPdf?: (pdfUrl: string) => void };

type FileItem = { pdfUrl: string; fileName: string; displayName: string };

function buildDirectoryMap(): { [folder: string]: FileItem[] } {
  const map: { [k: string]: FileItem[] } = {};
  Object.keys(protocolAssets).forEach((pdfUrl) => {
    const rel = pdfUrl.replace('/assets/protocols/', '');
    const parts = rel.split('/');
    const folder = parts.length > 1 ? parts[0] : 'root';
    const fileName = parts.slice(1).join('/') || parts[0];
    // create a readable display name (strip leading codes and extension)
    const nameNoExt = fileName.replace(/\.pdf$/i, '').trim();
    const displayName = nameNoExt.replace(/^\s*[A-Za-z]-?\d+\s*/i, '').replace(/^\d+\s*-?\s*/i, '').trim();
    if (!map[folder]) map[folder] = [];
    map[folder].push({ pdfUrl, fileName, displayName: displayName || nameNoExt });
  });
  // sort files within each folder by filename (natural)
  Object.keys(map).forEach((f) => {
    map[f].sort((a, b) => a.fileName.localeCompare(b.fileName, undefined, { numeric: true }));
  });
  return map;
}

export default function ProtocolsScreen({ onOpenPdf }: Props) {
  const dirMap = useMemo(() => buildDirectoryMap(), []);
  const folders = useMemo(() => Object.keys(dirMap).sort((a, b) => a.localeCompare(b)), [dirMap]);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  async function openProtocol(pdfUrl?: string) {
    if (!pdfUrl) return;
    if (onOpenPdf) {
      onOpenPdf(pdfUrl);
      return;
    }
    Linking.openURL(pdfUrl).catch(() => {});
  }

  if (!selectedFolder) {
    return (
      <View style={styles.container}>
        <FlatList
          data={folders}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.row} onPress={() => setSelectedFolder(item)}>
              <Text style={styles.title}>{item}</Text>
              <Text style={styles.path}>{dirMap[item].length} items</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  const files = dirMap[selectedFolder] || [];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backRow} onPress={() => setSelectedFolder(null)}>
        <Text style={styles.backText}>← Back to folders</Text>
      </TouchableOpacity>
      <FlatList
        data={files}
        keyExtractor={(item) => item.pdfUrl}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.row} onPress={() => openProtocol(item.pdfUrl)}>
            <Text style={styles.title}>{item.displayName}</Text>
            <Text style={styles.path}>{item.fileName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, padding: 12 },
  row: { backgroundColor: theme.colors.cardBackground, padding: 12, marginBottom: 8, borderRadius: 8, borderColor: theme.colors.cardBorder, borderWidth: 1 },
  title: { color: theme.colors.textOnCard, fontWeight: '700' },
  path: { color: theme.colors.mutedText, marginTop: 6 },
  backRow: { paddingVertical: 8, paddingHorizontal: 6, marginBottom: 8 },
  backText: { color: theme.colors.textOnCard, fontWeight: '700' }
});
