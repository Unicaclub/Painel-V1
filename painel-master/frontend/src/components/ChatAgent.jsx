import { useState } from "react";
export default function ChatAgent() {
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState([]);

  async function handleSend() {
    const res = await fetch("/api/campaign/create", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({prompt})
    });
    const data = await res.json();
    setHistory([...history, {role: "user", text: prompt}, {role: "bot", text: data.plan}]);
    setPrompt("");
  }
  return (
    <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-xl shadow-2xl">
      <div className="mb-4 h-60 overflow-y-auto bg-gray-900 rounded-lg p-4">
        {history.map((msg, i) => (
          <div key={i} className={msg.role === "user" ? "text-right" : "text-left"}>
            <span className={msg.role === "user" ? "text-blue-400" : "text-green-400"}>
              {msg.role === "user" ? "Você: " : "GODSOURCE: "}
            </span>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input className="flex-1 p-2 bg-gray-700 rounded" value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Ex: Criar campanha no Insta..." />
        <button className="bg-green-600 px-4 py-2 rounded" onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}
