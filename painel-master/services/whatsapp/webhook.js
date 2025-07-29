const express = require("express");
const router = express.Router();

// Endpoint público para Meta configurar como webhook
router.get("/webhook", (req, res) => {
  // Meta exige verificação de token
  const VERIFY_TOKEN = "godsource_secret";
  if (
    req.query["hub.mode"] === "subscribe" &&
    req.query["hub.verify_token"] === VERIFY_TOKEN
  ) {
    res.status(200).send(req.query["hub.challenge"]);
  } else {
    res.sendStatus(403);
  }
});

// Recebe mensagens POST do WhatsApp
router.post("/webhook", (req, res) => {
  const body = req.body;
  // Processa mensagens recebidas
  if (body.entry && body.entry[0].changes) {
    const msg = body.entry[0].changes[0].value.messages?.[0];
    if (msg) {
      const from = msg.from;
      const text = msg.text?.body || "";
      // TODO: Chamar função para responder/processar
      console.log(`[WHATSAPP IN] De: ${from} | Msg: ${text}`);
    }
  }
  res.sendStatus(200);
});

module.exports = router;
