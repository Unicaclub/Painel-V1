from fastapi import APIRouter, Request
from .ia_personas import ia_vendedor, ia_suporte, ia_promoter
import requests
import openai
import os

router = APIRouter()
openai.api_key = os.getenv("OPENAI_API_KEY", "SUA_KEY_OPENAI")
VERIFY_TOKEN = os.getenv("VERIFY_TOKEN", "godsource_secret")
META_TOKEN = os.getenv("META_TOKEN", "SEU_TOKEN_META")
PHONE_NUMBER_ID = os.getenv("PHONE_NUMBER_ID", "SEU_ID")

# GET para validação Meta
@router.get("/webhook")
async def verify(request: Request):
    params = dict(request.query_params)
    if (
        params.get("hub.mode") == "subscribe"
        and params.get("hub.verify_token") == VERIFY_TOKEN
    ):
        return int(params["hub.challenge"])
    return {"error": "Verification failed"}

# POST recebe mensagens WhatsApp
@router.post("/webhook")
async def receive_webhook(request: Request):
    data = await request.json()
    entry = data.get("entry", [])
    if entry:
        changes = entry[0].get("changes", [])
        if changes:
            msg = changes[0]["value"].get("messages", [{}])[0]
            from_ = msg.get("from")
            text = msg.get("text", {}).get("body", "")
            print(f"[WHATSAPP IN] De: {from_} | Msg: {text}")
            if from_ and text:
                resposta = processa_resposta(text)
                send_whatsapp_message(from_, resposta)
    return {"status": "received"}

def processa_resposta(text):
    text_lower = text.lower()
    if any(palavra in text_lower for palavra in ["comprar", "promoção", "preço", "venda"]):
        return ia_vendedor(text)
    if any(palavra in text_lower for palavra in ["suporte", "erro", "problema", "ajuda", "senha"]):
        return ia_suporte(text)
    if any(palavra in text_lower for palavra in ["lista", "vip", "evento", "festa", "confirmar presença"]):
        return ia_promoter(text)
    # Padrão: Promoter (ou escolha)
    return ia_promoter(text)


def send_whatsapp_message(to, message):
    url = f"https://graph.facebook.com/v18.0/{PHONE_NUMBER_ID}/messages"
    payload = {
        "messaging_product": "whatsapp",
        "to": to,
        "type": "text",
        "text": {"body": message}
    }
    headers = {"Authorization": f"Bearer {META_TOKEN}"}
    resp = requests.post(url, json=payload, headers=headers)
    print("Enviando resposta:", resp.status_code, resp.text)
