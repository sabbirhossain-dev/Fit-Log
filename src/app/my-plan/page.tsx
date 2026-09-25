"use client";
import MyPlanCard from "@/components/MyPlanCard";
import MySaveCard from "@/components/MySaveCard";
import PlanDataTotal from "@/components/PlanDataTotal";
import SaveDataTotal from "@/components/SaveDataTotal";
import { FitContext } from "@/context/page";
import Link from "next/link";
import React, { useContext } from "react";

const MyPlan = () => {
  const context = useContext(FitContext);
  if (!context) return null;
  const { saveData, planData } = context;

  return (
    <>
      <div className="container pt-10 px-10 md:px-8 lg:px-0">
        <h3 className="text-[30px] font-bold text-[#ffffff]">MY PLAN</h3>
        <p className="text-[14px] font-normal text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {planData && <PlanDataTotal />}
        {saveData && <SaveDataTotal />}

        {/* plan and save tabs */}

        <div>
          <div role="tablist" className="tabs tabs-box text-white flex gap-5">
            <a role="tab" className="tab tab-active cursor-pointer">
              Todays Plan
            </a>
            <a role="tab" className="tab cursor-pointer">
              Saved
            </a>
          </div>

          {/* plan data */}
          <div className="py-8">
            {planData.map((item) => (
              <MyPlanCard key={item.id} data={item} />
            ))}
          </div>

          {planData.length === 0 && (
            <div className="p-16 flex flex-col justify-center items-center bg-[#111317] my-10 rounded-2xl">
              <p className="text-[16px] font-bold text-[#ffffff]">
                NOTHING HERE YET
              </p>
              <p className="text-[12px] font-normal text-[#A1A1AA] pt-1 pb-5">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="bg-[#C2F10D] px-6 py-2 text-[16px] font-semibold text-[#000000] rounded-3xl"
              >
                Go to workouts
              </Link>
            </div>
          )}

          {/* save data */}
          <div className="py-8">
            {saveData.map((item) => (
              <MySaveCard key={item.id} data={item} />
            ))}
          </div>

          {saveData.length === 0 && (
            <div className="p-16 flex flex-col justify-center items-center bg-[#111317] my-10 rounded-2xl">
              <p className="text-[16px] font-bold text-[#ffffff]">
                NOTHING HERE YET
              </p>
              <p className="text-[12px] font-normal text-[#A1A1AA] pt-1 pb-5">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="bg-[#C2F10D] px-6 py-2 text-[16px] font-semibold text-[#000000] rounded-3xl"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyPlan;
