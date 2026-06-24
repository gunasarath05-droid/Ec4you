// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EC4YOU | Best Digital Marketing Agency in Chennai",
  description:
    "EC4YOU is a top‑rated digital marketing agency in Chennai offering SEO, PPC, social media, and web development services. Trusted by 100+ brands.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.className} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.14/dist/dotlottie-wc.js"
          type="module"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}