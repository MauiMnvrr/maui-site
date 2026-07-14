import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: remplacer par le domaine final une fois choisi (ex: https://mauimanavarere.com)
  metadataBase: new URL("https://maui-manavarere.vercel.app"),
  title: "Maui Manavarere - Marketing digital & produit",
  description:
    "Marketeur digital qui conçoit et code ses propres outils. SEO, acquisition, data et IA. Fondateur de Boumrank, basé à Marseille.",
  openGraph: {
    title: "Maui Manavarere - Marketing digital & produit",
    description:
      "Marketeur digital qui conçoit et code ses propres outils. SEO, acquisition, data et IA. Fondateur de Boumrank, basé à Marseille.",
    locale: "fr_FR",
    alternateLocale: "en_US",
    type: "website",
    images: ["/portrait.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} antialiased`}>
      <body className="bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
