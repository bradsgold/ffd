const fs = require('fs');
const path = require('path');
const assetsPath = path.join(__dirname, '..', 'src', 'data', 'protocolAssets.ts');
const medsPath = path.join(__dirname, '..', 'src', 'data', 'medications.ts');
let meds = fs.readFileSync(medsPath, 'utf8');
let assetsText = fs.readFileSync(assetsPath, 'utf8');
// extract keys from protocolAssets.ts
const assetKeyRegex = /\"(\/assets\/protocols\/[^"]+)\":/g;
const assetKeys = new Set();
let ak;
while ((ak = assetKeyRegex.exec(assetsText)) !== null) assetKeys.add(ak[1]);
const regex = /"(\/assets\/protocols\/[^\"]*)"/g;
let m;
const missing = new Set();
while ((m = regex.exec(meds)) !== null) {
  const full = m[1];
  if (!assetKeys.has(full)) missing.add(full);
}
if (missing.size === 0) console.log('All pdfUrl entries map to protocolAssets');
else { console.log('Missing mappings:'); console.log(Array.from(missing).join('\n')) }
