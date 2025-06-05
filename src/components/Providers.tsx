'use client';

import { ThemeProvider } from "next-themes";
import WorldAnimation from "./WorldAnimation";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative min-h-screen w-full">
        <div className="fixed inset-0 z-0">
          <WorldAnimation />
        </div>
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
} 