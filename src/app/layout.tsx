import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased text-gray-900 text-center flex flex-col min-h-screen justify-between`}
      >
        <Header />
        <div className="flex justify-center items-center"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
