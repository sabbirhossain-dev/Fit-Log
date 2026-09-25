"use client";
import MyPlanCard from "@/components/MyPlanCard";
import { FitContext } from "@/context/page";
import Link from "next/link";
import React, { useContext } from "react";

const MyPlan = () => {
  const context = useContext(FitContext);
  if (!context) return null;
  const { saveData, setSaveData, planData, setPlanData } = context;
  console.log(planData.length);
  return (
    <>
      <div className="container pt-10">
        <h3 className="text-[30px] font-bold text-[#ffffff]">MY PLAN</h3>
        <p className="text-[14px] font-normal text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="grid grid-cols-3 gap-5 p-6 bg-[#1a1e27] text-[#8A92A0] rounded-2xl my-7">
          <div className=" border-r border-gray-700">
            <p>Exercise</p>
          </div>
          <div className=" border-r border-gray-700">
            <p>Minutes</p>
          </div>
          <div className="">
            <p>Calories</p>
          </div>
        </div>

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
        </div>
      </div>
    </>
  );
};

export default MyPlan;
