import { useState } from "react";
import ChatAgent from "./components/ChatAgent";
import DashboardHome from "./components/DashboardHome";
import CampaignBuilder from "./components/CampaignBuilder";
import AnalyticsPanel from "./components/AnalyticsPanel";

function App() {
  const [view, setView] = useState("home");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="p-4 bg-gray-800 flex items-center justify-between">
        <h1 className="text-2xl font-bold">GODSOURCE MARKETING DASHBOARD</h1>
        <nav>
          <button onClick={() => setView("home")}>Home</button>
          <button onClick={() => setView("campaign")}>Nova Campanha</button>
          <button onClick={() => setView("analytics")}>Analytics</button>
          <button onClick={() => setView("chat")}>Chat IA</button>
        </nav>
      </header>
      <main className="flex-1 p-6">
        {view === "home" && <DashboardHome />}
        {view === "campaign" && <CampaignBuilder />}
        {view === "analytics" && <AnalyticsPanel />}
        {view === "chat" && <ChatAgent />}
      </main>
    </div>
  );
}
export default App;
