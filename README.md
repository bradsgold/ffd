EMS Tools — Expo/React Native (scaffold)

What I created:
- package.json, tsconfig.json
- App.tsx (entry) rendering Medications screen
- src/data/medications.ts (sanitized subset extracted from backups)
- src/lib/dosing.ts (dose calculation helper)
- src/screens/MedicationsScreen.tsx (basic UI/weight input, kg/lb toggle, adult/pediatric toggle, list)
- migration/meds-raw.json and migration/protocols-map.json (notes and mappings to original backups)

Next steps to run locally:
1. Install Node (LTS), Yarn or npm, and Expo CLI.
2. In `c:\Users\brads\ffd` run:

```bash
npm install
npx expo start
# then open Android emulator or run `npx expo run:android`
```

Notes:
- I extracted a sanitized subset of medications for initial testing. The full original dataset is preserved in your backups at the paths listed in `migration/meds-raw.json`.
- Protocol PDFs are not copied yet; see `migration/protocols-map.json` for suggested mappings. Copy those files into `assets/protocols/...` in the new project.
- I recommend running `expo start -c` to clear Metro cache if you run into module resolution issues.
