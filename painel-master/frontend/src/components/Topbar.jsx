import React from "react";
export default function Topbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-transparent">
      <h1 className="text-3xl font-bold text-white">Innovation</h1>
      <div className="flex items-center gap-6">
        <input className="bg-[#23262B] rounded px-4 py-2 text-gray-200 outline-none" placeholder="Search..." />
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-purple-700 flex items-center justify-center text-white font-bold">M</div>
      </div>
    </header>
  );
}
