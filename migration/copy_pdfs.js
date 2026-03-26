const fs = require('fs');
const path = require('path');
const vm = require('vm');

const workspaceRoot = path.resolve(__dirname, '..');
const medsFile = path.join(workspaceRoot, 'src', 'data', 'medications.ts');
const mapOut = path.join(__dirname, 'protocols-map.json');
const missingOut = path.join(__dirname, 'missing_pdfs_after_copy.json');
const assetsBase = path.join(workspaceRoot, 'assets');

const backupCandidates = [
  'C:\\Users\\brads\\ems-tools',
  'C:\\ems-tools-backup'
];

function stripTsExport(src) {
  const marker = 'export const medications =';
  const idx = src.indexOf(marker);
  if (idx === -1) throw new Error('medications export marker not found');
  const arrStart = src.indexOf('[', idx);
  const arrEnd = src.lastIndexOf(']');
  if (arrStart === -1 || arrEnd === -1) throw new Error('array bounds not found');
  return src.slice(arrStart, arrEnd + 1);
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

try {
  const src = fs.readFileSync(medsFile, 'utf8');
  const jsonText = stripTsExport(src);
  const meds = JSON.parse(jsonText);
  const mapping = {};
  const missing = [];

  meds.forEach((med) => {
    if (!Array.isArray(med.protocols)) return;
    med.protocols.forEach((p) => {
      if (!p.pdfUrl || typeof p.pdfUrl !== 'string') return;
      const relPath = p.pdfUrl.replace(/^\//, '').replace(/\//g, path.sep);
      // search backups
      let foundPath = null;
      for (const base of backupCandidates) {
        const candidate = path.join(base, relPath);
        if (fs.existsSync(candidate)) {
          foundPath = candidate;
          break;
        }
      }

      const targetRel = path.join('protocols', p.pdfUrl.replace(/^\//, ''));
      const targetFull = path.join(assetsBase, targetRel);
      if (foundPath) {
        ensureDir(path.dirname(targetFull));
        try {
          fs.copyFileSync(foundPath, targetFull);
          mapping[p.pdfUrl] = '/' + path.posix.join('assets', targetRel.split(path.sep).join('/'));
        } catch (err) {
          missing.push({ pdfUrl: p.pdfUrl, medId: med.id || med.name || null, error: String(err) });
        }
      } else {
        missing.push({ pdfUrl: p.pdfUrl, medId: med.id || med.name || null });
      }
    });
  });

  fs.writeFileSync(mapOut, JSON.stringify(mapping, null, 2), 'utf8');
  fs.writeFileSync(missingOut, JSON.stringify(missing, null, 2), 'utf8');

  console.log('Wrote mapping to', mapOut);
  console.log('Wrote missing report to', missingOut, 'missing=', missing.length);
} catch (err) {
  console.error(err && err.stack ? err.stack : err);
  process.exit(1);
}
