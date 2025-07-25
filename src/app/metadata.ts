import type { Metadata } from "next";

const siteConfig = {
  name: "FeedbackSpec",
  title: "Turn Scattered Feedback Into Cursor-Ready Specs in Minutes",
  description: "FeedbackSpec automatically centralizes your scattered feedback AND transforms it into production-ready specifications for Cursor, Claude Code, and Cline. Built for indie hackers who ship daily.",
  url: "https://feedbackspec.com",
  ogImage: "https://feedbackspec.com/og-image.png",
  links: {
    twitter: "https://twitter.com/feedbackspec",
    github: "https://github.com/feedbackspec",
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.title} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "feedback management",
    "AI specifications",
    "Cursor",
    "Claude Code",
    "Cline",
    "indie hackers",
    "SaaS tools",
    "developer productivity",
    "feedback to specs",
    "AI development",
    "startup tools",
    "MRR growth",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@feedbackspec",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export const jsonLdScript = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  description: siteConfig.description,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "49",
    priceCurrency: "USD",
    priceValidUntil: "2025-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "200",
  },
  author: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};