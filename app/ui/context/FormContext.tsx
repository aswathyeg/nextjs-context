// app/ui/context/FormContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface FormContextType {
  inputs: Record<string, string | number>;
  updateInput: (name: string, value: string | number) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [inputs, setInputs] = useState<Record<string, string | number>>({});

  const updateInput = (name: string, value: string | number) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ inputs, updateInput }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
