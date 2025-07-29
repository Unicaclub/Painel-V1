const axios = require("axios");

const ZAPI_URL = "https://api.z-api.io/instanceXXXX/tokenXXXX"; // Troque para seu endpoint

module.exports = {
  async send({ to, message }) {
    const url = `${ZAPI_URL}/send-messages`;
    try {
      const resp = await axios.post(url, {
        phone: to,
        message: message
      });
      return resp.data;
    } catch (e) {
      console.error("Erro envio WhatsApp:", e.response?.data || e.message);
      throw e;
    }
  },
};
