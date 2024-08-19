import Image from "next/image";
import Arrow from "../../../public/arrow_right_alt.png";
import React, { useState } from "react";
import useStore from "../store/useStore";
export default function RemarksAndEvaluateBtn() {
  const [progress, setProgress] = React.useState(13);
  const view = useStore((state) => state.view);
  const setView = useStore((state) => state.onClick);
  return (
    <div className="flex flex-col md:flex-col-reverse gap-4 mt-4 lg:mt-1 2xl:w-[28rem] 3xl:w-[35rem]">
      <div className="bg-white rounded-[30px] pl-4 w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="text-[#3D404B] text-sm">Overall Score</p>
            <p className="text-2xl font-extrabold font-mont text-[#3D404B]">
              Remark : <span className="text-[#3CC28A]">Good</span>
            </p>
            <p className="text-[#98A1BB] text-xs">Evaluated on 12 Jul 2024</p>
          </div>

          <div className="relative">
            <svg className="w-[8rem] h-[8rem]" viewBox="0 0 100 100">
              <circle
                className="text-[#EAF0F2] stroke-current"
                stroke-width="7"
                cx="50"
                cy="50"
                r="32"
                fill="transparent"
              ></circle>

              <circle
                className="text-[#3CC28A]  progress-ring__circle stroke-current"
                stroke-width="7"
                stroke-linecap="round"
                cx="50"
                cy="50"
                r="32"
                fill="transparent"
                stroke-dasharray="200.2"
                stroke-dashoffset="calc(200.2 - (200.2 * 75) / 100)"
              ></circle>
            </svg>
            <div className="text-2xl font-bold text-[#1E2026] absolute inset-0 flex items-center justify-center font-bricolage">
              {progress}/20
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 w-[290px] md:hidden md:w-full bg-white text-[#6947BF] rounded-full items-center text-start text-[lg] font-[800] flex gap-4 justify-between">
        <button
          onClick={() => {
            setView();
          }}
          className="md:ml-auto"
        >
          {view}
        </button>
        <Image width={15} height={15} src={Arrow} alt="arrow" />
      </div>
      {view === "Expand and view your file" && (
        <div className="px-4 py-2 w-[290px] hidden md:w-full bg-white text-[#6947BF] rounded-full items-center text-start mt-6 text-lg font-[800] md:flex gap-4 justify-between">
          <div className="md:block hidden rounded-full bg-[#f2f3f6] p-1 px-2 text-[#5B6170]">
            IB Economic Paper IA2 . pdf
          </div>
          <button
            onClick={() => {
              setView();
            }}
            className="md:ml-auto"
          >
            {view}
          </button>
          <Image width={15} height={15} src={Arrow} alt="arrow" />
        </div>
      )}
    </div>
  );
}
