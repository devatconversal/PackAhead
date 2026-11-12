import type { Metadata } from "next";
import FeedbackWidget from "@/components/FeedbackWidget";
import { inter, plexSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "PackAhead — Advancing circular cellulose film packaging with AI",
  description:
    "PackAhead uses artificial intelligence to speed up biological innovation and turn cellulose into a new generation of sustainable packaging films. A four year European research project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plexSans.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
        {children}
        <FeedbackWidget />
      </body>
    </html>
  );
}
