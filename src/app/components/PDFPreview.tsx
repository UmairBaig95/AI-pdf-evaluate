"use client";
import React, { useEffect, useState } from "react";
import ZoomOut from "../../../public/zoom_out.png";
import ZoomIn from "../../../public/zoom_in.png";
import FullScreen from "../../../public/Full_Screen.png";
import Collapse from "../../../public/collapse_content.png";
import Image from "next/image";
import useStore from "../store/useStore"; 
import { makeApiRequest } from "./services";

const base64toBlob = (data: string): Blob => {
  const base64WithoutPrefix = data.replace(
    /^data:application\/pdf;base64,/,
    ""
  );
  const byteCharacters = atob(base64WithoutPrefix);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: "application/pdf" });
};
export default function PDFPreview() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pdfData, setPdfData] = useState<any>();
  const [evaluationResult, setEvaluationResult] = useState(null);
  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 3)); // Max zoom level is 3
  };
  console.log(evaluationResult);

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Min zoom level is 0.5
  };
  const setView = useStore((state) => state.onClick);
  useEffect(() => {
    const savedFile = localStorage.getItem("uploadedFile");
    if (savedFile) {
      const fileData = JSON.parse(savedFile);
      const blob = base64toBlob(fileData.data);
      const url = URL.createObjectURL(blob);
      setPdfData(url);
      // Mock API request for evaluation
      const fetchData = async () => {
        await makeApiRequest("http://localhost:3000/api/evaluate");
        // worker.start();
        try {
        } catch (err) {}
      };

      fetchData();
      return () => URL.revokeObjectURL(url);
    }
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 p-3 bg-[#f2f3f6] rounded-t-[2rem]">
        <div className=" rounded-full bg-white w-fit  p-1 px-2 text-[#5B6170]">
          IB Economic Paper IA2 . pdf
        </div>
        <div className="flex justify-between gap-3 ">
          <div className="flex w-[30%] justify-between items-center">
            <div onClick={handleZoomOut} className="cursor-pointer">
              <Image width={25} height={25} src={ZoomOut} alt="zoom_out" />
            </div>
            <div className="text-[#5B6170] font-bricolage">
              {Math.round(zoomLevel * 100)}%
            </div>
            <div onClick={handleZoomIn} className="cursor-pointer">
              <Image width={25} height={25} src={ZoomIn} alt="zoom_In" />
            </div>
          </div>
          <div className="ml-auto">
            <Image width={35} height={35} src={FullScreen} alt="Full_Screen" />
          </div>
          <div
            onClick={() => {
              setView();
            }}
            className="md:flex lg:hidden hidden gap-2 rounded-3xl p-2 bg-[#FCFBFD] text-[12px] text-[#5B6170] items-center"
          >
            <Image width={15} height={15} src={Collapse} alt="Full_Screen" />
            Collapse
          </div>
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-b-[1rem] p-3 flex justify-center items-center">
        <div
          className="rounded-md shadow p-4 pt-3"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: "center",
          }}
        >
          {pdfData ? (
            <div>
              <embed
                src={pdfData}
                className="w-[25rem] h-[25rem]  xl:w-[30rem] xl:h-[30rem] 2xl:w-[39rem] 2xl:h-[35rem] 3xl:w-[49rem] "
              ></embed>
            </div>
          ) : (
            <div>No PDF data available</div>
          )}
        </div>
      </div>
    </div>
  );
}
