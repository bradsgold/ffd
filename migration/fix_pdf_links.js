const fs = require('fs');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '..');
const medsFile = path.join(workspaceRoot, 'src', 'data', 'medications.ts');
const mapFile = path.join(__dirname, 'protocols-map.json');
const assetsDir = path.join(workspaceRoot, 'assets', 'protocols');

function stripTsExport(src) {
  const marker = 'export const medications =';
  const idx = src.indexOf(marker);
  if (idx === -1) throw new Error('medications export marker not found');
  const arrStart = src.indexOf('[', idx);
  const arrEnd = src.lastIndexOf(']');
  if (arrStart === -1 || arrEnd === -1) throw new Error('array bounds not found');
  return src.slice(0, idx) + 'export const medications = ' + src.slice(arrStart, arrEnd + 1) + ';\n';
}

function readMeds() {
  const src = fs.readFileSync(medsFile, 'utf8');
  const marker = 'export const medications =';
  const idx = src.indexOf(marker);
  const arrStart = src.indexOf('[', idx);
  const arrEnd = src.lastIndexOf(']');
  const jsonText = src.slice(arrStart, arrEnd + 1);
  return { header: src.slice(0, idx), meds: JSON.parse(jsonText) };
}

function walkDir(dir) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  items.forEach((it) => {
    const full = path.join(dir, it.name);
    if (it.isDirectory()) results.push(...walkDir(full));
    else results.push(full);
  });
  return results;
}

try {
  const { header, meds } = readMeds();
  const files = walkDir(assetsDir);
  const fileMap = {}; // basename(lower) -> first matching posix path
  files.forEach((f) => {
    const base = path.basename(f).toLowerCase();
    const rel = path.relative(path.join(workspaceRoot, 'assets'), f).split(path.sep).join('/');
    const posixPath = '/' + rel; // e.g., /protocols/Cardiac/foo.pdf -> we want /assets/...
    // ensure starts with assets/
    const withAssets = '/' + path.posix.join('assets', rel);
    if (!fileMap[base]) fileMap[base] = withAssets;
  });

  const mapping = {};
  const stillMissing = [];

  meds.forEach((med) => {
    if (!Array.isArray(med.protocols)) return;
    med.protocols.forEach((p) => {
      if (!p.pdfUrl) return;
      const normalized = p.pdfUrl.replace(/\\\\/g, '/');
      const expected = normalized.startsWith('/') ? normalized : '/' + normalized;
      const expectedFull = path.join(workspaceRoot, expected.replace(/\//g, path.sep));
      if (fs.existsSync(expectedFull)) {
        // good — ensure pdfUrl is posix '/assets/...'
        p.pdfUrl = expected;
        mapping[normalized] = expected;
      } else {
        const base = path.basename(normalized).toLowerCase();
        if (fileMap[base]) {
          // update to found path
          p.pdfUrl = fileMap[base];
          mapping[normalized] = fileMap[base];
        } else {
          stillMissing.push({ pdfUrl: normalized, medId: med.id || med.name || null });
        }
      }
      // remove any internal migration props
      if (p._foundIn) delete p._foundIn;
    });
  });

  // write back meds file
  const out = header + '\nexport const medications = ' + JSON.stringify(meds, null, 2) + ' as any;\n';
  fs.writeFileSync(medsFile, out, 'utf8');

  // update map file
  fs.writeFileSync(mapFile, JSON.stringify(mapping, null, 2), 'utf8');
  fs.writeFileSync(path.join(__dirname, 'missing_pdfs_after_fix.json'), JSON.stringify(stillMissing, null, 2), 'utf8');

  console.log('Updated', medsFile);
  console.log('Wrote', mapFile);
  console.log('Missing still =', stillMissing.length);
} catch (err) {
  console.error(err && err.stack ? err.stack : err);
  process.exit(1);
}
