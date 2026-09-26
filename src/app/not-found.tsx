import Link from "next/link";
import React from "react";
import { FaDumbbell } from "react-icons/fa6";

const notFound = () => {
  return (
    <main className="container flex min-h-[75vh] items-center justify-center px-6">
      <div className="flex max-w-lg flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#303641] bg-[#151921] text-[#CCFF00]">
          <FaDumbbell className="text-3xl" />
        </div>

        {/* 404 */}
        <h1 className="text-4xl font-black tracking-tight text-[#CCFF00]">
          404
        </h1>

        <h2 className="mt-3 text-xl font-bold uppercase text-white">
          WORKOUT NOT FOUND
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-[#8A92A0]">
          The workout or page you&apos;re looking for doesn&apos;t exist.
          Let&apos;s get you back to the workout library.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2 text-[12px] font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9FF4D] hover:shadow-[0_8px_25px_rgba(204,255,0,0.18)]"
        >
          <span>BACK TO WORKOUTS</span>

          <span className="text-base transition-transform duration-300 group-hover:-translate-x-1"></span>
        </Link>
      </div>
    </main>
  );
};

export default notFound;
