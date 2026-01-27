def anomaly_score(text: str) -> float:
    if len(text.split()) < 5:
        return 60
    return 20

