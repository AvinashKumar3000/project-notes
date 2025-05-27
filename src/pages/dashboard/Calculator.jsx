import Area from "../../components/calculator/Area";
import Perimeter from "../../components/calculator/Perimeter";
import Volume from "../../components/calculator/Volume";
import { useState } from "react";

const NAV = [<Area/>,<Perimeter/>,<Volume/>];

export default function Calculator() {
  const [tab, setTab] = useState(0);
  return (
    <div className="p-6">
      <div className="flex space-x-4 mb-4">
        <span
          onClick={() => setTab(0)}
          className={`cursor-pointer px-4 py-2 rounded ${tab === 0 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          area
        </span>
        <span
          onClick={() => setTab(1)}
          className={`cursor-pointer px-4 py-2 rounded ${tab === 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          perimeter
        </span>
        <span
          onClick={() => setTab(2)}
          className={`cursor-pointer px-4 py-2 rounded ${tab === 2 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          volume
        </span>
      </div>
      <div className="bg-white p-4 rounded shadow">
        {NAV[tab]}
      </div>
    </div>
  );
}
