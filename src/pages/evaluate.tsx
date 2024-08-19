import React from "react";
import Layout from "@/components/ui/Layout";
import "../app/globals.css";
import RemarksAndEvaluateBtn from "@/app/components/RemarksAndEvaluateBtn";
import Evaluation from "@/app/components/Evaluation";
import useStore from "../../src/app/store/useStore";
import PDFPreview from "@/app/components/PDFPreview";
import useWindowSize from "../../src/app/store/useWindowSize";
export default function EvaluatePDF() {
  const view = useStore((state) => state.view);

  return (
    <Layout>
      <div className="p-3 lg:p-0 pt-4 flex flex-col lg:flex-row  gap-4 w-full md:pl-8 md:max-w-[77%] lg:max-w-[85%] md:mx-auto ">
        <div className="hidden md:flex flex-col gap-4">
          {view === "Check detailed Evaluation" && (
            <div className="md:pt-[70px]">
              <PDFPreview />
            </div>
          )}
        </div>
        <div className="lg:hidden block">
          <RemarksAndEvaluateBtn />
        </div>
        <div className="md:hidden block">
          {view === "Check detailed Evaluation" ? (
            <PDFPreview />
          ) : (
            <Evaluation />
          )}
        </div>
        <div className="lg:pt-[70px] hidden  md:flex flex-col gap-4 ">
          <div className="hidden lg:block">
            <RemarksAndEvaluateBtn />
          </div>
          <Evaluation />
        </div>
      </div>
    </Layout>
  );
}
