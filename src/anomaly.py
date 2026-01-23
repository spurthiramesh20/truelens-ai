def detect_anomaly(text: str) -> float:
    length = len(text.split())
    if length < 5:
        return 90.0
    if length > 300:
        return 70.0
    return 20.0
