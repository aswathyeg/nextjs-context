// app/layout.tsx
import React from "react";

export const metadata = {
  title: "Multi-Page Form Example",
  description: "A Next.js app with multi-page form using Context API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
