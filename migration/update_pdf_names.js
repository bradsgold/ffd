const fs = require('fs');
const path = require('path');
const medsFile = path.join(__dirname, '..', 'src', 'data', 'medications.ts');
let src = fs.readFileSync(medsFile, 'utf8');

// replacements
const replacements = [
  {
    // variants of C-5 Medical ACLS PEA-Asystole
    re: /\/assets\/protocols\/Cardiac\/C-5 Medical ACLS[\s\S]*?PEA[\s\-]*Asystole[\s\S]*?\.pdf/g,
    to: '/assets/protocols/Cardiac/C-5 Medical ACLS- PEA-Asystole Adult and Pediatric.pdf'
  },
  {
    // M-2 Allergic Reactions (with or without hyphen)
    re: /\/assets\/protocols\/Medical\/M-2 Allergic Reactions[\s\-]*Anaphylaxis\.pdf/g,
    to: '/assets/protocols/Medical/M-2 Allergic Reactions-Anaphylaxis.pdf'
  },
  {
    // T5 -> T-5 Hypotension
    re: /\/assets\/protocols\/Trauma\/T5 Hypotension Shock protocol\.pdf/g,
    to: '/assets/protocols/Trauma/T-5 Hypotension Shock protocol- Adult and Pediatric.pdf'
  },
  {
    // T1 Burns 2016 -> T-1 Burns.pdf
    re: /\/assets\/protocols\/Trauma\/T1 Burns[\s\S]*?\.pdf/g,
    to: '/assets/protocols/Trauma/T-1 Burns.pdf'
  }
];

replacements.forEach(r => {
  src = src.replace(r.re, r.to);
});

fs.writeFileSync(medsFile, src, 'utf8');
console.log('Updated', medsFile);
