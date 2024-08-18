import Header from "@/app/components/Header";
import ExploreCoursework, { MyCoursework } from "@/app/components/MyCoursework";
import UploadSection from "@/app/components/UploadSection";
import "../app/globals.css";
import Bot from "../../public/Frame 1321318565.png";
import Image from "next/image";
import Layout from "@/components/ui/Layout";
export default function Uploadpdf() {
  return (
    <>
      <Layout>
        <div className="flex-1 justify-center  items-center bg-[#E5ECF3] p-2 md:p-8 relative">
          <Header />
          <div className="mt-2 flex flex-col xl:justify-center lg:flex-row gap-4">
            <div className="mt-6 p-2">
              <div className="p-2 pb-0 pt-8 max-w-[400px] md:max-w-[500px] lg:max-w-[550px] hidden xl:flex mb-5  mx-auto lg:mx-0  justify-between items-center">
                <div>
                  <span className="text-[24px] font-[800] text-[#1E2026] font-mont">
                    Hey IB Folks ! Unsure about the quality of your answers?
                    &nbsp;
                  </span>
                  <span className="text-[#6947BF] text-[24px]  font-[800] font-mont">
                    We get you.
                  </span>
                </div>
              </div>
              <UploadSection />
            </div>
            <div className="lg:block hidden lg:max-w-[313px] xl:max-w-[323px] xl:mt-[6.8rem]">
              <Image className="w-full max-w-[100%]" src={Bot} alt="bot" />
            </div>
          </div>
          <div className="mt-8">
            <MyCoursework />
          </div>
          <div className="mt-8">
            <ExploreCoursework />
          </div>
        </div>
      </Layout>
    </>
  );
}
