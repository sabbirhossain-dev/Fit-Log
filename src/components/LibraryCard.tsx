"use client";

import { IWorkout } from "@/types/type";
import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { RiBuilding3Line } from "react-icons/ri";
import { toast } from "react-toastify";

const LibraryCard = ({ data }: { data: IWorkout }) => {
  const handleCardClick = () => {
    toast.success(`${data.name} is added!`);
  };

  return (
    <div
      className="flex flex-col gap-2 border border-gray-700 rounded-2xl bg-[#20242E] cursor-pointer hover:border-[#C2F800] hover:shadow-md transition-colors ease-in-out duration-400"
      onClick={handleCardClick}
    >
      <div>
        <Image
          src={data.image}
          alt={`${data.name} image`}
          width={300}
          height={300}
          className="w-full h-80 rounded-t-2xl"
        ></Image>
      </div>

      <div className="p-4 flex flex-col gap-1">
        <ul className="flex gap-4 pb-3">
          {data.muscleGroups.map((item) => (
            <li
              key={item}
              className="bg-[#C2F800] text-[#000000] text-[12px] font-bold py-1 px-4 rounded-2xl"
            >
              {item}
            </li>
          ))}
        </ul>
        <h3 className="uppercase text-[#ffffff] text-[18px] font-bold">
          {data.name}
        </h3>
        <p className="text-[#9CA3AF] text-[12px] font-normal pb-3">
          {data.equipment}
        </p>

        <div className="flex gap-5 border-t border-gray-700 pt-4">
          <p className="text-[#9CA3AF] text-[12px] font-normal flex items-center gap-1">
            <span>
              <IoMdTime />
            </span>
            {data.duration} min
          </p>
          <p className="text-[#9CA3AF] text-[12px] font-normal flex items-center gap-1">
            <span>
              <RiBuilding3Line />
            </span>
            {data.caloriesBurned} kcal
          </p>
          <p className="text-[#9CA3AF] text-[12px] font-normal flex items-center gap-1">
            <span>
              <FaRegStar />
            </span>
            {data.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
