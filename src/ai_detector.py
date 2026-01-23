import re

AI_PHRASES = [
    "as an ai language model",
    "overall, it can be said",
    "in conclusion",
    "moreover",
    "furthermore"
]

def detect_ai_probability(text: str) -> float:
    text_lower = text.lower()
    hits = sum(1 for p in AI_PHRASES if p in text_lower)
    return min(hits * 20 + len(text.split()) * 0.2, 100)
