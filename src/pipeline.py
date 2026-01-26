from src.text_quality import analyze_text_quality
from src.ai_detector import detect_ai_probability
from src.anomaly import detect_anomaly
from src.trust_score import compute_trust_score

def emotion_consistency(text: str) -> float:
    positive_words = ["good", "great", "amazing", "love", "excellent"]
    negative_words = ["bad", "terrible", "worst", "hate", "poor"]

    pos = sum(w in text.lower() for w in positive_words)
    neg = sum(w in text.lower() for w in negative_words)

    return 100.0 if (pos > 0 and neg == 0) or (neg > 0 and pos == 0) else 60.0

def run_pipeline(text: str):
    quality = analyze_text_quality(text)
    ai_prob = detect_ai_probability(text)
    anomaly = detect_anomaly(text)
    emotion = emotion_consistency(text)

    trust = compute_trust_score(quality, ai_prob, anomaly, emotion)

    return {
        "trust_score": trust,
        "ai_probability": ai_prob,
        "emotion_consistency": emotion,
        "anomaly_score": anomaly,
        "explanation": f"Quality={quality}, AI={ai_prob}, Anomaly={anomaly}, Emotion={emotion}"
    }
