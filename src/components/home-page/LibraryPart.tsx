import { IWorkout } from "@/types/type";
import React from "react";
import LibraryCard from "../LibraryCard";

const apiData = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  console.log("Status:", res.status);

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }
  return res.json();
};

const LibraryPart = async () => {
  const data = await apiData();

  return (
    <>
      <div id="workouts" className="container text-white px-5 md:px-6 lg:px-0">
        <h3 className="text-[#ffffff] text-[30px] font-bold">THE LIBRARY</h3>
        <p className="text-[#9CA3AF] text-[14px] font-normal">
          Twelve lifts covering every major muscle group.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {data.map((data) => (
            <LibraryCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LibraryPart;
