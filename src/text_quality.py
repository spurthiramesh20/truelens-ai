import pandas as pd
import re

def analyze_text_quality(df):
    texts = df["feedback_text"]

    lengths = texts.apply(len)
    word_counts = texts.apply(lambda x: len(x.split()))
    unique_ratio = texts.apply(lambda x: len(set(x.split())) / max(len(x.split()), 1))
    repetition_score = texts.apply(lambda x: len(re.findall(r'(.)\1{3,}', x)))

    features = pd.DataFrame({
        "length": lengths,
        "word_count": word_counts,
        "unique_ratio": unique_ratio,
        "repetition_score": repetition_score
    })

    return features
