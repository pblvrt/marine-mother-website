const StructuredData: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nathalie French Tutor",
    "image": "https://yourwebsite.com/logo3.png",
    "description": "Private French lessons in Buffalo, NY with a native French tutor",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Williamsville",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "YOUR_LATITUDE",
      "longitude": "YOUR_LONGITUDE"
    },
    "url": "https://yourwebsite.com",
    "telephone": "+17165601714",
    "priceRange": "$30-$90"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
