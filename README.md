# AGRI-NEXUS MVP

AGRI-NEXUS is a hackathon MVP for Track 4 — AgriN & Regenerative Agricultural Intelligence.

## What this prototype demonstrates

1. Farm-condition fingerprint using simulated satellite, soil, weather and crop signals.
2. Intervention Memory: comparable cases from multiple regions.
3. Transferability Engine: compatibility signals and uncertainty-aware recommendation.
4. Regenerative transition plan.
5. Multimodal crop-disease scan demo.
6. BRICS knowledge-network concept using local data + shared models/evidence.
7. Voice-ready advisory using browser speech synthesis.

## Important prototype boundary

This MVP uses **transparent simulated data**. It is a working interaction prototype, not a production agronomy system and does not claim validated disease or yield predictions.

The architecture is intentionally connector-ready:
- Satellite adapter
- Weather adapter
- Soil adapter
- Crop/field registry
- Disease model
- Retrieval/intervention memory
- Recommendation/transferability service
- Outcome/feedback store
- Federated model coordinator

## Run locally

No build step is required.

Option A:
Open `index.html` directly in a modern browser.

Option B (recommended):
```bash
python -m http.server 8000
```
Then open:
http://localhost:8000

## Deploy to Vercel

This is a static site. Upload the `agrinexus-prototype` folder to a GitHub repository and import it into Vercel, or use the Vercel CLI.

## Suggested production evolution

- Sentinel-2 / Google Earth Engine connector
- Open-Meteo / national weather service connector
- SoilGrids / national soil data connector
- PostgreSQL + PostGIS
- FastAPI service layer
- Vector database for intervention evidence
- PyTorch/Scikit-learn models
- Federated learning coordinator
- WhatsApp/IVR/voice delivery
- Farmer outcome and field verification pipeline
