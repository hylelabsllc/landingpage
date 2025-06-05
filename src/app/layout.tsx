import type { Metadata } from "next";
import localFont from 'next/font/local';
import Providers from "@/components/Providers";
import "./globals.css";

// Use local font instead of Google Fonts
const inter = localFont({
  src: '../fonts/Inter-Regular.woff2',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Hyle Labs LLC - Innovative Software Solutions",
  description: "Hyle Labs LLC is a technology company specializing in mobile apps and SaaS solutions, including NeosBuy and ResumeCrafter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
