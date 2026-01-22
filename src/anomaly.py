from sklearn.ensemble import IsolationForest
from sklearn.feature_extraction.text import TfidfVectorizer

def detect_anomalies(df):
    texts = df["text"].astype(str)

    vectorizer = TfidfVectorizer(max_features=300)
    features = vectorizer.fit_transform(texts)

    model = IsolationForest(contamination=0.1, random_state=42)
    anomaly_scores = model.fit_predict(features)

    df["anomaly"] = anomaly_scores
    return df, anomaly_scores
