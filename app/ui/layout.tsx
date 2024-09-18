// app/ui/layout.tsx
"use client";

import { FormProvider } from "./context/FormContext";
import React from "react";

export default function UILayout({ children }: { children: React.ReactNode }) {
  return <FormProvider>{children}</FormProvider>;
}
