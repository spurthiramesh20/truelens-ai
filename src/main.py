from .data_loader import load_data
from .text_quality import analyze_text_quality
from .anomaly import detect_anomalies
from .trust_score import compute_trust_score

print("TrueLens script started...")

df = load_data("data/raw/sentiment-analysis.csv")
print("Rows loaded:", len(df))

quality_features = analyze_text_quality(df)
print("Text quality done")

anomaly_scores = detect_anomalies(quality_features)
print("Anomaly detection done")

df["trust_score"] = compute_trust_score(quality_features, anomaly_scores)
print("Trust score computed")

print(df[["feedback_text", "trust_score"]].head())
