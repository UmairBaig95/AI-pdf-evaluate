import React from "react";
import { Progress } from "@/components/ui/progress";
import Layout from "@/components/ui/Layout";
import "../app/globals.css";
export default function EvaluatePDF() {
  const [progress, setProgress] = React.useState(65);

  return (
    <Layout>
      <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm font-medium">Overall Score</p>
            <p className="text-lg font-semibold text-black">
              Remark: <span className="text-green-500">Good</span>
            </p>
            <p className="text-gray-400 text-xs">Evaluated on 12 Jul 2024</p>
          </div>
          <div className="relative">
            <div className="text-2xl font-bold text-black absolute inset-0 flex items-center justify-center">
              {progress}/20
            </div>
            <div className="relative w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-200 stroke-current"
                  stroke-width="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                ></circle>

                <circle
                  className="text-indigo-500  progress-ring__circle stroke-current"
                  stroke-width="10"
                  stroke-linecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke-dasharray="251.2"
                  stroke-dashoffset="calc(251.2 - (251.2 * 75) / 100)"
                ></circle>

               
              </svg>
            </div>
          </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-[#6947BF] text-white rounded-lg text-center w-full text-sm font-semibold hover:bg-[#553699] transition-all">
          Check detailed Evaluation →
        </button>
      </div>
    </Layout>
  );
}
