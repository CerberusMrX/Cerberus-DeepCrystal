"""
Cerberus DeepCrystal - Mineral & Gemstone Forensic AI System
Author: Sudeepa Wanigarathna
Backend: FastAPI
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

from routers import analysis, blockchain, database, auth

app = FastAPI(
    title="Cerberus DeepCrystal API",
    description="Advanced AI-Powered Mineral & Gemstone Forensic Laboratory",
    version="1.0.0",
    contact={"name": "Sudeepa Wanigarathna"},
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Static files for QR codes
os.makedirs("static/qrcodes", exist_ok=True)
app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(analysis.router, prefix="/api/analysis", tags=["Analysis"])
app.include_router(blockchain.router, prefix="/api/blockchain", tags=["Blockchain"])
app.include_router(database.router, prefix="/api/database", tags=["Database"])
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])


@app.get("/")
def root():
    return {
        "system": "Cerberus DeepCrystal",
        "author": "Sudeepa Wanigarathna",
        "status": "Operational",
        "version": "1.0.0",
        "disclaimer": "AI Screening Result. For high-value transactions, professional laboratory testing is recommended."
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
