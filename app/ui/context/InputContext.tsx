// /app/ui/context/InputContext.tsx
"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type InputContextType = {
  selectedInputs: Record<string, string>;
  setSelectedInputs: (inputs: Record<string, string>) => void;
};

const InputContext = createContext<InputContextType | undefined>(undefined);

export const InputProvider = ({ children }: { children: ReactNode }) => {
  const [selectedInputs, setSelectedInputs] = useState<Record<string, string>>(
    {}
  );

  return (
    <InputContext.Provider value={{ selectedInputs, setSelectedInputs }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputs = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("useInputs must be used within an InputProvider");
  }
  return context;
};
