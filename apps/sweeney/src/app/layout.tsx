import type { Metadata } from "next";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
});

const abilityFont = localFont({
  src: "../../public/fonts/Qwerty Ability - Personal Use.otf",
  variable: "--font-ability",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sweeney",
  description: "Sweeney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${montserrat.variable} ${abilityFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
