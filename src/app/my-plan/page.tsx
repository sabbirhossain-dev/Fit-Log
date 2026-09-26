"use client";

import MyPlanCard from "@/components/MyPlanCard";
import MySaveCard from "@/components/MySaveCard";
import PlanDataTotal from "@/components/PlanDataTotal";
import SaveDataTotal from "@/components/SaveDataTotal";
import { FitContext } from "@/context/page";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const MyPlan = () => {
  const [tabs, setTabs] = useState<"plan" | "saved">("plan");

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const context = useContext(FitContext);

  if (!context) return null;

  const { saveData, planData } = context;

  // Sort function
  const sortData = (data: typeof planData) => {
    return [...data].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  };

  const sortedPlanData = sortData(planData);
  const sortedSaveData = sortData(saveData);

  // Handle sorting
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as "duration" | "calories" | "rating");
  };

  return (
    <div className="container px-5 pt-10 md:px-6 lg:px-0">
      {/* Header */}
      <h3 className="text-[30px] font-bold text-white">MY PLAN</h3>

      <p className="text-[14px] font-normal text-[#8A92A0]">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Total Data */}
      {tabs === "plan" && <PlanDataTotal />}
      {tabs === "saved" && <SaveDataTotal />}

      {/* Tabs + Sort */}
      <div className="mt-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Tabs */}
          <div className="flex gap-1 rounded-2xl bg-[#151921] p-2 px-3">
            {/* Today's Plan */}
            <button
              type="button"
              onClick={() => setTabs("plan")}
              className={`cursor-pointer rounded-2xl border px-4 py-2 text-[13px] transition-all duration-300 ease-in-out ${
                tabs === "plan"
                  ? "border-gray-700 bg-[#1e2128] font-bold text-white shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
                  : "border-transparent font-normal text-[#8A92A0] hover:bg-[#1b1f26] hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            {/* Saved */}
            <button
              type="button"
              onClick={() => setTabs("saved")}
              className={`cursor-pointer rounded-2xl border px-4 py-2 text-[13px] transition-all duration-300 ease-in-out ${
                tabs === "saved"
                  ? "border-gray-700 bg-[#1e2128] font-bold text-white shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
                  : "border-transparent font-normal text-[#8A92A0] hover:bg-[#1b1f26] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-[#8A92A0]">Sort By</span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="cursor-pointer appearance-none rounded-lg border border-[#303641] bg-[#151921] py-2 pl-3 pr-9 text-[12px] font-medium text-white outline-none transition-all duration-300 hover:border-[#4B5360] focus:border-[#687048]"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <IoChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[14px] text-[#8A92A0]" />
            </div>
          </div>
        </div>

        {/* ================= PLAN ================= */}

        {tabs === "plan" && (
          <>
            {sortedPlanData.length > 0 ? (
              <div className="space-y-4 py-8">
                {sortedPlanData.map((item) => (
                  <MyPlanCard key={item.id} data={item} />
                ))}
              </div>
            ) : (
              <div className="my-10 flex flex-col items-center justify-center rounded-2xl bg-[#111317] p-16">
                <p className="text-[16px] font-bold text-white">
                  NOTHING HERE YET
                </p>

                <p className="pt-1 pb-5 text-center text-[12px] font-normal text-[#A1A1AA]">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="rounded-3xl bg-[#C2F10D] px-6 py-2 text-[16px] font-semibold text-black transition-all duration-300 hover:bg-[#D5FF33] hover:shadow-[0_5px_20px_rgba(194,241,13,0.15)]"
                >
                  Go to workouts
                </Link>
              </div>
            )}
          </>
        )}

        {/* ================= SAVED ================= */}

        {tabs === "saved" && (
          <>
            {sortedSaveData.length > 0 ? (
              <div className="space-y-4 py-8">
                {sortedSaveData.map((item) => (
                  <MySaveCard key={item.id} data={item} />
                ))}
              </div>
            ) : (
              <div className="my-10 flex flex-col items-center justify-center rounded-2xl bg-[#111317] p-16">
                <p className="text-[16px] font-bold text-white">
                  NOTHING HERE YET
                </p>

                <p className="pt-1 pb-5 text-center text-[12px] font-normal text-[#A1A1AA]">
                  Browse the library and save a lift to keep it for later.
                </p>

                <Link
                  href="/"
                  className="rounded-3xl bg-[#C2F10D] px-6 py-2 text-[16px] font-semibold text-black transition-all duration-300 hover:bg-[#D5FF33] hover:shadow-[0_5px_20px_rgba(194,241,13,0.15)]"
                >
                  Go to workouts
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyPlan;
