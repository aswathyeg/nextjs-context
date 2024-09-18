// app/ui/page2.tsx
"use client";

import { useFormContext } from "../context/FormContext";
import { useRouter } from "next/navigation";

export default function Page2() {
  const { updateInput } = useFormContext();
  const router = useRouter();

  const handleClick = (name: string, value: string) => {
    updateInput(name, value);
  };
  const handleClickNext = () => {
    router.push("/ui/review"); // Navigate to the review page
  };
  const handleClickPrevious = () => {
    router.push("/ui/page1");
  };
  return (
    <div>
      <h1>Select an Option for Page 2</h1>
      <button onClick={() => handleClick("option2", "Option C")}>
        Option C
      </button>
      <button onClick={() => handleClick("option2", "Option D")}>
        Option D
      </button>
      <div>
        <button onClick={handleClickNext}>next</button>
        <button onClick={handleClickPrevious}>previous</button>
      </div>
    </div>
  );
}
