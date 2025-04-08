import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/components/providers/trpc-provider";

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
});

export function viewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: [
      {
        media: "(prefers-color-scheme: light)",
        color: "white",
      },
      {
        media: "(prefers-color-scheme: dark)",
        color: "black",
      },
    ],
  };
}

export function metadata(): Metadata {
  return {
    title: {
      template: "%s : Edgar Guzman",
      default: "Edgar Guzman",
    },
    description: "electronic commerce infrastructure in a monorepo",
    keywords: [],
    icons: [
      {
        rel: "icon",
        url: "/images/ed-guz.svg",
      },
    ],
    authors: [
      {
        name: "Edgar Guzman",
      },
    ],
    creator: "Edgar Guzman",
    // metadataBase: new URL(""),
    openGraph: {
      type: "website",
      locale: "en_US",
      title: "Edgar Guzman",
      description: "electronic commerce infrastructure in a monorepo",
      siteName: "Edgar Guzman",
      images: [
        {
          url: "/images/opengraph-image.svg",
          width: 1200,
          height: 630,
          alt: "Edgar Guzman",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Edgar Guzman",
      description: "electronic commerce infrastructure in a monorepo",
      creator: "@edgaralexisguz",
      images: ["/images/opengraph-image.svg"],
    },
  };
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
};

export default RootLayout;
