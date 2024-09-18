// app/page.tsx
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Multi-Page Form App</h1>
      <Link href="/ui">Start the Form</Link>
    </div>
  );
}
