import numpy as np

def compute_trust_score(features, anomaly_scores):
    norm_anomaly = (anomaly_scores - anomaly_scores.min()) / (anomaly_scores.max() - anomaly_scores.min())

    quality_score = (
        0.4 * features["unique_ratio"] +
        0.3 * (features["length"] / features["length"].max()) +
        0.3 * (1 - features["repetition_score"] / (features["repetition_score"].max() + 1))
    )

    trust_score = 100 * (0.6 * quality_score + 0.4 * norm_anomaly)
    return trust_score.round(2)
