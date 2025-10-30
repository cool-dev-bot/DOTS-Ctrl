import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// Load Inter (main font)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Load Montserrat (for specific sections)
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
        {/* Add padding equal to navbar height */}
        <div className="sm:pt-[10px] md:pt-[100px]">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
