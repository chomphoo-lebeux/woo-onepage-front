import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pyjama en Bambou Écologique | Confort Premium pour Femme",
  description: "Découvrez notre pyjama en bambou 100% naturel, ultra-confortable et respectueux de l'environnement. Livraison gratuite en France.",
  keywords: "pyjama bambou, pyjama femme, vêtement écologique, bambou naturel, pyjama confortable",
  openGraph: {
    title: "Pyjama en Bambou Écologique | Confort Premium pour Femme",
    description: "Découvrez notre pyjama en bambou 100% naturel, ultra-confortable et respectueux de l'environnement.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pyjama en Bambou Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyjama en Bambou Écologique | Confort Premium pour Femme",
    description: "Découvrez notre pyjama en bambou 100% naturel, ultra-confortable et respectueux de l'environnement.",
    images: ["/og-image.jpg"],
  },
};

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
