from pydantic import BaseModel
from typing import List

class JudgeRequest(BaseModel):
    text: str

class Highlight(BaseModel):
    phrase: str
    reason: str

class JudgeResponse(BaseModel):
    credibility_label: str
    confidence: float
    risk_flags: List[str]
    explanation: str
    highlights: List[Highlight]
