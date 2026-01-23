from pydantic import BaseModel
from typing import List

class AnalyzeRequest(BaseModel):
    texts: List[str]

class AnalyzeResult(BaseModel):
    trust_score: float
    ai_probability: float
    emotion_consistency: float
    anomaly_score: float
    explanation: str

class AnalyzeResponse(BaseModel):
    results: List[AnalyzeResult]
