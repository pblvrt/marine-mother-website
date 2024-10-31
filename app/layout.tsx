import type { Metadata } from "next";
import { Abril_Fatface, Lato } from "next/font/google";
import "./globals.css";
import StructuredData from "./Components/StructuredData";

const abril = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abril",
  weight: "400",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "300",
});

export const metadata: Metadata = {
  title:
    "French Tutor Buffalo NY | Private French Lessons | Nathalie French Tutor",
  description:
    "Learn French with a native tutor in Buffalo, NY. Private French lessons for all levels. In-person and virtual options available. Professional French language instruction.",
  keywords:
    "French tutor Buffalo, French lessons NY, private French tutor, learn French Buffalo, French language lessons, native French teacher",
  openGraph: {
    title: "French Tutor Buffalo NY | Private French Lessons",
    description:
      "Learn French with a native tutor in Buffalo, NY. Private French lessons for all levels.",
    url: "https://marine-mother-website.vercel.app",
    siteName: "Nathalie French Tutor",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent('French Tutor Buffalo NY')}&image=louvres04`,
        width: 1200,
        height: 630,
        alt: "Nathalie French Tutor - Private French Lessons in Buffalo NY",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "French Tutor Buffalo NY | Private French Lessons",
    description:
      "Learn French with a native tutor in Buffalo, NY. Private French lessons for all levels.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://marine-mother-website.vercel.app",
    languages: {
      "en-US": "https://marine-mother-website.vercel.app",
      "fr-FR": "https://marine-mother-website.vercel.app/fr",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${abril.variable} ${lato.variable} `}>
      <body className={` ${abril.variable} antialiased bg-white`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
