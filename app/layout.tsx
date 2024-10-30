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
  title: "French Tutor Buffalo NY | Private French Lessons | Nathalie French Tutor",
  description: "Learn French with a native tutor in Buffalo, NY. Private French lessons for all levels. In-person and virtual options available. Professional French language instruction.",
  keywords: "French tutor Buffalo, French lessons NY, private French tutor, learn French Buffalo, French language lessons, native French teacher",
  openGraph: {
    title: "French Tutor Buffalo NY | Private French Lessons",
    description: "Learn French with a native tutor in Buffalo, NY. Private French lessons for all levels.",
    images: ['/logo3.png'],
    locale: 'en_US',
    type: 'website',
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
