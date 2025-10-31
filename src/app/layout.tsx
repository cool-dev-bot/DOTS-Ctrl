import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import SmoothScrollProvider from "../components/SmoothScrollProvider";

// Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Dots Ctrl",
  description: "Connecting The Dots",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-inter antialiased`}
      >
        <Navbar />
        <SmoothScrollProvider>
          <div className="sm:pt-[10px] md:pt-[100px]">
            {children}
          </div>
        </SmoothScrollProvider>
        <Footer />
      </body>
    </html>
  );
}
