import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// CHANGE_THIS -> default font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CHANGE_THIS",
  description: "CHANGE_THIS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
