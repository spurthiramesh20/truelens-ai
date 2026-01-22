def analyze_text_quality(df, text_col="feedback_text"):
    if text_col not in df.columns:
        raise ValueError(f"Column '{text_col}' not found. Available columns: {list(df.columns)}")

    texts = df[text_col].fillna("").astype(str)
    lengths = texts.apply(len)

    df["length_score"] = lengths / lengths.max()
    return df
