import { Protocol, Dose } from '../types/medications';

export type Patient = { weightKg?: number };
export type DoseResult = { amount?: number | null; amountMax?: number | null; unit?: string | null; note?: string | null; error?: string | null };

export function calculateDose(protocol: Protocol | any, patient: Patient = {}): DoseResult | null {
  if (!protocol || !protocol.dose) return null;
  const d = protocol.dose;
  const doseMin = typeof d.amountmin === 'number' ? d.amountmin : typeof d.amount === 'number' ? d.amount : null;
  const doseMax = typeof d.amountmax === 'number' ? d.amountmax : null;

  if (d.type === 'fixed') {
    if (doseMin === null) return { error: 'Dose unavailable' };
    return { amount: doseMin, amountMax: doseMax, unit: d.unit || null, note: d.maxDose ? `Max ${d.maxDose.amount}${d.maxDose.unit || ''}` : null };
  }

  if (d.type === 'weight') {
    const w = patient.weightKg;
    if (!w || typeof w !== 'number') return { error: 'Weight required for weight-based dosing' };
    if (doseMin === null) return { error: 'Dose unavailable' };
    const calculated = +(doseMin * w);
    const calculatedMax = typeof doseMax === 'number' ? +(doseMax * w) : null;

    if (d.maxDose && typeof d.maxDose.amount === 'number') {
      const maxUnit = String(d.maxDose.unit || '').toLowerCase();
      if (maxUnit.includes('/kg')) {
        const perKgMax = d.maxDose.amount * w;
        if (calculated > perKgMax) return { amount: perKgMax, unit: d.unit || null, note: `Capped at ${d.maxDose.amount}${d.maxDose.unit}` };
      } else {
        if (calculated > d.maxDose.amount) return { amount: d.maxDose.amount, unit: d.maxDose.unit || d.unit || null, note: `Capped at max ${d.maxDose.amount}${d.maxDose.unit || ''}` };
      }
    }

    return { amount: +calculated.toFixed(2), amountMax: calculatedMax ? +calculatedMax.toFixed(2) : null, unit: d.unit || null };
  }

  if (d.type === 'infusion') {
    if (doseMin === null) return { error: 'Dose unavailable' };
    return { amount: doseMin, amountMax: doseMax, unit: d.rateUnit || `${d.unit}/${d.per || 'min'}`, note: d.concentration ? `Concentration: ${JSON.stringify(d.concentration)}` : null };
  }

  return { error: 'Unsupported dose type' };
}
