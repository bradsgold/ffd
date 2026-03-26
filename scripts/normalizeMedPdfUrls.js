const fs = require('fs');
const path = require('path');
const medsPath = path.join(__dirname, '..', 'src', 'data', 'medications.ts');
let meds = fs.readFileSync(medsPath, 'utf8');

function normalizeName(name) {
  const ext = path.extname(name);
  const base = path.basename(name, ext);
  let safe = base.replace(/\s+/g, '_');
  safe = safe.replace(/[%#@!$&+,:;=<>?\\\/`~\[\]\(\)\-]/g, '');
  safe = safe.replace(/_+/g, '_');
  return safe + ext;
}

// replace any "/assets/protocols/..." within quotes
meds = meds.replace(/("|')\/assets\/protocols\/([^"']+)("|')/g, (m, q1, inner, q2) => {
  const parts = inner.split('/');
  const folder = parts[0];
  const file = parts.slice(1).join('/');
  const norm = normalizeName(file);
  return `${q1}/assets/protocols/${folder}/${norm}${q2}`;
});

fs.writeFileSync(medsPath, meds, 'utf8');
console.log('Normalized pdfUrl entries in', medsPath);
