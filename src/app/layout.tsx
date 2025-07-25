import type { Metadata } from "next";
import {
  Space_Grotesk,
  Outfit,
  Plus_Jakarta_Sans,
  Manrope,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { defaultMetadata, jsonLdScript } from "./metadata";
import Script from "next/script";

// Premium font configuration
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdScript) }}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${outfit.variable} ${plusJakartaSans.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased font-body`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
