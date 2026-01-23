import re

def analyze_text_quality(text: str) -> float:
    words = text.split()
    length_score = min(len(words) / 50, 1.0)

    unique_ratio = len(set(words)) / max(len(words), 1)

    grammar_penalty = 1.0 if re.search(r"[.!?]$", text) else 0.7

    return round((0.4 * length_score + 0.4 * unique_ratio + 0.2 * grammar_penalty) * 100, 2)
