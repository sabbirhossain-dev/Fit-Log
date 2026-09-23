"use client";

import React, { useContext, useState } from "react";
import logo from "@/assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { FitContext } from "@/context/page";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const context = useContext(FitContext);
  const pathname = usePathname();

  if (!context) return null;
  const { planCount, saveCount } = context;

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
    console.log("first");
  };

  return (
    <>
      {/* toggle menu */}
      <div className="sticky top-0 border-b border-gray-700 md:hidden">
        <div className="flex justify-between items-center gap-5 bg-[#0C0D10] px-8 py-5 ">
          <div className="flex gap-4 items-center">
            <button
              className="border border-gray-200 p-2 rounded-md relative"
              onClick={handleToggle}
            >
              {toggleMenu ? (
                <RxCross1 size={20} className="text-red-600" />
              ) : (
                <FaBars size={20} className="text-white" />
              )}
            </button>

            <div>
              <Link href="/" className="flex gap-2 items-center">
                <Image src={logo} alt="logo" className="w-7 h-7" />
                <p className="text-[18px] font-bold text-white uppercase">
                  FITLOG
                </p>
              </Link>
            </div>
          </div>
          <div className="flex gap-5">
            <Link
              href="/my-plan"
              className="cursor-pointer text-[12px] font-medium text-[#9CA3AF]"
            >
              Saved{" "}
              <span className="text-black bg-[#C2F800] px-1 rounded-full ml-1">
                {saveCount}
              </span>
            </Link>
            <Link
              href="/my-plan"
              className="text-[12px] font-medium text-[#9CA3AF] cursor-pointer"
            >
              Plan{" "}
              <span className="text-white bg-transparent px-1 border border-gray-50 ml-1 rounded-full ">
                {planCount}
              </span>
            </Link>
          </div>
        </div>

        {toggleMenu && (
          <ul className="flex flex-col w-2/3 gap-6 bg-black px-10 pl-16 py-9 pb-16 border border-gray-800 rounded-md rounded-t-none shadow-md absolute top-19 left-0">
            <li
              className={`text-[12px] font-medium text-[#9CA3AF] hover:text-[#C2F800] transition-all duration-300 ${pathname === "/" ? "text-[#C2F800] bg-[#1A2312] rounded-3xl" : ""} px-4 py-2`}
            >
              <Link href="/">Workouts</Link>
            </li>

            <li
              className={`text-[12px] font-medium text-[#9CA3AF] hover:text-[#C2F800] transition-all duration-300 ${pathname === "/my-plan" ? "text-[#C2F800] bg-[#1A2312] rounded-3xl" : ""} px-4 py-2`}
            >
              <Link href="/my-plan">My Plan</Link>
            </li>
          </ul>
        )}
      </div>

      {/* normal menu */}
      <div className="hidden md:block border-b border-gray-700 sticky top-0 z-10 bg-[#0C0D10]">
        <div className="container mx-auto flex justify-between items-center py-8 ">
          {/* logo part */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="logo" className="w-7 h-7" />
              <p className="text-[18px] font-bold text-white uppercase">
                FITLOG
              </p>
            </Link>
          </div>

          {/* menu item part */}
          <div>
            <ul className="flex gap-4">
              <li
                className={`text-[12px] font-medium text-[#9CA3AF] hover:text-[#C2F800] transition-all duration-300 ${pathname === "/" ? "text-[#C2F800] bg-[#1A2312] rounded-3xl" : ""} px-4 py-2`}
              >
                <Link href="/">Workouts</Link>
              </li>

              <li
                className={`text-[12px] font-medium text-[#9CA3AF] hover:text-[#C2F800] transition-all duration-300 ${pathname === "/my-plan" ? "text-[#C2F800] bg-[#1A2312] rounded-3xl" : ""} px-4 py-2`}
              >
                <Link href="/my-plan">My Plan</Link>
              </li>
            </ul>
          </div>

          {/* buttons part */}
          <div className="flex gap-8">
            <Link
              href="/my-plan"
              className="cursor-pointer text-[12px] font-medium text-[#9CA3AF]"
            >
              Saved{" "}
              <span className="text-black bg-[#C2F800] px-1 rounded-full ml-1">
                {saveCount}
              </span>
            </Link>
            <Link
              href="/my-plan"
              className="text-[12px] font-medium text-[#9CA3AF] cursor-pointer"
            >
              Plan{" "}
              <span className="text-white bg-transparent px-1 border border-gray-50 ml-1 rounded-full ">
                {planCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
