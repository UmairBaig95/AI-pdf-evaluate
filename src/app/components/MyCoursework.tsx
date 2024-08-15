import MenIcom from "../../../public/Frame 1321318635.png";
import HandPencil from "../../../public/handPencil.png";
import Star from "../../../public/Star.png";
import Clock from "../../../public/Clock.png";
import NotePad from "../../../public/NotePad.png";
import PDFPage from "../../../public/PDFImage.png";
import Image from "next/image";
import { useState } from "react";
export function CourseworkCard({
  title,
  subject,
}: {
  title: any;
  subject: any;
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom right, #FFFFFF -10%, #f3f6fa 32%)",
      }}
      className=" p-4 rounded-[12px] flex  gap-4"
    >
      <div className="hidden lg:block">
        <Image src={PDFPage} alt="pdf-view" />
      </div>
      <div>
        <h3 className="text-[18px] text-[#3D404B] font-bold mb-2 line-clamp">
          {title}
        </h3>
        <p className="text-[#7A8196] text-[11px] line-clamp">{subject}</p>
        <div className="flex flex-wrap gap-2 justify-start mt-4">
          <div className="flex gap-1 justify-center items-center rounded-full bg-white p-1 pr-1">
            <Image width={25} src={MenIcom} alt="icon" />
            <div className="text-[#5B6170] font-bold text-[11px]">
              Physics HL
            </div>
          </div>
          <div className="flex gap-1 justify-center items-center rounded-full bg-white p-1 pr-1">
            <Image width={25} src={Clock} alt="icon" />
            <div className="text-[#5B6170] font-bold text-[11px]">
              18 min read
            </div>
          </div>
          <div className="flex gap-1 justify-center items-center rounded-full bg-white p-1 pr-1">
            <Image width={25} src={NotePad} alt="icon" />
            <div className="text-[#5B6170] font-bold text-[11px]">
              2388 words
            </div>
          </div>
          <div className="flex gap-1 justify-center items-center rounded-full bg-white p-1 pr-1">
            <Image width={25} src={Star} alt="icon" />
            <div className="text-[#5B6170] font-bold text-[11px] font-bricolage">
              7/7
            </div>
          </div>
          <div className="flex gap-1 justify-center items-center rounded-full bg-white p-1 pr-1">
            <Image width={25} src={HandPencil} alt="icon" />
            <div className="text-[#5B6170] font-bold text-[11px]">English</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MyCoursework() {
  return (
    <div className="p-2 xl:max-w-[950px] 2xl:max-w-[1150px] xl:mx-auto">
      <h2 className="text-[20px] font-bold mb-4 text-[#5B6170]">
        My Coursework
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {/* Add CourseworkCard components here */}
        <CourseworkCard
          title="How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought "
          subject="How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought "
        />
        <CourseworkCard
          title="How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought "
          subject="How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought "
        />
        {/* Repeat the CourseworkCard component as needed */}
      </div>
      <div className="flex justify-center text-[#98A1BB] font-[600] text-[16px] mt-4">
        View all
      </div>
    </div>
  );
}

export default function ExploreCoursework() {
  const [filter, setFilter] = useState("All");
  return (
    <div className="p-2 xl:max-w-[950px] 2xl:max-w-[1150px] xl:mx-auto">
      <h2 className="text-[20px] font-bold mb-4 text-[#5B6170]">
        Explore Coursework
      </h2>
      <div className="flex flex-wrap gap-2 justify-start mt-2">
        <div className="flex gap-1 justify-center items-center  p-1 pr-2">
          <div
            onClick={() => {
              setFilter("All");
            }}
            className={`${
              filter === "All"
                ? "text-[#6947BF] bg-[#f6f8fb]"
                : "text-[#98A1BB]"
            }  rounded-lg p-2 px-4  font-bold text-[16px]`}
          >
            All
          </div>
        </div>
        <div className="flex gap-1 justify-center items-center  p-1 pr-2">
          <div
            onClick={() => {
              setFilter("IA Example");
            }}
            className={`${
              filter === "IA Example"
                ? "text-[#6947BF] bg-[#f6f8fb]"
                : "text-[#98A1BB]"
            }  rounded-lg p-2  font-bold text-[16px]`}
          >
            IA Example
          </div>
        </div>
        <div className="flex gap-1 justify-center items-center  p-1 pr-2">
          <div
            onClick={() => {
              setFilter("EE Example");
            }}
            className={`${
              filter === "EE Example"
                ? "text-[#6947BF] bg-[#f6f8fb]"
                : "text-[#98A1BB]"
            }  rounded-lg p-2  font-bold text-[16px]`}
          >
            EE Example
          </div>
        </div>
        <div className="flex gap-1 justify-center items-center  p-1 pr-2">
          <div
            onClick={() => {
              setFilter("IO Example");
            }}
            className={`${
              filter === "IO Example"
                ? "text-[#6947BF] bg-[#f6f8fb]"
                : "text-[#98A1BB]"
            }  rounded-lg p-2  font-bold text-[16px]`}
          >
            IO Example
          </div>
        </div>
        <div className="flex gap-1 justify-center items-center  p-1 pr-2">
          <div
            onClick={() => {
              setFilter("TOK Example");
            }}
            className={`${
              filter === "TOK Example"
                ? "text-[#6947BF] bg-[#f6f8fb]"
                : "text-[#98A1BB]"
            }  rounded-lg p-2  font-bold text-[16px]`}
          >
            TOK Example
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-2">
        {/* Add CourseworkCard components here */}
        <CourseworkCard
          title="How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought "
          subject="How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought "
        />
        <CourseworkCard
          title="How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought "
          subject="How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought "
        />
        {/* Repeat the CourseworkCard component as needed */}
      </div>
    </div>
  );
}
