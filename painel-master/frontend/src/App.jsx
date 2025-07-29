import React, { useState } from "react";
import ChatAgent from "./components/ChatAgent";
import DashboardHome from "./components/DashboardHome";
import CampaignBuilder from "./components/CampaignBuilder";
import AnalyticsPanel from "./components/AnalyticsPanel";
import Dashboard from "./pages/Dashboard";
import "./index.css"; // Certifique-se de que o caminho está correto

const navItems = [
  { key: "home", label: "Dashboard" },
  { key: "campaign", label: "Nova Campanha" },
  { key: "analytics", label: "Analytics" },
  { key: "chat", label: "Chat IA" },
];

export default function App() {
  return <Dashboard />;

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-gray-950 border-r border-gray-800 flex flex-col justify-between">
        <div>
          <div className="p-6 text-3xl font-bold tracking-tight text-blue-400">
            <span className="block mb-2">GODSOURCE</span>
            <span className="text-base text-gray-400 font-light">Marketing AI</span>
          </div>
          <nav className="mt-8 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setView(item.key)}
                className={`px-6 py-3 text-left font-medium rounded-l-xl transition-colors ${
                  view === item.key
                    ? "bg-blue-700 text-white shadow-lg"
                    : "hover:bg-gray-800 text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-6 text-xs text-gray-600">
          Powered by <span className="text-blue-400">GODSOURCE</span>
        </div>
      </aside>
      {/* Main */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 flex items-center px-10 border-b border-gray-800 bg-gray-950/80 backdrop-blur sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-blue-400 tracking-wide">
            {navItems.find((n) => n.key === view)?.label}
          </h1>
          <div className="ml-auto flex items-center gap-4">
            <span className="text-xs text-gray-400">Módulo Premium</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          </div>
        </header>
        {/* Main Content */}
        <section className="p-10 flex-1 overflow-y-auto bg-gradient-to-br from-gray-950 via-black to-gray-900">
          <div className="max-w-5xl mx-auto">
            {view === "home" && <DashboardHome />}
            {view === "campaign" && <CampaignBuilder />}
            {view === "analytics" && <AnalyticsPanel />}
            {view === "chat" && <ChatAgent />}
          </div>
        </section>
      </main>
    </div>
  );
}
