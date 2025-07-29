import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MetricCard from "../components/MetricCard";
import { FaDollarSign, FaUsers, FaBox, FaBullhorn } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="flex bg-[#15171B] min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-8 flex flex-col gap-8">
          {/* Métricas */}
          <div className="grid grid-cols-4 gap-6">
            <MetricCard title="Total revenue" value="$24.500" icon={<FaDollarSign />} change="+6%" />
            <MetricCard title="New clients" value="1.250" icon={<FaUsers />} change="+6%" />
            <MetricCard title="Product stock" value="5.735" icon={<FaBox />} change="-2%" />
            <MetricCard title="Active camps" value="5" icon={<FaBullhorn />} change="+2.1%" />
          </div>
          {/* Coloque aqui os charts, feeds, panels, etc */}
          {/* ... */}
        </main>
      </div>
    </div>
  );
}
