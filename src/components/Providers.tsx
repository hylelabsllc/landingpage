'use client';

import { ThemeProvider } from "next-themes";

export default function Providers({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative min-h-screen w-full">
        <div className="fixed inset-0 z-0">
        </div>
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
} 