import type { Metadata } from "next";
import "@/styles/globals.css";
import { Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
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
      <body
        className={`min-h-screen ${montserrat.variable} ${abilityFont.variable} ${poppins.variable}`}
      >
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
