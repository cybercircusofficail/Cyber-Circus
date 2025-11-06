import Script from "next/script";

export default function BusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Software Company",
    name: "Cyber Circus",
    url: "https://cybercircusconnect.com",
    logo: "https://cybercircusconnect.com/logo.png",
    description:
      "We provide world-class services in web development, mobile apps, blockchain solutions, game development, and graphic design. Our expertise helps businesses stay ahead with cutting-edge technology.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "J2 Block Block J 2 Phase 2 Johar Town, Lahore, 54782",
      addressLocality: "Lahore",
      addressRegion: "Pakistan",
      postalCode: "54782",
      addressCountry: "Pakistan",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92348 9745648",
      contactType: "customer service",
      email: "info@cybercircusconnect.com",
    },
    sameAs: [
      "https://www.instagram.com/cybercircusconnect",
      "https://www.threads.net/@cybercircusconnect",
      "https://www.youtube.com/@cybercircusconnect",
      "https://www.tiktok.com/@cybercircusconnect",
      "https://x.com/cybercircusct",
    ],
  };

  return (
    <Script
      id="business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
