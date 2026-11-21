import type { Metadata } from "next";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://itsdeenajohnson.com"),
  title: "Deena Johnson | Strategy, Analytics & Creative Portfolio",
  description: "Explore Deena Johnson's portfolio spanning business intelligence, technology transformation, financial analytics, drone imagery and creative storytelling.",
  openGraph: { title: "Deena Johnson | Where Strategy Meets Creativity", description: "Data, technology, strategy and visual storytelling.", type: "website" },
};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {return <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}><body className="min-h-screen bg-background text-foreground">{children}</body></html>;}
