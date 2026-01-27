def detect_ai(text: str) -> float:
    ai_markers = ["in conclusion", "moreover", "overall", "additionally", "furthermore"]
    score = 0
    for w in ai_markers:
        if w in text.lower():
            score += 10
    return min(score, 100)
