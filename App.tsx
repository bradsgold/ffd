import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import MedicationsScreen from './src/screens/MedicationsScreen';
import ProtocolsScreen from './src/screens/ProtocolsScreen';
import PdfViewer from './src/screens/PdfViewer';
import theme from './src/styles/theme';

export default function App() {
  const [tab, setTab] = useState<'meds' | 'protocols'>('meds');
  const [openPdfUrl, setOpenPdfUrl] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/ffd_patch1.jpg')} style={styles.headerImage} />
        <Text style={styles.headerTitle}>Frankfort Fire Dept.</Text>
        <Image source={require('./assets/ffd_patch4.webp')} style={styles.headerImage} />
      </View>

      <View style={styles.tabBar} accessibilityRole="tablist">
        <TouchableOpacity style={[styles.tabItem, tab === 'meds' && styles.tabActive]} onPress={() => setTab('meds')}>
          <Text style={[styles.tabText, tab === 'meds' && styles.tabTextActive]}>Medications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, tab === 'protocols' && styles.tabActive]} onPress={() => setTab('protocols')}>
          <Text style={[styles.tabText, tab === 'protocols' && styles.tabTextActive]}>Protocols</Text>
        </TouchableOpacity>
      </View>

      {tab === 'meds' ? (
        <MedicationsScreen showHeader={false} onOpenPdf={(u: string) => setOpenPdfUrl(u)} />
      ) : (
        <ProtocolsScreen onOpenPdf={(u: string) => setOpenPdfUrl(u)} />
      )}

      {openPdfUrl ? <PdfViewer pdfUrl={openPdfUrl} onClose={() => setOpenPdfUrl(null)} /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12, paddingVertical: 10, marginBottom: 8, marginTop: 8 },
  headerImage: { width: 28, height: 28, resizeMode: 'contain' },
  headerTitle: { color: '#000000', fontWeight: '900', fontSize: 26, textAlign: 'center' },
  tabBar: { flexDirection: 'row', padding: 6, justifyContent: 'center' },
  tabItem: { paddingVertical: 6, paddingHorizontal: 14, marginHorizontal: 6, borderRadius: 6, borderWidth: 1, borderColor: theme.colors.cardBorder },
  tabActive: { backgroundColor: theme.colors.cardBackground },
  tabText: { color: theme.colors.textOnCard },
  tabTextActive: { fontWeight: '700' }
});
