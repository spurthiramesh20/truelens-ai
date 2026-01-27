def compute_trust(text: str) -> float:
    length_score = min(len(text) / 300 * 100, 100)
    exaggeration_penalty = 0

    exaggerations = ["best ever", "perfect", "no flaws", "always", "never"]
    for word in exaggerations:
        if word in text.lower():
            exaggeration_penalty += 15

    trust = max(0, length_score - exaggeration_penalty)
    return round(trust, 2)
