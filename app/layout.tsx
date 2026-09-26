import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mauimanavarere.com"),
  title: "Maui Manavarere - Marketing digital, développement web et IA",
  description:
    "Marketing digital, développement web et IA pour les TPE, les commerces et les SaaS. Fondateur d'Iaora Labs, je travaille à distance depuis Tahiti, en Polynésie française.",
  openGraph: {
    title: "Maui Manavarere - Marketing digital, développement web et IA",
    description:
      "Marketing digital, développement web et IA pour les TPE, les commerces et les SaaS. Fondateur d'Iaora Labs, je travaille à distance depuis Tahiti, en Polynésie française.",
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
