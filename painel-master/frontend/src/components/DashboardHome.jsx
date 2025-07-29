import { useState } from "react";

export default function DashboardHome() {
  const [step, setStep] = useState(0);
  const etapas = [
    "Bem-vindo à GODSOURCE V∞ Marketing AI!",
    "Converse comigo aqui mesmo para criar campanhas, enviar mídia, ou pedir relatórios.",
    "Clique em 'Nova Campanha' ou mande um comando no chat.",
    "Para WhatsApp/Meta: conecte sua conta usando o botão de integração no menu (ou envie 'integrar whatsapp' no chat).",
    "Pronto! Só conversar. Eu faço todo o resto: criativos, análises, disparos automáticos, otimização e exportação.",
  ];
  return (
    <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl mt-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Onboarding Rápido 🚀</h2>
      <p className="mb-8">{etapas[step]}</p>
      <button
        className="bg-green-600 px-4 py-2 rounded font-bold"
        onClick={() => setStep((s) => (s < etapas.length - 1 ? s + 1 : 0))}
      >
        {step < etapas.length - 1 ? "Próximo" : "Rever"}
      </button>
    </div>
  );
}
