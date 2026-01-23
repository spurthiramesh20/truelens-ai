def compute_trust_score(quality, ai_prob, anomaly, emotion):
    score = (
        0.35 * quality +
        0.25 * (100 - ai_prob) +
        0.2 * (100 - anomaly) +
        0.2 * emotion
    )
    return round(score, 2)
