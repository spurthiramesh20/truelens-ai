import streamlit as st
import pandas as pd

from src.data_loader import load_data
from src.text_quality import analyze_text_quality
from src.anomaly import detect_anomalies
from src.trust_score import compute_trust_score

st.set_page_config(page_title="TrueLens AI", layout="wide")

st.title("🔍 TrueLens – Feedback Authenticity Analyzer")
st.write("Upload your survey / review data and get Trust Scores for each response.")

uploaded_file = st.file_uploader("Upload CSV file", type=["csv"])

if uploaded_file:
    with st.spinner("Analyzing feedback..."):
        df = pd.read_csv(uploaded_file)

        if 'feedback_text' not in df.columns:
            df = df.rename(columns={df.columns[0]: 'feedback_text'})

        df = analyze_text_quality(df)
        df = detect_anomalies(df)
        df = compute_trust_score(df)

    st.success("Analysis Complete!")

    st.subheader("Top Suspicious Feedback")
    st.dataframe(df.sort_values("trust_score").head(10))

    st.subheader("All Feedback with Trust Scores")
    st.dataframe(df)

    csv = df.to_csv(index=False).encode('utf-8')
    st.download_button("Download Results", csv, "truelens_results.csv", "text/csv")
