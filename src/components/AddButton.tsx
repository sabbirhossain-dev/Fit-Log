"use client";
import { FitContext } from "@/context/page";
import React, { useContext } from "react";
import { MdAddCard } from "react-icons/md";

const AddButton = () => {
  const context = useContext(FitContext);
  if (!context) return null;
  const { setPlanCount } = context;

  const handleAddButton = () => {
    console.log("button clicked");
    setPlanCount((prev) => prev + 1);
  };

  return (
    <>
      <button
        className="rounded-md bg-[#CCFF00] px-5 py-2.5 text-[14px] duration-300 cursor-pointer font-semibold text-[#0F1115] transition hover:bg-[#d4ff45] flex items-center gap-2"
        onClick={handleAddButton}
      >
        <MdAddCard size={18} /> Add to today&apos;s plan
      </button>
    </>
  );
};

export default AddButton;
