import { IWorkout } from "@/types/type";
import React from "react";
import LibraryCard from "../LibraryCard";

const apiData = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }
  return res.json();
};

const LibraryPart = async () => {
  const data = await apiData();

  return (
    <>
      <div className="container text-white">
        <h3>THE LIBRARY</h3>
        <p>Twelve lifts covering every major muscle group.</p>
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
