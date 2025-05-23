import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import layoutData from "@/data/layout.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = layoutData.metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
