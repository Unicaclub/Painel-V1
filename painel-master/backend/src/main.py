from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from src.webhook import router as webhook_router

app = FastAPI()

app.include_router(webhook_router)



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], allow_credentials=True,
    allow_methods=["*"], allow_headers=["*"],
)

class CampaignPrompt(BaseModel):
    prompt: str

@app.post("/api/campaign/create")
async def create_campaign(data: CampaignPrompt):
    # TODO: Integrar IA e Meta API
    return {"status": "created", "plan": f"Campanha criada para: {data.prompt}"}

@app.post("/api/upload")
async def upload_media(file: UploadFile = File(...)):
    # TODO: Salvar arquivo e processar via IA
    return {"filename": file.filename}

@app.get("/api/analytics")
async def analytics():
    # TODO: Retornar métricas reais
    return {"CTR": "2.3%", "ROI": "155%", "Conversion": "14.8%"}
