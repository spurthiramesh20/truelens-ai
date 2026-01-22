def compute_trust_score(df):
    # Simple weighted score
    df["trust_score"] = (
        0.6 * df["text_length_normalized"] +
        0.4 * (df["anomaly"] == 1).astype(int)
    ) * 100

    return df
