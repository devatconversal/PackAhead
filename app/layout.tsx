import type { Metadata } from "next";
import { inter, plexSans, plexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "PackAhead — Advancing circular cellophane packaging with AI",
  description:
    "PackAhead uses artificial intelligence to speed up biological innovation and turn cellulose into a new generation of sustainable packaging films. A four year European research project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
