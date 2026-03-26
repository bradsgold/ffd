export type Dose = {
  type?: 'fixed' | 'weight' | 'infusion' | string;
  amountmin?: number | null;
  amountmax?: number | null;
  unit?: string | null;
  per?: string | null;
  rateUnit?: string | null;
  concentration?: any;
  maxDose?: { amount?: number; unit?: string } | null;
};

export type Protocol = {
  context?: string[];
  codeRole?: string | null;
  pdfUrl?: string | null;
  dose?: Dose | null;
  mdNeed?: string | null;
  notes?: string | null;
  ageAlerts?: string[];
  warnings?: string[];
  isCodeMed?: boolean;
  isPedMed?: boolean;
  repeatTimemin?: number | null;
  repeatTimemax?: number | null;
  priority?: number | null;
  indication?: string | null;
  [key: string]: any;
};

export type Medication = {
  id: string;
  name: string;
  aka?: string | null;
  action?: string | null;
  contraindications?: string | null;
  cautions?: string | null;
  protocols?: Protocol[];
  [key: string]: any;
};
