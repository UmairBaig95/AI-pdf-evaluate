import Image from "next/image";
import Logo from "../../../public/Frame 1321318155.png";
import DashboardSvg from "../SVG/DashboardSvg";
import Avatar from "../../../public/Frame 1321318168.png";
import Menu from "../../../public/menu.png";
import BookSvg from "../SVG/BookSvg";
import FileCopySvg from "../SVG/FileCopySvg";
import QuizSvg from "../SVG/QuizSvg";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Sidebar() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="w-full md:h-screen md:w-[52px] md:bg-[#F8FAFC] bg-white text-white flex md:flex-col  items-center md:rounded-[16px] px-2 md:px-0 py-2">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="md:mb-8 w-20 md:w-full"
        >
          <Image alt="logo" src={Logo} />
        </div>
        <div
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className={`ml-auto md:hidden block`}
        >
          <a href="#">
            <Image width={45} src={Menu} alt="avatar" />
          </a>
        </div>
        <nav className={`md:block hidden space-y-4 `}>
          <Link href="/" className="flex justify-center">
            <div className="w-10 h-10 rounded-full p-2 justify-center items-center flex  bg-[#6947BF]">
              <DashboardSvg width="20" height="20" fill="white" />
            </div>
          </Link>
          <a href="#" className="flex justify-center">
            <div className="w-12 h-12 rounded-full p-2 justify-center items-center flex  ">
              <BookSvg width="20" height="20" />
            </div>
          </a>
          <a href="#" className="flex justify-center">
            <div className="w-12 h-12 rounded-full p-2 justify-center items-center flex  ">
              <FileCopySvg width="20" height="20" />
            </div>
          </a>
          <a href="#" className="flex justify-center">
            <div className="w-12 h-12 rounded-full p-2 justify-center items-center flex  ">
              <QuizSvg width="24" height="24" />
            </div>
          </a>
        </nav>
        <div className="mt-auto md:block hidden">
          <a href="#">
            <Image width={45} src={Avatar} alt="avatar" />
          </a>
        </div>
      </div>
      <nav
        className={`md:hidden ${
          openMenu ? "block" : "hidden"
        } space-y-4 px-4 bg-[#F8FAFC] `}
      >
        <a href="#" className="flex items-center gap-5 text-2xl font-bold">
          <div className="w-10 h-10 rounded-full p-2 justify-center items-center flex ">
            <DashboardSvg fill="black" width="20" height="20" />
          </div>
          Dashboard
        </a>
        <a href="#" className="flex items-center gap-4 text-2xl font-bold">
          <div className="w-12 h-12 rounded-full p-2 justify-center items-center flex  ">
            <BookSvg width="20" height="20" />
          </div>
          Book Preview
        </a>
        <a href="#" className="flex items-center gap-4 text-2xl font-bold">
          <div className="w-12 h-12 rounded-full p-2 justify-center items-center flex  ">
            <FileCopySvg width="20" height="20" />
          </div>
          Copy Text
        </a>
        <a href="#" className="flex items-center gap-4 text-2xl font-bold">
          <div className="w-12 h-12 rounded-full p-2 justify-center items-center flex  ">
            <QuizSvg width="28" height="28" />
          </div>
          Quiz
        </a>
      </nav>
    </>
  );
}
