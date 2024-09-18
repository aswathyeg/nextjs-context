// app/ui/review.tsx
"use client";

import { useFormContext } from "../context/FormContext";

export default function ReviewPage() {
  const { inputs } = useFormContext();

  return (
    <div>
      <h1>Review Your Selections</h1>
      <div>
        <p>Option 1: {inputs.option1}</p>
        <p>Option 2: {inputs.option2}</p>
        {/* Add more inputs as necessary */}
      </div>
    </div>
  );
}
