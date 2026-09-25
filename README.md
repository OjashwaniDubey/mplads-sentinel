# MPLADS Sentinel

AI-assisted audit and fraud-detection console for MPLADS / eSAKSHI project records, built as a Smart India Hackathon prototype.

## What this prototype demonstrates

- Data-quality and evidence confidence indicators
- Explainable audit-priority scoring across five detection signals
- Photo, document, GPS, timeline and agency-network evidence summaries
- Human-in-the-loop case actions: approve, clarify, escalate or mark false positive
- Case timeline and decision history
- Search, filtering and responsive evidence drawer

> The risk score is an audit-prioritization signal, not proof of fraud. Final decisions remain with an authorized human auditor.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
npm run build
```

## Product workflow

```text
MPLADS / eSAKSHI records
  -> data quality gate
  -> cost, compliance, photo, timeline and agency checks
  -> explainable risk score + confidence
  -> human auditor review
  -> audit trail and feedback loop
```

The current repository uses mock data so the complete demo can run without a backend. Replace the `seed` array in `src/MPLADSDashboard.jsx` with API data when connecting the production services.
