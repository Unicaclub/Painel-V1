import React from "react";
import { FaChartLine, FaUsers, FaBox, FaDollarSign, FaCog, FaRobot } from "react-icons/fa";

const menu = [
  { icon: <FaChartLine />, label: "Dashboard" },
  { icon: <FaUsers />, label: "Clients" },
  { icon: <FaBox />, label: "Stock" },
  { icon: <FaDollarSign />, label: "Financial" },
  { icon: <FaRobot />, label: "Bots" },
  { icon: <FaCog />, label: "Settings" }
];

export default function Sidebar() {
  return (
    <aside className="bg-[#181B20] w-56 min-h-screen p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-white mb-10">PAINEL MASTER</h2>
      {menu.map(({ icon, label }) => (
        <button key={label} className="flex items-center gap-3 text-gray-300 hover:text-white py-2 px-2 rounded transition">
          <span className="text-xl">{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </aside>
  );
}
