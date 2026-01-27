from .trust_score import compute_trust
from .ai_detector import detect_ai
from .anomaly import anomaly_score
from .text_quality import emotion_consistency

def judge_text(text: str):
    trust = compute_trust(text)
    ai_prob = detect_ai(text)
    anomaly = anomaly_score(text)
    emotion = emotion_consistency(text)

    if trust > 75 and ai_prob < 20:
        label = "High Credibility"
    elif trust > 50:
        label = "Medium Credibility"
    else:
        label = "Low Credibility"

    flags = []
    if ai_prob > 30:
        flags.append("AI-like phrasing")
    if anomaly > 40:
        flags.append("Unnatural language pattern")
    if emotion > 80:
        flags.append("Overly emotional or exaggerated tone")

    highlights = []
    exaggerations = ["best ever", "no flaws", "perfect", "always", "never"]
    for word in exaggerations:
        if word in text.lower():
            highlights.append({
                "phrase": word,
                "reason": "Absolute / exaggerated claim"
            })

    return {
        "credibility_label": label,
        "confidence": round(trust / 100, 2),
        "risk_flags": flags,
        "explanation": f"Trust={trust}, AI={ai_prob}, Anomaly={anomaly}, Emotion={emotion}",
        "highlights": highlights
    }
