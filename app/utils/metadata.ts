export function generatePageMetadata({
  title,
  description,
  image = "louvres04",
  path = "",
}: {
  title: string;
  description: string;
  image?: string;
  path?: string;
}) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://www.nathaliethefrenchtutor.com";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      siteName: "Nathalie French Tutor",
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(title)}&image=${image}`,
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
      images: [`/api/og?title=${encodeURIComponent(title)}&image=${image}`],
    },
  };
}
