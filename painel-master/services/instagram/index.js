const axios = require("axios");
const META_TOKEN = "EAAG...";

module.exports = {
  async postStory({ ig_user_id, image_url, caption }) {
    const url = `https://graph.facebook.com/v18.0/${ig_user_id}/media`;
    try {
      // 1º Passo: Cria media container
      const { data } = await axios.post(url, {
        image_url,
        caption,
        access_token: META_TOKEN,
      });
      // 2º Passo: Publica no perfil
      await axios.post(
        `https://graph.facebook.com/v18.0/${ig_user_id}/media_publish`,
        { creation_id: data.id, access_token: META_TOKEN }
      );
      return { status: "Publicado", id: data.id };
    } catch (e) {
      console.error("Erro Insta API:", e.response?.data || e.message);
      throw e;
    }
  },
};
