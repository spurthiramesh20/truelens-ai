from fastapi import FastAPI
from pydantic import BaseModel
from .text_quality import analyze_text_quality
from .anomaly import detect_anomalies
from .trust_score import compute_trust_score

app = FastAPI()

class TextRequest(BaseModel):
    texts: list[str]

@app.get("/health")
def health():
    return {"status": "TrueLens is running"}

@app.post("/analyze")
def analyze(req: TextRequest):
    ...