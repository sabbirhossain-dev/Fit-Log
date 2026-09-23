"use client";

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
}

export const FitContext = createContext<FitContextType | null>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [saveCount, setSaveCount] = useState(0);
  const [planCount, setPlanCount] = useState(0);

  const data = { saveCount, setSaveCount, planCount, setPlanCount };

  return <FitContext.Provider value={data}>{children}</FitContext.Provider>;
};

export default ContextProvider;
