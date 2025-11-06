import Script from "next/script";

export default function BusinessSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cyber Circus",
    url: "https://cybercircusconnect.com",
    logo: "https://cybercircusconnect.com/transparnt-logo.png",
    description:
      "Cyber Circus is a leading enterprise software development company specializing in custom software solutions, digital transformation, and technology consulting for global businesses.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "J2 Block Block J 2 Phase 2 Johar Town",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54782",
      addressCountry: "PK",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+92-348-9745648",
        contactType: "customer service",
        email: "info@cybercircus.com",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+92-302-9825213",
        contactType: "sales",
        email: "sales@cybercircus.com",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/cybercircusconnect",
      "https://www.youtube.com/@cybercircusconnect",
      "https://x.com/cybercircusct",
      "https://www.linkedin.com/company/cybercircus",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development Services",
    provider: {
      "@type": "Organization",
      name: "Cyber Circus",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "OfferCatalogItem",
          item: {
            "@type": "Service",
            name: "Enterprise Web Development",
            description: "Custom web applications built with modern frameworks and cloud-native architecture",
          },
        },
        {
          "@type": "OfferCatalogItem",
          item: {
            "@type": "Service",
            name: "Mobile Application Development",
            description: "Native and cross-platform mobile applications for iOS and Android",
          },
        },
        {
          "@type": "OfferCatalogItem",
          item: {
            "@type": "Service",
            name: "Cloud Architecture & DevOps",
            description: "Cloud-native solutions and automated DevOps pipelines for scalable infrastructure",
          },
        },
        {
          "@type": "OfferCatalogItem",
          item: {
            "@type": "Service",
            name: "Digital Transformation Consulting",
            description: "Strategic technology consulting to modernize legacy systems and optimize processes",
          },
        },
        {
          "@type": "OfferCatalogItem",
          item: {
            "@type": "Service",
            name: "UI/UX Design & User Experience",
            description: "Intuitive, accessible interfaces that improve engagement and conversion",
          },
        },
        {
          "@type": "OfferCatalogItem",
          item: {
            "@type": "Service",
            name: "Quality Assurance & Testing",
            description: "Comprehensive testing services ensuring reliability, performance, and security",
          },
        },
        {
          "@type": "OfferCatalogItem",
          item: {
            "@type": "Service",
            name: "Enterprise Integration Services",
            description: "API development, microservices, and integration platforms",
          },
        },
        {
          "@type": "OfferCatalogItem",
          item: {
            "@type": "Service",
            name: "Data Engineering & Analytics",
            description: "Data pipelines, warehouses, and analytics platforms for informed decision-making",
          },
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
