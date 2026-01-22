from fastapi import FastAPI, UploadFile, File
import pandas as pd
from .text_quality import analyze_text_quality
from .anomaly import detect_anomalies
from .trust_score import compute_trust_score


app = FastAPI()

@app.post("/analyze")
def analyze(file: UploadFile = File(...)):
    df = pd.read_csv(file.file)

    # IMPORTANT: use the real column name from your CSV
    df = analyze_text_quality(df, text_col="feedback_text")

    df = detect_anomalies(df)
    df = compute_trust_score(df)

    return df.to_dict(orient="records")



