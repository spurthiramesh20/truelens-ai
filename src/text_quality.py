def analyze_text_quality(df):
    texts = df['feedback_text'].astype(str)  # force everything to string

    lengths = texts.apply(len)
    unique_words = texts.apply(lambda x: len(set(x.split())))

    df['text_length'] = lengths
    df['unique_word_count'] = unique_words

    return df
