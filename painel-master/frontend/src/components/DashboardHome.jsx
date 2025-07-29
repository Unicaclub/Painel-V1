import React from "react";
import { useState } from "react";

export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-2">Campanhas Ativas</h2>
        <p className="text-4xl font-extrabold">7</p>
        <span className="text-blue-300">Rodando agora</span>
      </div>
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-2">Leads Capturados</h2>
        <p className="text-4xl font-extrabold">312</p>
        <span className="text-purple-300">+8% hoje</span>
      </div>
      <div className="bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-2">Conversões</h2>
        <p className="text-4xl font-extrabold">55</p>
        <span className="text-pink-300">em 24h</span>
      </div>
    </div>
  );
}
