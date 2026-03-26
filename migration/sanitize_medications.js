const fs = require('fs');
const path = require('path');
const vm = require('vm');

const workspaceRoot = path.resolve(__dirname, '..');
const migrationFile = path.join(__dirname, 'original_medications.js');
const outFile = path.join(workspaceRoot, 'src', 'data', 'medications.ts');
const missingFile = path.join(__dirname, 'missing_pdfs.json');

const backupCandidates = [
  'C:\\Users\\brads\\ems-tools',
  'C:\\ems-tools-backup'
];

function findArrayBounds(src, startIdx) {
  const firstBracket = src.indexOf('[', startIdx);
  if (firstBracket === -1) return null;
  let depth = 0;
  for (let i = firstBracket; i < src.length; i++) {
    const ch = src[i];
    if (ch === '[') depth++;
    else if (ch === ']') {
      depth--;
      if (depth === 0) return { start: firstBracket, end: i };
    }
  }
  return null;
}

function stripComments(code) {
  // Remove /* */
  code = code.replace(/\/\*[\s\S]*?\*\//g, '');
  // Remove // comments
  code = code.replace(/(^|[^:\\])\/\/.*$/gm, '$1');
  return code;
}

try {
  const src = fs.readFileSync(migrationFile, 'utf8');
  const idx = src.indexOf('export const medications');
  if (idx === -1) throw new Error('export const medications not found');
  const bounds = findArrayBounds(src, idx);
  if (!bounds) throw new Error('could not locate medications array bounds');
  let arrayText = src.slice(bounds.start, bounds.end + 1);
  arrayText = stripComments(arrayText);

  const wrapper = 'module.exports = ' + arrayText + ';';
  const context = { module: { exports: {} }, exports: {} };
  vm.runInNewContext(wrapper, context);
  const meds = context.module.exports;
  if (!Array.isArray(meds)) throw new Error('parsed medications is not an array');

  const missing = [];

  meds.forEach((med) => {
    if (!Array.isArray(med.protocols)) return;
    med.protocols.forEach((p) => {
      if (p.name) {
        p.indication = p.name;
        delete p.name;
      }
      // normalize pdfUrl to start with /assets
      if (typeof p.pdfUrl === 'string') {
        p.pdfUrl = p.pdfUrl.replace(/\\\\/g, '/');
        if (!p.pdfUrl.startsWith('/')) p.pdfUrl = '/' + p.pdfUrl;
      }

      // check existence in backup folders
      const relPath = p.pdfUrl.replace(/^\//, '');
      let found = false;
      for (const base of backupCandidates) {
        const candidate = path.join(base, relPath);
        if (fs.existsSync(candidate)) {
          found = true;
          p._foundIn = candidate;
          break;
        }
      }
      if (!found) {
        missing.push({ pdfUrl: p.pdfUrl, medId: med.id || med.name || null });
        p._foundIn = null;
      }
    });
  });

  // write sanitized TS file
  const header = `// Auto-generated sanitized medications
// Source: migration/original_medications.js
// Warning: This file is safe to import in the app. It has been stripped of helpers and comments.
\n`;
  const out = header + 'export const medications = ' + JSON.stringify(meds, null, 2) + ' as any;\n';
  fs.writeFileSync(outFile, out, 'utf8');
  fs.writeFileSync(missingFile, JSON.stringify(missing, null, 2), 'utf8');
  console.log('Wrote', outFile);
  console.log('Wrote', missingFile, 'missing count=', missing.length);
} catch (err) {
  console.error(err && err.stack ? err.stack : err);
  process.exit(1);
}
