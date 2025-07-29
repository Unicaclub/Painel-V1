import React from "react";
export default function MetricCard({ title, value, icon, change }) {
  return (
    <div className="bg-[#23262B] rounded-xl p-5 flex flex-col min-w-[160px]">
      <div className="flex justify-between items-center">
        <span className="text-gray-400">{title}</span>
        <span className="text-2xl">{icon}</span>
      </div>
      <span className="text-white text-2xl font-semibold mt-2">{value}</span>
      {change && <span className={`text-xs mt-1 ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{change}</span>}
    </div>
  );
}
