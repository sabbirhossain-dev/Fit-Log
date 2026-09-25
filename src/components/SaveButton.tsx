"use client";
import Image from "next/image";
import React, { useContext } from "react";
import saveLogo from "@/assets/save.png";
import { FitContext } from "@/context/page";
import { IWorkout } from "@/types/type";

const SaveButton = ({ data }: { data: IWorkout }) => {
  const context = useContext(FitContext);
  if (!context) return null;
  const { setSaveCount, saveData, setSaveData } = context;

  const handleSaveButton = () => {
    const alreadyAdded = saveData.some((item) => item.id === data.id);

    if (alreadyAdded) return;

    setSaveData((prev) => [...prev, data]);
    setSaveCount((prev) => prev + 1);
  };

  return (
    <>
      <button
        className="rounded-md border border-[#343943] px-5 py-2.5 text-xs font-medium text-[#E5E7EB] transition duration-300 cursor-pointer hover:border-gray-500 hover:text-white flex items-center gap-2"
        onClick={handleSaveButton}
      >
        <Image src={saveLogo} alt="save icon" className="w-3 h-3.5"></Image>{" "}
        Save for later
      </button>
    </>
  );
};

export default SaveButton;
