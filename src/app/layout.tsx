import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import SubHeader from "./components/header/subheader/SubHeader";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/navbar/Navbar";
export const metadata: Metadata = {
  title: "Deep Sea Cart",
  description: "Shop Deep, Save Big",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <div className="relative min-h-screen">
        <SubHeader />
        <Navbar/>
        <main className="pt-16 pb-16"> {/* Adjust padding to make room for the fixed header and footer */}
          {children}
        </main>
        <Footer/>
      </div>
    </body>
  </html>
  );
}
