import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";

const inter = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPPR Euro Reviews",
  description: "Russian Beauty Reviews",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
