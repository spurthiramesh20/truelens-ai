from fastapi import FastAPI
from schemas import AnalyzeRequest, AnalyzeResponse, AnalyzeResult
from pipeline import run_pipeline

app = FastAPI(title="TrueLens AI")

@app.get("/")
def health():
    return {"status": "TrueLens is running"}

@app.post("/analyze", response_model=AnalyzeResponse)
def analyze(request: AnalyzeRequest):
    results = []
    for text in request.texts:
        output = run_pipeline(text)
        results.append(AnalyzeResult(**output))
    return {"results": results}
