import type { Metadata } from "next";
import { Arapey, Assistant } from "next/font/google";
import "./globals.css";

const arapey = Arapey({
  weight: "400",
  variable: "--font-arapey",
  subsets: ["latin"],
  display: "swap",
});

const assistant = Assistant({
  weight: ["300", "400", "600", "700"],
  variable: "--font-assistant",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alis Shine Jewels — Bijoux Élégants",
  description:
    "Découvrez notre collection de bijoux raffinés. Chaque bijou est une invitation à rayonner. Livraison gratuite dès 70€.",
  keywords: ["bijoux", "colliers", "bracelets", "boucles d'oreilles", "bijoux de luxe"],
  openGraph: {
    title: "Alis Shine Jewels",
    description: "Chaque bijou est une invitation à rayonner",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${arapey.variable} ${assistant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
