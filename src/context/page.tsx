"use client";

import { IWorkout } from "@/types/type";
import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface FitContextType {
  saveCount: number;
  setSaveCount: Dispatch<SetStateAction<number>>;
  planCount: number;
  setPlanCount: Dispatch<SetStateAction<number>>;
  planData: IWorkout[];
  setPlanData: Dispatch<SetStateAction<IWorkout[]>>;

  saveData: IWorkout[];
  setSaveData: Dispatch<SetStateAction<IWorkout[]>>;
}

export const FitContext = createContext<FitContextType | null>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [saveCount, setSaveCount] = useState(0);
  const [planCount, setPlanCount] = useState(0);
  const [planData, setPlanData] = useState<IWorkout[]>([]);
  const [saveData, setSaveData] = useState<IWorkout[]>([]);

  const data = {
    saveCount,
    setSaveCount,
    planCount,
    setPlanCount,
    planData,
    setPlanData,
    saveData,
    setSaveData,
  };

  return <FitContext.Provider value={data}>{children}</FitContext.Provider>;
};

export default ContextProvider;
