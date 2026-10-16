import type { Metadata } from "next";
import Script from "next/script";
import { inter, plexSans, plexMono } from "@/lib/fonts";
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
    <html lang="en" className={`${inter.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
        {children}
        <Script src="https://feedback.conversal.io/widget.js" strategy="afterInteractive" />
        <Script id="conversal-feedback-init" strategy="afterInteractive">
          {`window.addEventListener("load", function () {
            window.ConversalFeedback.init({ embedKey: "cfe_39415fd278376154b442019fe8f13056120a84b9bab27a6a" });
          });`}
        </Script>
      </body>
    </html>
  );
}
