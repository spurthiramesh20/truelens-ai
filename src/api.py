from fastapi import FastAPI
from .schemas import JudgeRequest, JudgeResponse
from .pipeline import judge_text

app = FastAPI(title="TrueLens – Credibility Judge")

@app.post("/judge", response_model=JudgeResponse)
def judge(req: JudgeRequest):
    return judge_text(req.text)
