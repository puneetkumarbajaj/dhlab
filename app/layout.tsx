import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Digital Human Software | AI-Powered Virtual Humans for Interactive Education",
  description: "Digital Human Software combines artificial intelligence, computer vision, and emotional detection algorithms to create lifelike virtual humans for immersive, interactive learning experiences. Explore AI-driven education, museum applications, and conversational historical figures in real-time simulations using Unreal Engine and NVIDIA technology.",
  keywords: "AI, virtual humans, interactive education, digital human software, computer vision, AI-powered education, museum technology, Unreal Engine, NVIDIA, conversational AI, emotional detection, immersive learning, historical figures, AI education",
  robots: "index, follow",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
