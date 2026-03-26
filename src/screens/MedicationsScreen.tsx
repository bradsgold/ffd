import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Linking, Switch, Image } from 'react-native';
import { medications } from '../data/medications';
import { calculateDose } from '../lib/dosing';
import type { Medication, Protocol } from '../types/medications';
import theme from '../styles/theme';
import protocolAssets from '../data/protocolAssets';
import type { Props as AppOpenProps } from '../../App';

type Props = { showHeader?: boolean; onOpenPdf?: (pdfUrl: string) => void };

export default function MedicationsScreen({ showHeader = true, onOpenPdf }: Props) {
  const [weight, setWeight] = useState('70');
  const [isKg, setIsKg] = useState(true);
  const [isPediatric, setIsPediatric] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const weightKg = isKg ? Number(weight) : Number(weight) * 0.453592;

  function toggleExpand(id: string) {
    setExpanded((s) => ({ ...s, [id]: !s[id] }));
  }

  function openPdf(url?: string) {
    if (!url) return;
    if (onOpenPdf) {
      onOpenPdf(url);
      return;
    }
    const mod = protocolAssets[url];
    if (mod) {
      // best-effort: open external if no in-app handler
      Linking.openURL(mod.uri || url).catch(() => {});
      return;
    }
    Linking.openURL(url).catch(() => {});
  }

  return (
    <View style={styles.container}>
      {showHeader ? (
        <View style={styles.header}>
          <Image source={require('../../assets/ffd_patch1.jpg')} style={styles.headerImage} />
          <Text style={styles.headerTitle}>Frankfort Fire Dept.</Text>
          <Image source={require('../../assets/ffd_patch4.webp')} style={styles.headerImage} />
        </View>
      ) : null}

      <View style={styles.topBar}>
        <View style={styles.weightRow}>
          <Text style={styles.label}>Weight</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
            placeholder="kg"
            placeholderTextColor={theme.colors.mutedText}
          />
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>kg</Text>
            <Switch value={isKg} onValueChange={setIsKg} />
            <Text style={styles.switchLabel}>lb</Text>
          </View>
        </View>
        <View style={styles.ageRow}>
          <Text style={styles.switchLabel}>Adult</Text>
          <Switch value={isPediatric} onValueChange={setIsPediatric} />
          <Text style={styles.switchLabel}>Pediatric</Text>
        </View>
      </View>

      <FlatList
        data={medications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          // choose protocol based on age
          const protocols = item.protocols ?? [];
          const protocol: Protocol = protocols.find((p: Protocol) => (isPediatric ? p.isPedMed : !p.isPedMed)) || protocols[0] || ({} as Protocol);
          const dose = calculateDose(protocol, { weightKg });

          return (
            <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.card}>
              <View style={styles.cardRow}>
                <Text style={styles.medName}>{item.name}</Text>
                <TouchableOpacity onPress={() => openPdf(protocol.pdfUrl ?? undefined)} style={styles.pdfButton}>
                  <Text style={styles.pdfButtonText}>Indications</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.notes}>{protocol.notes}</Text>

              <View style={styles.doseRow}>
                {dose && !dose.error ? (
                  <Text style={styles.doseText}>{`${dose.amount} ${dose.unit || ''}`}</Text>
                ) : (
                  <Text style={styles.doseText}>{dose?.error ?? 'N/A'}</Text>
                )}
              </View>

              {expanded[item.id] ? (
                <View style={styles.expanded}>
                  <Text style={styles.expandedText}>{item.action}</Text>
                  <Text style={[styles.expandedText, { marginTop: 8 }]}>{protocol.notes}</Text>
                </View>
              ) : null}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: theme.colors.background },
  topBar: { marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  weightRow: { flexDirection: 'row', alignItems: 'center' },
  label: { marginRight: 8, color: theme.colors.textOnCard },
  input: { borderWidth: 1, width: 100, padding: 6, marginRight: 8, backgroundColor: theme.colors.inputBackground, color: theme.colors.textOnCard, borderColor: theme.colors.cardBorder, borderRadius: 6 },
  switchRow: { flexDirection: 'row', alignItems: 'center' },
  ageRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' },
  card: { borderWidth: 1, borderRadius: 8, padding: 12, marginBottom: 8, backgroundColor: theme.colors.cardBackground, borderColor: theme.colors.cardBorder },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  medName: { fontWeight: '700', color: theme.colors.textOnCard },
  pdfButton: { backgroundColor: theme.colors.cardBackground, padding: 8, borderRadius: 6, borderWidth: 1, borderColor: theme.colors.mutedText },
  pdfButtonText: { color: theme.colors.textOnCard, fontWeight: '600' },
  notes: { color: theme.colors.mutedText, marginTop: 6 },
  doseRow: { marginTop: 8 },
  doseText: { fontWeight: '700', color: theme.colors.textOnCard },
  expanded: { marginTop: 8 },
  expandedText: { color: theme.colors.textOnCard },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 8, paddingTop: 28 },
  headerTitle: { color: '#000000', fontWeight: '800', fontSize: 24, letterSpacing: 0.5 },
  headerImage: { width: 40, height: 40, resizeMode: 'contain' },
  switchLabel: { color: theme.colors.textOnCard, marginHorizontal: 6 }
});
