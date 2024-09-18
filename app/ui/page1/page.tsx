// app/ui/page1.tsx
"use client";

import { useFormContext } from "../context/FormContext";
import { useRouter } from "next/navigation";

export default function Page1() {
  const { updateInput } = useFormContext();
  const router = useRouter();

  const handleClick = (name: string, value: string) => {
    updateInput(name, value); // Store the value globally
    router.push("/ui/page2"); // Navigate to the next page
  };

  return (
    <div>
      <h1>Select an Option for Page 1</h1>
      <button onClick={() => handleClick("option1", "Option A")}>
        Option A
      </button>
      <button onClick={() => handleClick("option1", "Option B")}>
        Option B
      </button>
    </div>
  );
}
