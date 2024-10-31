import { Metadata } from "next";

interface PageHeadProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

export function generateMetadata({
  title = "French Tutor Buffalo NY",
  description = "Learn French with a native tutor in Buffalo, NY",
  image = "/og-image.jpg",
  path = "",
}: PageHeadProps): Metadata {
  const baseUrl = "https://marine-mother-website.vercel.app";
  const fullUrl = `${baseUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Nathalie French Tutor",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
