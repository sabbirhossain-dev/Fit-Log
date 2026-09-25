import { FitContext } from "@/context/page";
import React, { useContext } from "react";

const PlanDataTotal = () => {
  const context = useContext(FitContext);
  if (!context) return null;
  const { planData } = context;
  const totalDuration = planData.reduce(
    (total, item) => total + item.duration,
    0,
  );
  const totalCalories = planData.reduce(
    (total, item) => total + item.caloriesBurned,
    0,
  );
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 p-6 bg-[#1a1e27] text-[#8A92A0] rounded-2xl my-7">
        <div className=" border-r border-gray-700">
          <p>Exercise</p>
          <span className="font-bold text-[36px] text-[#CCFF00]">
            {planData.length}
          </span>
        </div>
        <div className=" border-r border-gray-700">
          <p>Minutes</p>
          <span className="font-bold text-[36px] text-[#ffffff]">
            {totalDuration}
          </span>
        </div>
        <div className="">
          <p>Calories</p>
          <span className="font-bold text-[36px] text-[#ffffff]">
            {totalCalories}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlanDataTotal;
