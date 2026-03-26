// Auto-generated sanitized medications
// Source: migration/original_medications.js
// Warning: This file is safe to import in the app. It has been stripped of helpers and comments.









import type { Medication } from '../types/medications';

export const medications: Medication[] = [
  {
    "id": "acetaminophen",
    "name": "Acetaminophen",
    "aka": "Tylenol",
    "action": "Acts on the hypothalamus to produce antipyresis. It may work peripherally to block pain impulse generation; may also inhibit prostaglandin synthesis in the CNS.",
    "contraindications": "Severe active hepatic disease; allergy to acetaminophen.",
    "cautions": "",
    "protocols": [
      {
        "context": [
          "Pain"
        ],
        "codeRole": null,
        "pdfUrl": "/assets/protocols/General/G5_Pain_Management_Non_CardiacProcedural_Analgesia.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 1000,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 1000,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "IV/IO over 15 minutes.",
        "ageAlerts": [],
        "warnings": [],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 0,
        "indication": "Pain",
        "_foundIn": null
      },
      {
        "context": [
          "Pain",
          "Pediatric"
        ],
        "codeRole": null,
        "pdfUrl": "/assets/protocols/General/G5_Pain_Management_Non_CardiacProcedural_Analgesia.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 15,
          "amountmax": null,
          "unit": "mg",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 75,
            "unit": "mg/kg",
            "per": "24h"
          }
        },
        "mdNeed": "Dosing for child that cannot communicate is AT MD DISCRETION ONLY.",
        "notes": "Pediatric dose: 15 mg/kg IV/IO over 15 minutes. Max 75 mg/kg per 24 hours.",
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "Check cumulative 24h dose"
        ],
        "isCodeMed": false,
        "isPedMed": true,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 0,
        "indication": "Pain",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "adenosine",
    "name": "Adenosine (Adenocard)",
    "aka": "Adenocard",
    "action": "Antidysrhythmic. Temporarily blocks conduction through the AV node, interrupting reentry circuits.",
    "contraindications": "2nd/3rd-degree heart block, Sick Sinus Syndrome, hypersensitivity.",
    "cautions": "May cause transient bronchospasm. Use caution in patients with a history of asthma.",
    "protocols": [
      {
        "context": [
          "Cardiac",
          "SVT",
          "ACLS"
        ],
        "codeRole": "antiarrhythmic",
        "pdfUrl": "/assets/protocols/Cardiac/C8_Supraventricular_Tachycardia_Adult_and_Pediatric.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 12,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 30,
            "unit": "mg",
            "per": null
          }
        },
        "repeatDose": {
          "type": "fixed",
          "amountmin": 12,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 30,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Rapid IV push. Repeat in 1–2 minutes if needed. Use caution in WPW.",
        "ageAlerts": [],
        "warnings": [
          "May cause transient flushing, chest discomfort"
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "repeatTimemin": 60,
        "repeatTimemax": 120,
        "priority": 10,
        "indication": "SVT",
        "_foundIn": null
      },
      {
        "context": [
          "Cardiac",
          "SVT",
          "ACLS",
          "Pediatric"
        ],
        "codeRole": "antiarrhythmic",
        "pdfUrl": "/assets/protocols/Cardiac/C8_Supraventricular_Tachycardia_Adult_and_Pediatric.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 0.1,
          "amountmax": null,
          "unit": "mg",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 6,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Pediactric Dose. Repeat in 1–2 minutes. Max single pediatric dose 6 mg. Flush w/2-5 ml NS after administration.",
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "Flush IV after administration"
        ],
        "isCodeMed": true,
        "isPedMed": true,
        "repeatTimemin": 60,
        "repeatTimemax": 120,
        "priority": 10,
        "indication": "SVT",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "albuterol",
    "name": "Albuterol",
    "aka": "Albuterol",
    "action": "Sympathomimetic; Beta-2 agonist. Relaxes bronchial smooth muscle, causing bronchodilation.",
    "contraindications": "Hypersensitivity. Use with caution in tachycardia secondary to digitalis toxicity.",
    "cautions": "Monitor for tachycardia and tremors; can cause peripheral vasodilation.",
    "protocols": [
      {
        "context": [
          "Medical",
          "Respiratory"
        ],
        "codeRole": "bronchodilator",
        "pdfUrl": "/assets/protocols/Medical/M7_Respiratory_Distress_withwithout_Wheezing.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 2.5,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": null
        },
        "mdNeed": null,
        "notes": "Nebulized. Repeat every 5 minutes as needed.",
        "ageAlerts": [],
        "warnings": [
          "Monitor heart rate and tremor"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 5,
        "indication": "Respiratory",
        "_foundIn": null
      },
      {
        "context": [
          "Medical",
          "Respiratory",
          "Pediatric"
        ],
        "codeRole": "bronchodilator",
        "pdfUrl": "/assets/protocols/Medical/M7_Respiratory_Distress_withwithout_Wheezing.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 1.25,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": null
        },
        "mdNeed": null,
        "notes": "PEDIATRIC DOSE : Half adult dose nebulized. Repeat every 5 minutes as needed.",
        "ageAlerts": [
          "Pediatric dosing"
        ],
        "warnings": [
          "Monitor for tachycardia"
        ],
        "isCodeMed": true,
        "isPedMed": true,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 5,
        "indication": "Respiratory",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "amiodarone",
    "name": "Amiodarone",
    "aka": "Amiodarone",
    "action": "Class III antiarrhythmic. Prolongs action potential and refractory period; inhibits alpha and beta-adrenergic receptors.",
    "contraindications": "Severe sinus node dysfunction, cardiogenic shock, 2nd/3rd-degree AV blocks.",
    "cautions": "Monitor for hypotension and bradycardia during infusion.",
    "protocols": [
      {
        "context": [
          "Cardiac",
          "VFib",
          "ACLS"
        ],
        "codeRole": "resuscitation",
        "pdfUrl": "/assets/protocols/Cardiac/C7_Medical_ACLS_Ventricular_FibrillationPulseless.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 300,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 450,
            "unit": "mg",
            "per": null
          }
        },
        "repeatDose": {
          "type": "fixed",
          "amountmin": 150,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 450,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Following Epi admin : initial 300 mg IV/IO. Repeat 150 mg after 3–5 minutes if needed. TCA/Cocaine OD caution.",
        "ageAlerts": [],
        "warnings": [
          "TCA/Cocaine OD caution"
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "repeatTimemin": 180,
        "repeatTimemax": 300,
        "priority": 20,
        "indication": "VFib / pVT "
      },
      {
        "context": [
          "Cardiac",
          "VFib",
          "Pediatric",
          "ACLS"
        ],
        "codeRole": "resuscitation",
        "pdfUrl": "/assets/protocols/Cardiac/C7_Medical_ACLS_Ventricular_FibrillationPulseless.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 5,
          "amountmax": null,
          "unit": "mg",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 15,
            "unit": "mg/kg",
            "per": null
          }
        },
        "notes": "Pediatric dose 5 mg/kg IV/IO. Repeat every 3–5 minutes; consider 150 mg repeat dosing.",
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "TCA/Cocaine OD caution"
        ],
        "isCodeMed": true,
        "isPedMed": true,
        "mdNeed": null,
        "repeatTimemin": 180,
        "repeatTimemax": 300,
        "priority": 20,
        "indication": "VFib / pVT "
      },
      {
        "context": [
          "Cardiac",
          "Wide Complex Tachycardia",
          "ACLS"
        ],
        "codeRole": "resuscitation",
        "pdfUrl": "/assets/protocols/Cardiac/C7_Medical_ACLS_Ventricular_FibrillationPulseless.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 150,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 150,
            "unit": "mg",
            "per": null
          }
        },
        "notes": "Call Medical Control.",
        "ageAlerts": [
          ""
        ],
        "warnings": [
          ""
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "mdNeed": "AT MD DISCRETION ONLY",
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 20,
        "indication": "Wide Complex Tachycardia"
      }
    ]
  },
  {
    "id": "ipratropium",
    "name": "Atrovent (Ipratropium)",
    "aka": "Atrovent",
    "action": "Anticholinergic (Parasympatholytic). Inhibits vagally mediated reflexes by antagonizing acetylcholine at muscarinic receptors on bronchial smooth muscle.",
    "contraindications": "Hypersensitivity to atropine, alkaloids, or soybean/peanut (if using MDI).",
    "cautions": "Use with caution in patients with narrow-angle glaucoma or prostatic hypertrophy (due to potential for urinary retention).",
    "protocols": [
      {
        "context": [
          "Medical",
          "Respiratory"
        ],
        "codeRole": "bronchodilator",
        "pdfUrl": "/assets/protocols/Medical/M7_Respiratory_Distress_withwithout_Wheezing.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 500,
          "amountmax": null,
          "unit": "mcg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": 500
        },
        "mdNeed": null,
        "notes": "After 1st tx of Albuterol: administer Albuterol 2.5 mg in combination with Atrovent 500 mcg (2.5 ml prediluted solution)",
        "ageAlerts": [],
        "warnings": [
          "May increase anticholinergic side effects"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 5,
        "indication": "Respiratory",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "aspirin",
    "name": "Aspirin",
    "aka": "ASA",
    "action": "Platelet inhibitor / antipyretic. Blocks formation of thromboxane A2, preventing platelet aggregation.",
    "contraindications": "Active ulcer disease, bleeding disorders, or hypersensitivity to NSAIDs.",
    "cautions": "Can precipitate bronchospasm in some asthmatic patients.",
    "protocols": [
      {
        "context": [
          "Cardiac",
          "Chest Pain"
        ],
        "codeRole": "antiplatelet",
        "pdfUrl": "/assets/protocols/Cardiac/C3_Chest_Pain_Believed_to_be_Cardiac_in_Origin.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 324,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 324,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "4 chewable 81 mg tablets (324 mg total).",
        "ageAlerts": [],
        "warnings": [
          "Not for children with viral illness (Reye syndrome risk)"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 5,
        "indication": "Chest Pain"
      }
    ]
  },
  {
    "id": "atropine",
    "name": "Atropine",
    "aka": "Atropine",
    "action": "Parasympatholytic (anticholinergic). Increases heart rate by blocking vagal influence at the SA node; competitively inhibits acetylcholine at muscarinic receptor sites.",
    "contraindications": "None in emergency settings (e.g., nerve agent/organophosphate poisoning).",
    "cautions": "Ineffective in 2nd-degree Type II or 3rd-degree heart blocks. Use with caution in myocardial ischemia as increased heart rate can worsen ischemia.",
    "protocols": [
      {
        "context": [
          "Cardiac",
          "Bradycardia",
          "ALS"
        ],
        "codeRole": "chronotrope",
        "pdfUrl": "/assets/protocols/Cardiac/C2_Bradycardia_Adult_and_Pediatric.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 1,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 3,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Repeat every 3–5 minutes as needed. Max 3 mg for bradycardia.",
        "ageAlerts": [],
        "warnings": [
          "Ineffective in 2nd-degree Type II or 3rd-degree AV block"
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "repeatTimemin": 180,
        "repeatTimemax": 300,
        "priority": 20,
        "indication": "Bradycardia"
      },
      {
        "context": [
          "Overdose",
          "Nerve Agent"
        ],
        "codeRole": "anticholinergic",
        "pdfUrl": "/assets/protocols/Overdose/O1_Nerve_Agent_Exposure.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 1,
          "amountmax": 2,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": null
        },
        "mdNeed": null,
        "notes": "Titrate for nerve agent exposure; repeat as needed per protocol.",
        "ageAlerts": [],
        "warnings": [
          "Titrate to clinical effect in organophosphate poisoning"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 15,
        "indication": "Organophosphate"
      },
      {
        "context": [
          "Overdose",
          "Organophosphate",
          "Pediatric"
        ],
        "codeRole": "anticholinergic",
        "pdfUrl": "/assets/protocols/Overdose/O2_Suspected_OverdosePoisoning.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 0.02,
          "amountmax": null,
          "unit": "mg",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 5,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Pediatric dose every 5–10 minutes as needed.",
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "Monitor for anticholinergic effects"
        ],
        "isCodeMed": false,
        "isPedMed": true,
        "repeatTimemin": 300,
        "repeatTimemax": 600,
        "priority": 15,
        "indication": "Organophosphate",
        "_foundIn": null
      },
      {
        "context": [
          "Overdose",
          "Organophosphate",
          "Pediatric"
        ],
        "codeRole": "anticholinergic",
        "pdfUrl": "/assets/protocols/Overdose/O1_Nerve_Agent_Exposure.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 0.05,
          "amountmax": 0.3,
          "unit": "mg",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 5,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Pediatric dosing; titrate every 5–10 minutes as needed.",
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "Wide dosing range; titrate to effect"
        ],
        "isCodeMed": false,
        "isPedMed": true,
        "repeatTimemin": 300,
        "repeatTimemax": 600,
        "priority": 15,
        "indication": "Organophosphate"
      }
    ]
  },
  {
    "id": "diltiazem",
    "name": "Diltiazem (Cardizem)",
    "aka": "Cardizem",
    "action": "Calcium channel blocker. Slows AV nodal conduction and decreases ventricular response in supraventricular tachycardia.",
    "contraindications": "Hypotension, 2nd/3rd-degree AV block (without pacing), cardiogenic shock, known hypersensitivity.",
    "cautions": "Use caution in heart failure or concurrent beta-blocker therapy; monitor blood pressure and ECG.",
    "protocols": [
      {
        "context": [
          "Cardiac",
          "SVT",
          "ACLS"
        ],
        "codeRole": "antiarrhythmic",
        "pdfUrl": "/assets/protocols/Cardiac/C8_Supraventricular_Tachycardia_Adult_and_Pediatric.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 0.25,
          "amountmax": null,
          "unit": "mg",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": null
        },
        "mdNeed": null,
        "notes": "0.25 mg/kg over minutes IV/IO. For signs and symptoms of cardiogenic etiology.",
        "ageAlerts": [],
        "warnings": [
          "Monitor for hypotension and bradycardia"
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 9,
        "indication": "SVT",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "diphenhydramine",
    "name": "Benadryl (Diphenhydramine)",
    "aka": "Benadryl",
    "action": "Antihistamine (H1-receptor antagonist). Competes with histamine for H1-receptor sites on effector cells in the GI tract, blood vessels, and respiratory tract.",
    "contraindications": "Newborns or premature infants; patients taking MAO inhibitors.",
    "cautions": "May cause profound drowsiness or CNS depression; use with caution in patients with glaucoma, asthma, or benign prostatic hyperplasia (BPH).",
    "protocols": [
      {
        "context": [
          "Medical",
          "Allergic Reaction"
        ],
        "codeRole": "antihistamine",
        "pdfUrl": "/assets/protocols/Medical/M2_Allergic_ReactionsAnaphylaxis.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 25,
          "amountmax": 50,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 50,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "IV, IO, or IM. Typical adult dose 25–50 mg.",
        "ageAlerts": [],
        "warnings": [
          "May cause sedation; monitor airway and respiratory status"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 5,
        "indication": "Anaphylaxis"
      },
      {
        "context": [
          "Overdose"
        ],
        "codeRole": "antihistamine",
        "pdfUrl": "/assets/protocols/Overdose/O2_Suspected_OverdosePoisoning.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 50,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 50,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Adult overdose dose: 50 mg IM/IV/IO.",
        "ageAlerts": [],
        "warnings": [
          "Sedation and anticholinergic effects possible"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 5,
        "indication": "Antipsychotic OD",
        "_foundIn": null
      },
      {
        "context": [
          "Overdose",
          "Pediatric"
        ],
        "codeRole": "antihistamine",
        "pdfUrl": "/assets/protocols/Overdose/O2_Suspected_OverdosePoisoning.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 1,
          "amountmax": null,
          "unit": "mg",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 50,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Dose not to exceed Adult dose of 50 mg.",
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "Sedation and anticholinergic effects possible"
        ],
        "isCodeMed": false,
        "isPedMed": true,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 5,
        "indication": "Antipsychotic OD",
        "_foundIn": null
      },
      {
        "context": [
          "Medical",
          "Allergic Reaction",
          "Pediatric"
        ],
        "codeRole": "antihistamine",
        "pdfUrl": "/assets/protocols/Medical/M2_Allergic_ReactionsAnaphylaxis.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 1,
          "amountmax": null,
          "unit": "mL",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 25,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Dose not to exceed 25 mg.",
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "May cause sedation; monitor airway and respiratory status"
        ],
        "isCodeMed": false,
        "isPedMed": true,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 5,
        "indication": "Anaphylaxis"
      }
    ]
  },
  {
    "id": "calcium_chloride",
    "name": "Calcium Chloride",
    "aka": "Calcium Chl.",
    "action": "Electrolyte. Increases myocardial contractility and ventricular automaticity; stabilizes myocardial cell membranes during hyperkalemia.",
    "contraindications": "Hypercalcemia, digitalis toxicity (can cause 'stone heart'), and ventricular fibrillation (except in hyperkalemia).",
    "cautions": "Extremely caustic to tissues; must be administered through a patent, large-bore IV. Rapid administration can cause bradycardia or arrest.",
    "protocols": [
      {
        "context": [
          "Medical",
          "PEA/Asystole",
          "Hyperkalemia"
        ],
        "codeRole": "membrane stabilizer",
        "pdfUrl": "/assets/protocols/Medical/M13_Hyperkalemia.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 1,
          "amountmax": null,
          "unit": "g",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 2,
            "unit": "g",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Ensure patent IV. Flush line well after administration.",
        "ageAlerts": [],
        "warnings": [
          "Caustic to tissues; use large-bore IV and flush well"
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 15,
        "indication": "HyperK PEA/Asystole"
      },
      {
        "context": [
          "Overdose",
          "Toxicology"
        ],
        "codeRole": "antidote",
        "pdfUrl": "/assets/protocols/Overdose/O2_Suspected_OverdosePoisoning.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 1,
          "amountmax": null,
          "unit": "g",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 4,
            "unit": "g",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "For Calcium Channel Blocker or Beta Blocker overdose; ensure patent IV. Repeat per protocol (e.g., every 10 minutes if indicated).",
        "ageAlerts": [],
        "warnings": [
          "Extremely caustic; monitor for bradycardia"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 600,
        "repeatTimemax": null,
        "priority": 10,
        "indication": "CCB/BB OD",
        "_foundIn": null
      },
      {
        "context": [
          "Cardiac",
          "PEA/Asystole",
          "Pediatric"
        ],
        "codeRole": "membrane stabilizer",
        "pdfUrl": "/assets/protocols/Cardiac/C5_Medical_ACLS_PEAAsystole_Adult_and_Pediatric.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 0.2,
          "amountmax": null,
          "unit": "ml",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 0,
            "unit": "g",
            "per": null
          }
        },
        "mdNeed": "**AT MD DISCRETION ONLY**",
        "notes": "PED DOSE : Use for calcium channel or beta blocker overdose;",
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "Verify units and concentration before administration"
        ],
        "isCodeMed": true,
        "isPedMed": true,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 15,
        "indication": "PEA/Asystole",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "hydroxocobalamin",
    "name": "Cyanokit (Hydroxocobalamin)",
    "aka": "Cyanokit",
    "action": "Vitamin B12 precursor. Binds cyanide ions to form nontoxic cyanocobalamin, which is excreted in the urine.",
    "contraindications": "Hypersensitivity to hydroxocobalamin or vitamin B12.",
    "cautions": "Will cause transient red discoloration of skin and urine; may interfere with certain lab tests (e.g., creatinine, bilirubin).",
    "protocols": [
      {
        "context": [
          "Toxicology",
          "Overdose"
        ],
        "codeRole": "antidote",
        "pdfUrl": "/assets/protocols/Overdose/O2_Suspected_OverdosePoisoning.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 5,
          "amountmax": null,
          "unit": "g",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 10,
            "unit": "g",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Infusion over 15 minutes for cyanide poisoning. Repeat per protocol if needed.",
        "ageAlerts": [],
        "warnings": [
          "Causes red discoloration of skin and urine; may interfere with lab tests"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 10,
        "indication": "Cyanide",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "dextrose",
    "name": "Dextrose",
    "aka": "Dextrose",
    "action": "Carbohydrate. Rapidly increases blood glucose levels in patients with hypoglycemia.",
    "contraindications": "Intracranial hemorrhage (relative); hyperglycemia.",
    "cautions": "Extremely hypertonic. Can cause tissue necrosis if the IV is not patent. Use caution in suspected stroke.",
    "protocols": [
      {
        "context": [
          "Medical",
          "Hypoglycemia",
          "Cardiac",
          "PEA/Asystole",
          "VF/pVT",
          "ACLS"
        ],
        "codeRole": "glucose",
        "pdfUrl": "/assets/protocols/Medical/M3_HypoHyperglycemia.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 12.5,
          "amountmax": 25,
          "unit": "g",
          "per": null,
          "rateUnit": null,
          "concentration": {
            "amount": 50,
            "unit": "%"
          },
          "maxDose": {
            "amount": 50,
            "unit": "g",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Adult dose: D50 12.5 to 25 g IV. Alternative: D10 (in 250 mL) IV/IO. Repeat once in 5 minutes.",
        "codeAgeDoseArray": [
          "≤ 1 month: D10 5 mL/kg, repeat once in 5 min",
          "1 month to 2 y/o: D25 2 mL/kg, repeat once in 5 min",
          "> 2 y/o: D50 1 mL/kg (max 25 g per dose) or use D10, repeat once in 5 min",
          "Adult: D50 12.5 to 25 g or D10 (in 250 mL) IV/IO; D50 not for IO use"
        ],
        "ageAlerts": [],
        "warnings": [
          "D50 not for IO use",
          "Ensure IV patency; extravasation causes tissue injury"
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 16,
        "indication": "Hypoglycemia"
      },
      {
        "context": [
          "Medical",
          "Hypoglycemia",
          "Pediatric",
          "Cardiac",
          "PEA/Asystole",
          "VF/pVT",
          "ACLS"
        ],
        "codeRole": "glucose",
        "pdfUrl": "/assets/protocols/Medical/M3_HypoHyperglycemia.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 5,
          "amountmax": null,
          "unit": "ml",
          "per": "kg",
          "rateUnit": null,
          "concentration": {
            "amount": 10,
            "unit": "%"
          },
          "maxDose": null
        },
        "mdNeed": null,
        "notes": "<= 1 month: D10 5 mL/kg IV/IO. Repeat once in 5 minutes.",
        "codeAgeDoseArray": [
          "≤ 1 month: D10 5 mL/kg, repeat once in 5 min",
          "1 month to 2 y/o: D25 2 mL/kg, repeat once in 5 min",
          "> 2 y/o: D50 1 mL/kg (max 25 g per dose) or use D10, repeat once in 5 min",
          "Adult: D50 12.5 to 25 g or D10 (in 250 mL) IV/IO; D50 not for IO use"
        ],
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "Ensure correct concentration and volume for age"
        ],
        "isCodeMed": true,
        "isPedMed": true,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 16,
        "indication": "Hypoglycemia"
      },
      {
        "context": [
          "Medical",
          "Hypoglycemia",
          "Pediatric"
        ],
        "codeRole": "glucose",
        "pdfUrl": "/assets/protocols/Medical/M3_HypoHyperglycemia.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 2,
          "amountmax": null,
          "unit": "ml",
          "per": "kg",
          "rateUnit": null,
          "concentration": {
            "amount": 25,
            "unit": "%"
          },
          "maxDose": null
        },
        "mdNeed": null,
        "notes": "1 month to 2 y/o: D25 2 mL/kg IV/IO. Repeat once in 5 minutes.",
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "Ensure correct concentration and volume for age"
        ],
        "isCodeMed": false,
        "isPedMed": true,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 10,
        "indication": "Hypoglycemia"
      },
      {
        "context": [
          "Medical",
          "Hypoglycemia",
          "Pediatric"
        ],
        "codeRole": "glucose",
        "pdfUrl": "/assets/protocols/Medical/M3_HypoHyperglycemia.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 1,
          "amountmax": null,
          "unit": "ml",
          "per": "kg",
          "rateUnit": null,
          "concentration": {
            "amount": 50,
            "unit": "%"
          },
          "maxDose": {
            "amount": 25,
            "unit": "g",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "> 2 y/o: D50 1 mL/kg (max 25 g per dose) or use D10. Repeat once in 5 minutes.",
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "D50 not for IO use",
          "Ensure correct concentration and volume for age"
        ],
        "isCodeMed": false,
        "isPedMed": true,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 10,
        "indication": "Hypoglycemia"
      }
    ]
  },
  {
    "id": "epi_1_1000",
    "name": "Epinephrine 1:1000",
    "aka": "Epi 1:1",
    "action": "Sympathomimetic (catecholamine). Potent alpha and beta agonist causing vasoconstriction, bronchodilation, and increased chronotropy/inotropy.",
    "contraindications": "None in emergency settings (anaphylaxis).",
    "cautions": "Monitor for tachycardia, hypertension, and arrhythmias. Use with caution in preexisting cardiovascular disease.",
    "protocols": [
      {
        "context": [
          "Medical",
          "Allergic Reaction",
          "BLS"
        ],
        "codeRole": "anaphylaxis",
        "pdfUrl": "/assets/protocols/Medical/M2_Allergic_ReactionsAnaphylaxis.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 0.3,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": {
            "amount": 1,
            "unit": "mg/mL"
          },
          "maxDose": {
            "amount": 0.9,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": "** Additional doses OR < 25lbs must CALL MEDICAL CONTROL **",
        "notes": "IM for adults < 65 y/o and children >60 lb. q 5 minutes as needed (max 0.9 mg in BLS context).",
        "ageAlerts": [],
        "warnings": [
          "Children <25 lbs ** MD ONLY ** : Monitor for cardiovascular effects"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 20,
        "indication": "Anaphylaxis BLS",
        "_foundIn": null
      },
      {
        "context": [
          "Medical",
          "Allergic Reaction",
          "BLS",
          "Pediatric"
        ],
        "codeRole": "anaphylaxis",
        "pdfUrl": "/assets/protocols/Medical/M2_Allergic_ReactionsAnaphylaxis.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 0.15,
          "amountmax": 0.3,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": {
            "amount": 1,
            "unit": "mg/mL"
          },
          "maxDose": {
            "amount": 0.45,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": "** Additional doses OR > 60 lbs must CALL MEDICAL CONTROL **",
        "notes": "IM for children 25–60 lb. Repeat per medical direction; typical repeat every 5 minutes.",
        "ageAlerts": [
          "Pediatric dosing by weight/age group"
        ],
        "warnings": [
          "Confirm correct dose for weight"
        ],
        "isCodeMed": false,
        "isPedMed": true,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 20,
        "indication": "Anaphylaxis - BLS ",
        "_foundIn": null
      },
      {
        "context": [
          "Medical",
          "Allergic Reaction",
          "ALS"
        ],
        "codeRole": "anaphylaxis",
        "pdfUrl": "/assets/protocols/Medical/M2_Allergic_ReactionsAnaphylaxis.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 0.3,
          "amountmax": 0.5,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": {
            "amount": 1,
            "unit": "mg/mL"
          },
          "maxDose": {
            "amount": 1,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": "  * Additional doses AT MD DISCRETION ONLY *",
        "notes": "Adult moderate/severe distress: Repeat IM x5 minutes once if no improvement Call MD.",
        "ageAlerts": [
          "≥ 65 years old with history of cardiac disease, take Beta-Blockers / Digoxin"
        ],
        "warnings": [
          "Monitor cardiovascular status; use caution in elderly or cardiac disease"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 25,
        "indication": "Anaphylaxis - ALS ",
        "_foundIn": null
      },
      {
        "context": [
          "Medical",
          "Allergic Reaction",
          "ALS"
        ],
        "codeRole": "anaphylaxis",
        "pdfUrl": "/assets/protocols/Medical/M2_Allergic_ReactionsAnaphylaxis.pdf",
        "dose": {
          "type": "infusion",
          "amountmin": 10,
          "amountmax": null,
          "unit": "mcg",
          "per": "min",
          "rateUnit": "mcg/min",
          "concentration": null,
          "maxDose": null
        },
        "mdNeed": null,
        "notes": "Consider infusion (e.g., 1 mg in 100 mL NS = 10 mcg/mL) for severe distress after IM doses.",
        "ageAlerts": [],
        "warnings": [
          "Requires IV/monitoring; titrate to effect"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 60,
        "repeatTimemax": null,
        "priority": 25,
        "indication": "Anaphylaxis - ALS ",
        "_foundIn": null
      },
      {
        "context": [
          "Medical",
          "Allergic Reaction",
          "ALS"
        ],
        "codeRole": "anaphylaxis",
        "pdfUrl": "/assets/protocols/Medical/M2_Allergic_ReactionsAnaphylaxis.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 0.15,
          "amountmax": 0.45,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": {
            "amount": 1,
            "unit": "mg/mL"
          },
          "maxDose": {
            "amount": 0.45,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": " Repeat q5 min if in distress.",
        "ageAlerts": [
          "For ≥65 y/o with heart disease, on beta blockers/digoxin, or HR ≥150 in moderate distress."
        ],
        "warnings": [
          "Monitor closely for arrhythmia or ischemia"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 30,
        "indication": "Anaphylaxis - ALS ",
        "_foundIn": null
      },
      {
        "context": [
          "Trauma",
          "Burns"
        ],
        "codeRole": "bronchodilator",
        "pdfUrl": "/assets/protocols/Trauma/T1_Burns.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 0.5,
          "amountmax": null,
          "unit": "ml",
          "per": "kg",
          "rateUnit": null,
          "concentration": {
            "amount": 1,
            "unit": "mg/mL"
          },
          "maxDose": {
            "amount": 5,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Epi 1:1 nebulized for inhalation injury; 0.5 ml/kg nebulized (max 5 mg).",
        "ageAlerts": [
          "Adjust dose for pediatric patients by weight"
        ],
        "warnings": [
          "Monitor for tachycardia and hypertension"
        ],
        "isCodeMed": false,
        "isPedMed": true,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 10,
        "indication": "Burns",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "epi_1_10000",
    "name": "Epinephrine 1:10,000",
    "aka": "Epi 1:10",
    "action": "Sympathomimetic. Dilute concentration for IV/IO administration during resuscitation.",
    "contraindications": "None in cardiac arrest.",
    "cautions": "Inactivated by alkaline solutions (e.g., sodium bicarbonate). May increase myocardial oxygen demand and induce ischemia.",
    "protocols": [
      {
        "context": [
          "PEA/Asystole",
          "Cardiac",
          "VF/pVT",
          "Arrest",
          "ACLS"
        ],
        "codeRole": "resuscitation",
        "pdfUrl": "/assets/protocols/Cardiac/C5_Medical_ACLS_PEAAsystole_Adult_and_Pediatric.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 1,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": {
            "amount": 0.1,
            "unit": "mg/mL"
          },
          "maxDose": null
        },
        "mdNeed": null,
        "notes": "1 mg IV/IO every 3–5 minutes during cardiac arrest.",
        "ageAlerts": [],
        "warnings": [
          "Use during resuscitation per ACLS guidelines"
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "repeatTimemin": 180,
        "repeatTimemax": 300,
        "priority": 30,
        "indication": "Cardiac Arrest",
        "_foundIn": null
      },
      {
        "context": [
          "PEA/Asystole",
          "Cardiac",
          "VF/pVT",
          "Arrest",
          "ACLS"
        ],
        "codeRole": "resuscitation",
        "pdfUrl": "/assets/protocols/Cardiac/C5_Medical_ACLS_PEAAsystole_Adult_and_Pediatric.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 0.01,
          "amountmax": null,
          "unit": "mg",
          "per": "kg",
          "rateUnit": null,
          "concentration": {
            "amount": 0.1,
            "unit": "mg/mL"
          },
          "maxDose": null
        },
        "mdNeed": null,
        "notes": "0.01 mg/kg IV/IO every 3–5 minutes for pediatric arrest.",
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "Confirm weight-based calculation before administration"
        ],
        "isCodeMed": true,
        "isPedMed": true,
        "repeatTimemin": 180,
        "repeatTimemax": 300,
        "priority": 30,
        "indication": "Cardiac Arrest",
        "_foundIn": null
      },
      {
        "context": [
          "Trauma",
          "Hypotension"
        ],
        "codeRole": "pressor",
        "pdfUrl": "/assets/protocols/Trauma/T5_Hypotension_Shock_protocol_Adult_and_Pediatric.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 10,
          "amountmax": null,
          "unit": "mcg",
          "per": null,
          "rateUnit": "mcg/min",
          "concentration": null,
          "maxDose": null
        },
        "mdNeed": null,
        "notes": "Titrate 10–20 mcg (bolus or infusion). Example: 1–2 mL in 100 mL NS yields 10 mcg/mL.",
        "ageAlerts": [],
        "warnings": [
          "Titrate to blood pressure and perfusion"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 180,
        "repeatTimemax": 300,
        "priority": 10,
        "indication": "Hypotension",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "fentanyl",
    "name": "Fentanyl",
    "aka": "Fentanyll",
    "action": "Opioid analgesic. Potent synthetic narcotic that binds to opiate receptors in the CNS to alter pain perception.",
    "contraindications": "Hypersensitivity; severe respiratory depression; SBP < 90 mmHg.",
    "cautions": "High doses can cause chest wall rigidity. Always have naloxone and BVM ready.",
    "protocols": [
      {
        "context": [
          "General",
          "Pain"
        ],
        "codeRole": "analgesic",
        "pdfUrl": "/assets/protocols/General/G5_Pain_Management_Non_CardiacProcedural_Analgesia.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 50,
          "amountmax": null,
          "unit": "mcg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 200,
            "unit": "mcg",
            "per": null
          }
        },
        "mdNeed": "Additional doses before 10 minute interval are AT MD DISCRETION ONLY.",
        "notes": "50 mcg IN or Slow IVP. GCS > 14 & SBP > 90. Repeat q10 minutes as needed.",
        "ageAlerts": [],
        "warnings": [
          "Monitor respiratory rate and sedation level"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 600,
        "repeatTimemax": null,
        "priority": 10,
        "indication": "Pain",
        "_foundIn": null
      },
      {
        "context": [
          "Cardiac",
          "Chest Pain"
        ],
        "codeRole": "analgesic",
        "pdfUrl": "/assets/protocols/Cardiac/C3_Chest_Pain_Believed_to_be_Cardiac_in_Origin.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 25,
          "amountmax": null,
          "unit": "mcg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 100,
            "unit": "mcg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "After 3 NTG : 25 mcg IV over 1–2 minutes. Repeat q10 minutes as needed.",
        "ageAlerts": [],
        "warnings": [
          "Use caution in hypotension; monitor vitals"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 600,
        "repeatTimemax": null,
        "priority": 10,
        "indication": "Chest Pain"
      },
      {
        "context": [
          "General",
          "Post-Intubation"
        ],
        "codeRole": "analgesic",
        "pdfUrl": "/assets/protocols/General/G10_Post_Intubation_Protocol.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 100,
          "amountmax": null,
          "unit": "mcg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 300,
            "unit": "mcg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "100 mcg IV/IO post-intubation; often used with 5 mg midazolam (versed).",
        "ageAlerts": [],
        "warnings": [
          "Monitor respiratory status and hemodynamics"
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 15,
        "indication": "ETT Sedation"
      }
    ]
  },
  {
    "id": "ketamine",
    "name": "Ketamine",
    "aka": "Ketamine",
    "action": "Dissociative anesthetic; provides analgesia and dissociation via NMDA receptor antagonism.",
    "contraindications": "Hypersensitivity; conditions where significant BP increase is dangerous (severe hypertension).",
    "cautions": "May cause emergence reactions (delirium/hallucinations); can cause transient laryngospasm.",
    "protocols": [
      {
        "context": [
          "General",
          "Pain"
        ],
        "codeRole": "analgesic",
        "pdfUrl": "/assets/protocols/General/G5_Pain_Management_Non_CardiacProcedural_Analgesia.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 0.2,
          "amountmax": null,
          "unit": "mg",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 0.6,
            "unit": "mg/kg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Give antiemetic (e.g., ondansetron) prior if indicated. IVP over 90 secs. Monitor for emergence reactions.",
        "ageAlerts": [
          "Consider lower initial dose in elderly"
        ],
        "warnings": [
          "May increase blood pressure and heart rate; monitor closely"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 600,
        "repeatTimemax": null,
        "priority": 10,
        "indication": "Pain",
        "_foundIn": null
      },
      {
        "context": [
          "General",
          "Behavioral Emergencies"
        ],
        "codeRole": "sedation",
        "pdfUrl": "/assets/protocols/General/G2_Behavioral_Emergencies.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 400,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 400,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "< 80 kg: consider 300 mg IM or > 80 kg: administer 400 mg in vastus lateralis. Monitor airway and vitals.",
        "ageAlerts": [],
        "warnings": [
          "Prepare for airway management; have BVM and reversal strategies ready"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 8,
        "indication": "Restraint"
      }
    ]
  },
  {
    "id": "lidocaine",
    "name": "Lidocaine",
    "aka": "Lidocaine",
    "action": "Class Ib antiarrhythmic. Suppresses ventricular ectopy and increases fibrillation threshold by blocking sodium channels.",
    "contraindications": "High-grade heart blocks (2nd/3rd degree) without pacemaker; Stokes-Adams syndrome.",
    "cautions": "Monitor for CNS toxicity (slurred speech, altered mentation, seizures). Reduce dose in elderly or hepatic impairment.",
    "protocols": [
      {
        "context": [
          "Cardiac",
          "Wide Complex Tachycardia"
        ],
        "codeRole": "antiarrhythmic",
        "pdfUrl": "/assets/protocols/Cardiac/C9_Sustained_Undifferentiated_Wide_Complex_Tachycardia_Adult_and_Pediatric.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 1,
          "amountmax": null,
          "unit": "mg",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 3,
            "unit": "mg/kg",
            "per": null
          }
        },
        "mdNeed": "**AT MD DISCRETION ONLY ** ",
        "notes": "Give per protocol; monitor for CNS signs. Consider antiemetic (Zofran) if indicated.",
        "ageAlerts": [],
        "warnings": [
          "CNS toxicity risk; reduce dose in liver disease"
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 18,
        "indication": "Wide Complex Tachycardia",
        "_foundIn": null
      },
      {
        "context": [
          "Overdose",
          "Cardiac"
        ],
        "codeRole": "antiarrhythmic",
        "pdfUrl": "/assets/protocols/Overdose/O2_Suspected_OverdosePoisoning.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 1.5,
          "amountmax": null,
          "unit": "mg",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 3,
            "unit": "mg/kg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Use in TCA/Cocaine/other stimulant OD with pVT; monitor closely.",
        "ageAlerts": [],
        "warnings": [
          "Only for specific toxicologic indications; consult protocol"
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 18,
        "indication": "VF/pVT",
        "_foundIn": null
      },
      {
        "context": [
          "General",
          "IO Access"
        ],
        "codeRole": "local anesthetic",
        "pdfUrl": "/assets/protocols/General/G1_Alternate_Venous_Access_Devices_Intraosseous_Insertion.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 20,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 50,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Administer prior to IO infusion/fluids to reduce pain.",
        "ageAlerts": [],
        "warnings": [
          "Verify dose and concentration for IO use"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 6,
        "indication": "IO Pain",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "naloxone",
    "name": "Narcan (Naloxone)",
    "aka": "Narcan",
    "action": "Opioid antagonist. Competitively displaces opioids from receptors, reversing respiratory depression.",
    "contraindications": "Hypersensitivity to naloxone.",
    "cautions": "May precipitate acute withdrawal; prepare for agitation, vomiting, and possible seizures in chronic users.",
    "protocols": [
      {
        "context": [
          "Overdose",
          "Toxicology"
        ],
        "codeRole": "antidote",
        "pdfUrl": "/assets/protocols/Overdose/O2_Suspected_OverdosePoisoning.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 0.5,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 10,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Initial 0.5 IV.  1 mg IN.",
        "ageAlerts": [],
        "warnings": [
          "May precipitate withdrawal and agitation; monitor airway"
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "repeatTimemin": 180,
        "repeatTimemax": null,
        "priority": 20,
        "indication": "Opioid Overdose",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "nitroglycerin",
    "name": "Nitroglycerin",
    "aka": "Nitro",
    "action": "Vasodilator. Relaxes systemic vascular smooth muscle, reducing preload and myocardial oxygen demand.",
    "contraindications": "Hypotension (SBP < 90–100); recent PDE5 inhibitor use; suspected RV infarction.",
    "cautions": "Monitor for hypotension and headache; avoid in severe aortic stenosis.",
    "protocols": [
      {
        "context": [
          "Cardiac",
          "Chest Pain"
        ],
        "codeRole": "anti-ischemic",
        "pdfUrl": "/assets/protocols/Cardiac/C3_Chest_Pain_Believed_to_be_Cardiac_in_Origin.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 0.4,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": null
        },
        "mdNeed": null,
        "notes": "Sublingual 0.4 mg; repeat q3–5 minutes while SBP > 90 mmHg.",
        "ageAlerts": [],
        "warnings": [
          "Check blood pressure before each dose"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 180,
        "repeatTimemax": 300,
        "priority": 10,
        "indication": "Chest Pain"
      },
      {
        "context": [
          "Cardiac",
          "Pulmonary Edema"
        ],
        "codeRole": "vasodilator",
        "pdfUrl": "/assets/protocols/Cardiac/C4_Congestive_Heart_FailurePulmonary_Edema.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 0.4,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": null
        },
        "notes": "0.4–1.2 mg SL depending on BP. If SBP 100–160: 0.4 mg q5 up to 6 doses; if >160 consider higher dosing.",
        "ageAlerts": [],
        "warnings": [
          "Titrate to BP and perfusion; avoid if hypotensive"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 12,
        "indication": "Pulmonary Edema"
      }
    ]
  },
  {
    "id": "sodium_bicarbonate",
    "name": "Sodium Bicarbonate",
    "aka": "Bicarb",
    "action": "Alkalinizing agent. Buffers metabolic acidosis and shifts potassium intracellularly; used in certain toxicologic and metabolic emergencies.",
    "contraindications": "Metabolic/respiratory alkalosis; hypocalcemia; severe pulmonary edema.",
    "cautions": "Will precipitate if mixed with calcium-containing solutions; may cause extracellular alkalosis.",
    "protocols": [
      {
        "context": [
          "Cardiac",
          "PEA/Asystole",
          "ACLS",
          "Overdose",
          "Toxicology"
        ],
        "codeRole": "alkalinizing agent",
        "pdfUrl": "/assets/protocols/Cardiac/C5_Medical_ACLS_PEAAsystole_Adult_and_Pediatric.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 50,
          "amountmax": null,
          "unit": "mEq",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 100,
            "unit": "mEq",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "50 mEq IVP/IO for TCA overdose or hyperkalemia; repeat per protocol and clinical response.",
        "ageAlerts": [],
        "warnings": [
          "Flush IV line; do not mix with calcium-containing solutions"
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "repeatTimemin": 600,
        "repeatTimemax": null,
        "priority": 18,
        "indication": "PEA/Asystole HyperK",
        "_foundIn": null
      },
      {
        "context": [
          "Overdose",
          "Toxicology"
        ],
        "codeRole": "antidote",
        "pdfUrl": "/assets/protocols/Overdose/O2_Suspected_OverdosePoisoning.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 1,
          "amountmax": null,
          "unit": "mEq",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 2,
            "unit": "mEq/kg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Pediatric and Adult dose not > 50 mEq: Wide complex rhythm (VT) or hypotension after 500 mL fluids; repeat per protocol.",
        "ageAlerts": [],
        "warnings": [
          "Monitor electrolytes and acid-base status"
        ],
        "isCodeMed": false,
        "isPedMed": true,
        "repeatTimemin": 600,
        "repeatTimemax": null,
        "priority": 18,
        "indication": "TCA OD",
        "_foundIn": null
      },
      {
        "context": [
          "Cardiac",
          "PEA/Asystole",
          "Pediatric"
        ],
        "codeRole": "antidote",
        "pdfUrl": "/assets/protocols/Cardiac/C5_Medical_ACLS_PEAAsystole_Adult_and_Pediatric.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 1,
          "amountmax": null,
          "unit": "mEq",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 2,
            "unit": "mEq/kg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "1 mEq/kg for TCA overdose or cocaine intoxication; flush IV line after administration.",
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "Verify dosing and monitor acid-base status"
        ],
        "isCodeMed": true,
        "isPedMed": true,
        "repeatTimemin": 600,
        "repeatTimemax": null,
        "priority": 18,
        "indication": "PEA/Asystole",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "solu_medrol",
    "name": "Solu-Medrol (Methylprednisolone)",
    "aka": "Solu-Medrol",
    "action": "Corticosteroid. Potent anti-inflammatory that reduces mucosal edema and inflammatory response in airways.",
    "contraindications": "Hypersensitivity to product; systemic fungal infections.",
    "cautions": "Delayed onset (1–6 hours); use caution in GI bleeding, diabetes, or severe hypertension.",
    "protocols": [
      {
        "context": [
          "Medical",
          "Respiratory"
        ],
        "codeRole": "anti-inflammatory",
        "pdfUrl": "/assets/protocols/Medical/M7_Respiratory_Distress_withwithout_Wheezing.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 125,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 125,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "125 mg IVP/IO for respiratory distress (e.g., asthma/COPD exacerbation).",
        "ageAlerts": [],
        "warnings": [
          "Onset delayed; adjunctive therapy to bronchodilators and epinephrine"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 8,
        "indication": "Respiratory",
        "_foundIn": null
      },
      {
        "context": [
          "Medical",
          "Allergic Reaction"
        ],
        "codeRole": "anti-inflammatory",
        "pdfUrl": "/assets/protocols/Medical/M2_Allergic_ReactionsAnaphylaxis.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 125,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 125,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Give slowly IVP only if epinephrine has been administered; adjunctive therapy for anaphylaxis.",
        "ageAlerts": [],
        "warnings": [
          "Not a substitute for epinephrine in anaphylaxis; delayed onset"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 12,
        "indication": "Anaphylaxis",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "txa",
    "name": "Tranexamic Acid (TXA)",
    "aka": "TXA",
    "action": "Antifibrinolytic. Competitively inhibits activation of plasminogen to plasmin, preventing fibrin clot breakdown.",
    "contraindications": "Hypersensitivity; active thromboembolic disease (DVT/PE); subarachnoid hemorrhage.",
    "cautions": "Administer via slow infusion (over 10 minutes) to avoid hypotension. Most effective if given within 3 hours of injury.",
    "protocols": [
      {
        "context": [
          "Trauma",
          "Hemorrhage"
        ],
        "codeRole": "antifibrinolytic",
        "pdfUrl": "/assets/protocols/General/G11_Tranexamic_Acid_Administration.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 1,
          "amountmax": null,
          "unit": "g",
          "per": null,
          "rateUnit": null,
          "concentration": {
            "amount": 1,
            "unit": "g/100mL"
          },
          "maxDose": {
            "amount": 2,
            "unit": "g",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Infuse 1 g in 100 mL NS over 10 minutes. Most effective within 3 hours of injury.",
        "ageAlerts": [],
        "warnings": [
          "Avoid rapid bolus; monitor blood pressure"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 12,
        "indication": "Hemorrhage"
      }
    ]
  },
  {
    "id": "midazolam",
    "name": "Versed (Midazolam)",
    "aka": "Versed",
    "action": "Benzodiazepine. Short‑acting CNS depressant providing sedation, anxiolysis, and retrograde amnesia via GABA potentiation.",
    "contraindications": "Acute narrow‑angle glaucoma; shock; severe respiratory depression.",
    "cautions": "May cause respiratory depression or apnea, especially with opioids. Monitor SpO2 and EtCO2 closely.",
    "protocols": [
      {
        "context": [
          "Medical",
          "Seizure"
        ],
        "codeRole": "anticonvulsant",
        "pdfUrl": "/assets/protocols/Medical/M8_Seizure_Adult_and_Pediatric.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 3.75,
          "amountmax": null,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 20,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": "DOSES > 20 MG AT MD DISCRETION ONLY ",
        "notes": "IV preferred; IM/IN options available. IM/IN 10 mg may be used; repeat q5 min until seizure stops or max 20 mg.",
        "ageAlerts": [],
        "warnings": [
          "Monitor airway and ventilation; prepare for assisted ventilation"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 15,
        "indication": "Seizure"
      },
      {
        "context": [
          "General",
          "Procedural",
          "Cardioversion"
        ],
        "codeRole": "sedation",
        "pdfUrl": "/assets/protocols/General/G5_Pain_Management_Non_CardiacProcedural_Analgesia.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 2.5,
          "amountmax": 5,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 10,
            "unit": "mg",
            "per": null
          }
        },
        "notes": "IV 2.5–5 mg OR 10 mg IN as alternative for procedural sedation.",
        "ageAlerts": [],
        "warnings": [
          "May cause respiratory depression; monitor closely"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "mdNeed": null,
        "repeatTimemin": null,
        "repeatTimemax": null,
        "priority": 10,
        "indication": "Cardioversion Sedation",
        "_foundIn": null
      },
      {
        "context": [
          "Overdose",
          "Toxicology"
        ],
        "codeRole": "sedation",
        "pdfUrl": "/assets/protocols/Overdose/O2_Suspected_OverdosePoisoning.pdf",
        "dose": {
          "type": "fixed",
          "amount": 10,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 25,
            "unit": "mg",
            "per": null
          }
        },
        "notes": "10 mg IN or 2.5–5 mg IV . Max 25 mg. Use for severe agitation or seizure in OD as per protocol.",
        "ageAlerts": [],
        "warnings": [
          "Combine with airway precautions; monitor vitals"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "mdNeed": null,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 12,
        "indication": "Overdose Sedation",
        "_foundIn": null
      },
      {
        "context": [
          "General",
          "Behavioral Emergencies"
        ],
        "codeRole": "sedation",
        "pdfUrl": "/assets/protocols/General/G2_Behavioral_Emergencies.pdf",
        "dose": {
          "type": "fixed",
          "amount": 10,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 20,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "10 mg IN; repeat q5 min until BARS score improves. Monitor airway.",
        "ageAlerts": [],
        "warnings": [
          "May cause respiratory depression; have airway equipment ready"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 300,
        "repeatTimemax": null,
        "priority": 10,
        "indication": "Restraint Sedation"
      },
      {
        "context": [
          "General",
          "Ketamine"
        ],
        "codeRole": "adjunct",
        "pdfUrl": "/assets/protocols/General/G8_Ketamine_for_Acute_Pain_Control.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 2,
          "amountmax": 5,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 10,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "For emergence reaction: 2–5 mg IV over 2 minutes; may repeat per protocol.",
        "ageAlerts": [],
        "warnings": [
          "Use cautiously with opioids and other sedatives"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 180,
        "repeatTimemax": null,
        "priority": 12,
        "indication": "Ketamine adjunct"
      },
      {
        "context": [
          "General",
          "Post-Intubation"
        ],
        "codeRole": "post-intubation sedation",
        "pdfUrl": "/assets/protocols/General/G10_Post_Intubation_Protocol.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 5,
          "amountmax": 5,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 10,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "5 mg IV/IO; may repeat once in 10 minutes.",
        "ageAlerts": [],
        "warnings": [
          "Monitor respiratory status and hemodynamics"
        ],
        "isCodeMed": true,
        "isPedMed": false,
        "repeatTimemin": 600,
        "repeatTimemax": null,
        "priority": 18,
        "indication": "ETT Sedation",
        "_foundIn": null
      },
      {
        "context": [
          "General",
          "Post-Intubation",
          "Pediatric"
        ],
        "codeRole": "post-intubation sedation",
        "pdfUrl": "/assets/protocols/General/G10_Post_Intubation_Protocol.pdf",
        "dose": {
          "type": "weight",
          "amountmin": 0.2,
          "amountmax": null,
          "unit": "mg",
          "per": "kg",
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 5,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "Pediatric dose 0.2 mg/kg IV/IO; max single dose 5 mg. May repeat per protocol.",
        "ageAlerts": [
          "Pediatric dosing; calculate by weight"
        ],
        "warnings": [
          "Monitor airway and ventilation"
        ],
        "isCodeMed": true,
        "isPedMed": true,
        "repeatTimemin": 600,
        "repeatTimemax": null,
        "priority": 18,
        "indication": "ETT Sedation",
        "_foundIn": null
      }
    ]
  },
  {
    "id": "ondansetron",
    "name": "Zofran (Ondansetron)",
    "aka": "Zofran",
    "action": "Antiemetic. Selective 5‑HT3 receptor antagonist; blocks serotonin peripherally and centrally.",
    "contraindications": "Hypersensitivity; known prolonged QT syndrome.",
    "cautions": "Can cause QT prolongation. Use with caution in hepatic impairment.",
    "protocols": [
      {
        "context": [
          "Medical",
          "Nausea"
        ],
        "codeRole": "antiemetic",
        "pdfUrl": "/assets/protocols/Medical/M1_Abdominal_Complaints.pdf",
        "dose": {
          "type": "fixed",
          "amountmin": 4,
          "amountmax": 4,
          "unit": "mg",
          "per": null,
          "rateUnit": null,
          "concentration": null,
          "maxDose": {
            "amount": 8,
            "unit": "mg",
            "per": null
          }
        },
        "mdNeed": null,
        "notes": "4 mg IV/IM/ODT. May repeat once after 10 minutes if needed (max 8 mg).",
        "ageAlerts": [],
        "warnings": [
          "Use caution with other QT‑prolonging drugs"
        ],
        "isCodeMed": false,
        "isPedMed": false,
        "repeatTimemin": 600,
        "repeatTimemax": null,
        "priority": 8,
        "indication": "Nausea"
      }
    ]
  }
] as any;
