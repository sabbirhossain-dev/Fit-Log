"use client";
import { FitContext } from "@/context/page";
import { IWorkout } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { AiFillFire } from "react-icons/ai";
import { IoStarOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const MySaveCard = ({ data }: { data: IWorkout }) => {
  const context = useContext(FitContext);
  if (!context) return null;
  const { setSaveData, setSaveCount } = context;

  const handleRemove = () => {
    setSaveData((prev) => prev.filter((item) => item.id !== data.id));
    toast.info(`${data.name} is removed!`);
    setSaveCount((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="flex gap-2 w-full justify-between items-center rounded-xl border border-[#272C36] bg-[#15181F] p-4 transition-all duration-300 hover:border-[#363D49]">
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

      {/* right part */}

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-3">
        <Link
          href={`/exercise/${data.id}`}
          className="rounded-full border border-[#343A45] px-3.5 py-2.5 text-[12px] font-normal leading-none text-[#ffffff] transition-all duration-300 hover:border-[#596170] hover:bg-[#1C2028] hover:text-white"
        >
          View Details
        </Link>

        {/* <button
          type="button"
          className="rounded-full bg-[#CCFF00] px-3.5 py-2.5 text-[12px] font-semibold leading-none text-black transition-all duration-200 hover:bg-[#D9FF4D] hover:shadow-[0_0_12px_rgba(204,255,0,0.15)] cursor-pointer"
        >
          ✓&nbsp; Mark as Done
        </button> */}

        <button
          type="button"
          onClick={handleRemove}
          aria-label="Remove workout"
          className="flex cursor-pointer h-6 w-6 items-center justify-center text-[26px] font-light leading-none text-[#59606D] transition-colors duration-200 hover:text-red-600"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default MySaveCard;
