<div align="center">
  <img src="https://img.shields.io/badge/Status-Active-success"/>
  <img src="https://img.shields.io/badge/Version-1.0-blue"/>
  <img src="https://img.shields.io/badge/Author-Sudeepa_Wanigarathna-purple"/>
  
  <h1>💎 Cerberus DeepCrystal</h1>
  <p><b>Advanced AI-Powered Mineral & Gemstone Forensic Laboratory</b></p>
</div>

---

## 📌 Overview
Cerberus DeepCrystal is a cutting-edge web application designed to act as a virtual gemstone and mineral forensic laboratory. By combining real artificial intelligence models (OpenAI CLIP Vision Transformers) with rigorous gemological heuristics, the system identifies gemstones, detects treatments, estimates market value, and generates immutable blockchain certificates.

## 🚀 Key Features

* **Real AI Vision Pipeline**: Uses the `openai/clip-vit-base-patch32` Vision Transformer to perform true zero-shot image classification against 29 detailed gemstone profiles.
* **Comprehensive Forensic Analysis**: 
  * Identifies mineral name, chemical formula, and crystal system.
  * Predicts the likelihood of natural vs. synthetic origin.
  * Detects dominant treatments (Heat, Glass-filled, Diffusion, etc.).
  * Assesses inclusion patterns and surface/internal cracks.
* **Economic Valuation**: Calculates an estimated market value in USD and local currency based on gemstone weight, natural probability, and treatment detractions.
* **Geographic Origin Prediction**: Cross-references visual data with known deposit locations to estimate the gemstone's origin country.
* **Blockchain Certification**: Generates a verifiable SHA-256 fingerprint and printable QR code for every analyzed gemstone to serve as an immutable certificate of authenticity.
* **Interactive UI**: A stunning, high-tech dark mode dashboard built with React and Vite.

## 💎 Screenshots

<img width="1920" height="1030" alt="gem1" src="https://github.com/user-attachments/assets/2a6cd034-a611-4018-9f7e-11864912db94" /><br>

<img width="1920" height="1030" alt="gem2" src="https://github.com/user-attachments/assets/9e3a20f4-ca4e-4ccb-8346-219d0577e7f1" /><br>

<img width="1920" height="1030" alt="gem3" src="https://github.com/user-attachments/assets/1badeabf-934f-45e9-a039-578f569ee934" /><br>

<img width="1920" height="1030" alt="gem4" src="https://github.com/user-attachments/assets/54411499-c284-414f-b03a-a49536eff784" /><br>

<img width="1591" height="854" alt="gem5" src="https://github.com/user-attachments/assets/52cf1b96-e5ff-419d-a066-cf416ff80c90" /><br>

<img width="1581" height="782" alt="gem6" src="https://github.com/user-attachments/assets/113336b5-f454-4a87-8259-594ae5de5d4d" /><br>

<img width="1586" height="775" alt="gem7" src="https://github.com/user-attachments/assets/eb0692d8-a6e2-4e71-83c4-ea9ecf197878" /><br>

## 🛠️ Technology Stack

* **Frontend**: React 18, Vite, standard CSS.
* **Backend API**: Python 3.10+, FastAPI, Uvicorn.
* **Database**: SQLite (SQLAlchemy ORM, PostgreSQL-ready).
* **AI & Machine Learning**: PyTorch, HuggingFace `transformers` (CLIP), `scikit-learn`, `numpy`.
* **Security & Certification**: `hashlib` (SHA-256), `qrcode`.

## 📂 Project Structure

```text
Cerberus DeepCrystal/
├── backend/
│   ├── main.py                   # FastAPI Application Root
│   ├── database.py               # SQLAlchemy Database Connection Setup
│   ├── data/
│   │   └── seed_database.py      # Script to populate the 29-mineral database
│   ├── models/
│   │   └── schemas.py            # Pydantic Schemas for API validation
│   ├── routers/                  # API Endpoints (/analysis, /database, /auth, /blockchain)
│   ├── services/
│   │   ├── blockchain.py         # SHA-256 Hashing and QR generation
│   │   └── ml_pipeline.py        # Core AI Engine (PyTorch + CLIP Vision Transformer)
│   └── requirements.txt          # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── pages/                # React Pages (Dashboard, Scanner, DB, History)
│   │   ├── components/           # Reusable UI (Report Dashboard)
│   │   ├── App.jsx               # Main React Application
│   │   └── index.css             # Global Styles (Dark Mode UI)
│   └── vite.config.js            # Vite configuration and API Proxy
├── start_backend.bat             # Batch script launching FastAPI
└── start_frontend.bat            # Batch script launching Vite
```

## 📖 Using the Platform

See [`HOW_TO_USE.md`](./HOW_TO_USE.md) for detailed instructions on launching the system and analyzing your first gemstone.

---
*Created by Sudeepa Wanigarathna. Designed for research and demonstration purposes. For high-value transactions, physical laboratory testing is required.*

