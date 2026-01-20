import pandas as pd

def load_data(path):
    df = pd.read_csv(path)

    if 'feedback_text' not in df.columns:
        df = df.rename(columns={df.columns[0]: 'feedback_text'})

    df = df.dropna(subset=['feedback_text'])
    df['feedback_text'] = df['feedback_text'].astype(str)

    return df
