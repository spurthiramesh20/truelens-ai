def emotion_consistency(text: str) -> float:
    emotional_words = ["amazing", "terrible", "worst", "best", "love", "hate"]
    count = sum(1 for w in emotional_words if w in text.lower())
    return min(count * 20, 100)
