import { useEffect, useState } from "react";
export default function AnalyticsPanel() {
  const [metrics, setMetrics] = useState({});
  useEffect(() => {
    fetch("/api/analytics").then(r => r.json()).then(setMetrics);
  }, []);
  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-xl">
      <h2 className="text-xl font-bold mb-2">Resultados da Campanha</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-900 p-4 rounded">CTR<br /><b>{metrics.CTR}</b></div>
        <div className="bg-gray-900 p-4 rounded">ROI<br /><b>{metrics.ROI}</b></div>
        <div className="bg-gray-900 p-4 rounded">Conversão<br /><b>{metrics.Conversion}</b></div>
      </div>
    </div>
  );
}
