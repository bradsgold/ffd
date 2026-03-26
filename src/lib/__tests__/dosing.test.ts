import { calculateDose } from '../dosing';

describe('calculateDose', () => {
  it('returns fixed dose as provided', () => {
    const protocol: any = { dose: { type: 'fixed', amountmin: 10, unit: 'mg' } };
    const result = calculateDose(protocol);
    expect(result).toEqual({ amount: 10, amountMax: null, unit: 'mg', note: null });
  });

  it('calculates weight-based dosing', () => {
    const protocol: any = { dose: { type: 'weight', amountmin: 2, unit: 'mg' } };
    const result = calculateDose(protocol, { weightKg: 10 });
    expect(result).toMatchObject({ amount: 20, unit: 'mg' });
  });

  it('applies absolute max dose cap', () => {
    const protocol: any = { dose: { type: 'weight', amountmin: 5, unit: 'mg', maxDose: { amount: 30, unit: 'mg' } } };
    const result = calculateDose(protocol, { weightKg: 10 });
    expect(result).toMatchObject({ amount: 30, unit: 'mg' });
    expect((result as any).note).toMatch(/Capped at max/);
  });

  it('requires weight for weight-based dosing', () => {
    const protocol: any = { dose: { type: 'weight', amountmin: 1, unit: 'mg' } };
    const result = calculateDose(protocol, {});
    expect(result).toMatchObject({ error: 'Weight required for weight-based dosing' });
  });
});
