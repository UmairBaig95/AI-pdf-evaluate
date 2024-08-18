import React, { useState } from "react";
import ZoomOut from "../../../public/zoom_out.png";
import ZoomIn from "../../../public/zoom_in.png";
import FullScreen from "../../../public/Full_Screen.png";
import Collapse from "../../../public/collapse_content.png";
import Image from "next/image";
import useStore from "../store/useStore";

export default function PDFPreview() {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 3)); // Max zoom level is 3
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Min zoom level is 0.5
  };
  const setView = useStore((state) => state.onClick);
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
            className="md:flex hidden gap-2 rounded-3xl p-2 bg-[#FCFBFD] text-[12px] text-[#5B6170] items-center"
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
          repudiandae reiciendis beatae, quibusdam voluptate commodi
          necessitatibus, accusantium laborum enim et in illo quasi cupiditate
          adipisci eos ducimus? Voluptatem, recusandae aliquid! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Vitae, debitis vel at
          rerum laudantium sed veniam omnis sint quisquam repudiandae nulla
          accusantium sit? Quam distinctio molestiae, doloremque alias provident
          illum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequatur sed vitae, aliquam nihil repudiandae ut molestias
          necessitatibus dicta molestiae natus vel veritatis maxime itaque aut
          eum nesciunt sunt voluptatibus! Magnam. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Hic repudiandae reiciendis beatae,
          quibusdam voluptate commodi necessitatibus, accusantium laborum enim
          et in illo quasi cupiditate adipisci eos ducimus? Voluptatem,
          recusandae aliquid! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vitae, debitis vel at rerum laudantium sed veniam omnis sint
          quisquam repudiandae nulla accusantium sit? Quam distinctio molestiae,
          doloremque alias provident illum. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Consequatur sed vitae, aliquam nihil
          repudiandae ut molestias necessitatibus dicta molestiae natus vel
          veritatis maxime itaque aut eum nesciunt sunt voluptatibus! Magnam.
        </div>
      </div>
    </div>
  );
}
