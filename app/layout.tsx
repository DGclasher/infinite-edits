import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <>
          <div className="w-full fixed top-0 md:items-center md:justify-center backdrop-filter backdrop-blur-md bg-zinc-950 bg-opacity-30 border-b border-indigo-800 antialiased z-50  ">
            <Navbar />
          </div>
          {children}
          <Toaster />
          <Footer />
        </>
      </body>
    </html>
  );
}
