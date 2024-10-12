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
  title: "AnimaSentio | AI-Powered Virtual Humans for Immersive Experiences",
  description:
    "AnimaSentio leverages advanced AI, emotional detection, and computer vision to create lifelike virtual humans. These digital beings can engage in real-time conversations, respond to emotions, and simulate immersive experiences across entertainment, virtual assistants, museum interactions, and more. Powered by Unreal Engine and NVIDIA technologies.",
  keywords:
    "AI, virtual humans, immersive experiences, digital human software, computer vision, AI-powered technology, museum technology, Unreal Engine, NVIDIA, conversational AI, emotional detection, entertainment, virtual assistants",
  robots: "index, follow",
  openGraph: {
    title: "AnimaSentio | AI-Powered Virtual Humans for Interactive Education",
    description:
      "AnimaSentio creates lifelike virtual humans using AI for immersive, interactive learning experiences.",
    url: "https://animasentio.vercel.app",
    type: "website",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "AnimaSentio Virtual Human Demo",
      },
    ],
  },
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
