import React from "react";
import { useState } from "react";
export default function CampaignBuilder() {
  const [file, setFile] = useState();
  const [msg, setMsg] = useState("");
  async function handleUpload(e) {
    const f = e.target.files[0];
    const form = new FormData();
    form.append("file", f);
    const res = await fetch("/api/upload", {method: "POST", body: form});
    const data = await res.json();
    setMsg("Arquivo enviado: " + data.filename);
  }
  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-xl">
      <h2 className="text-xl mb-2 font-bold">Nova Campanha — Upload de Mídia</h2>
      <input type="file" className="mb-2" onChange={handleUpload} />
      {msg && <div className="text-green-400 mb-2">{msg}</div>}
      {/* TODO: adicionar campos para CTA, segmentação, budget */}
    </div>
  );
}
