"use client";

import { FitContext } from "@/context/page";
import { IWorkout } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AiFillFire } from "react-icons/ai";
import { IoStarOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const MyPlanCard = ({ data }: { data: IWorkout }) => {
  const [isDone, setIsDone] = useState(false);

  const context = useContext(FitContext);

  if (!context) return null;

  const { setPlanData, setPlanCount } = context;

  const handleRemove = () => {
    setPlanData((prev) => prev.filter((item) => item.id !== data.id));

    setPlanCount((prev) => Math.max(0, prev - 1));

    toast.info(`${data.name} is removed!`);
  };

  const handleMarkAsDone = () => {
    setIsDone(true);
    toast.success(`${data.name} completed!`);
  };

  return (
    <div
      className={`flex w-full items-center flex-col md:flex-row justify-between gap-5 rounded-xl border p-4 transition-all duration-300 ${
        isDone
          ? "border-[#687048] bg-[#171C16] shadow-[0_0_18px_rgba(204,255,0,0.06)]"
          : "border-[#272C36] bg-[#15181F] hover:border-[#363D49]"
      }`}
    >
      {/* Left Part */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        {/* Image */}
        <div className="h-[80px] w-[144px] overflow-hidden rounded-lg bg-[#20242C]">
          <Image
            src={data.image}
            alt={data.name}
            width={100}
            height={58}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>

        {/* Workout Info */}
        <div className="">
          <h4 className="text-[18px] font-bold uppercase leading-4 tracking-wide text-white">
            {data.name}
          </h4>

          <p className=" text-[12px] leading-3 text-[#8A92A0] font-semibold pt-2 pb-2.5">
            {data.equipment}
          </p>

          {/* Meta */}
          <div className="mt-1.5 flex items-center gap-3 text-[12px] leading-3 text-[#A1A6B0]">
            <span className="flex items-center gap-1 whitespace-nowrap text-[12px]">
              <span className=" text-[#CCFF00]">
                <MdAccessTime />
              </span>
              {data.duration} min
            </span>

            <span className="flex items-center gap-1 whitespace-nowrap text-[12px]">
              <span className=" text-[#CCFF00]">
                <AiFillFire />
              </span>
              {data.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1 whitespace-nowrap text-[12px]">
              <span className=" text-[#CCFF00]">
                <IoStarOutline />
              </span>
              {data.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-3">
        {/* View Details */}
        <Link
          href={`/exercise/${data.id}`}
          className="rounded-full border border-[#343A45] px-3.5 py-2.5 text-[12px] font-normal leading-none text-white transition-all duration-300 hover:border-[#596170] hover:bg-[#1C2028]"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        <button
          type="button"
          onClick={handleMarkAsDone}
          disabled={isDone}
          className={`rounded-full px-3.5 py-2.5 text-[12px] font-semibold leading-none transition-all duration-300 cursor-pointer ${
            isDone
              ? "border border-[#808b56] bg-[#222820] text-[#52f307]"
              : "cursor-pointer bg-[#CCFF00] text-black hover:bg-[#D9FF4D] hover:shadow-[0_0_12px_rgba(204,255,0,0.15)]"
          }`}
        >
          {isDone ? "✓ Completed" : "✓ Mark as Done"}
        </button>

        {/* Remove */}
        <button
          type="button"
          onClick={handleRemove}
          aria-label="Remove workout"
          className="flex h-6 w-6 cursor-pointer items-center justify-center text-[26px] font-light leading-none text-[#59606D] transition-colors duration-200 hover:text-red-600"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default MyPlanCard;
