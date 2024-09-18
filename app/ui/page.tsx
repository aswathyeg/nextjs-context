// app/ui/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UIHome() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to page1 when accessing /ui
    router.push("/ui/page1");
  }, [router]);

  return null; // Optionally, show a loading state
}
