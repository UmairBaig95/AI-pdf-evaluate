import Sidebar from "@/app/components/SideBar";
import Image from "next/image";
import ZU from "../../../public/ZU.png";
import Fire from "../../../public/Fire.png";
import Calendar from "../../../public/calendar.png";
import Multifiles from "../../../public/Multifiles.png";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="md:flex md:p-2 bg-[#E5ECF3]">
      <Sidebar />
      {children}
      {/* Footer */}
      <div className="absolute hidden right-[15px] md:flex flex-col gap-2 top-2 justify-end items-end">
        <div className="flex gap-1 p-1 pr-2 rounded-full bg-white justify-between items-center">
          <Image src={ZU} width={40} height={40} alt="coin" />
          <div className="font-[800] text-[15px] text-[#5B6170]">120</div>
        </div>
        <div className="flex gap-1 p-1 pr-2 rounded-full bg-white justify-start w-fit items-center">
          <Image src={Fire} width={35} height={35} alt="coin" />
          <div className="font-[800] text-[15px] text-[#5B6170]">24</div>
        </div>
        <div className="flex gap-1 p-1 rounded-full bg-[#f6f8fb] justify-center items-center">
          <Image src={Calendar} width={40} height={40} alt="coin" />
        </div>
        <div className="flex gap-1 p-1 rounded-full bg-[#f6f8fb] justify-center items-center">
          <Image src={Multifiles} width={40} height={40} alt="coin" />
        </div>
      </div>
    </div>
  );
}
