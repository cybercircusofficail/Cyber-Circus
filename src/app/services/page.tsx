import ServicesHero from "@/components/Services/ServicesHero";
import ServicesList from "@/components/Services/ServicesList";
import ServicesCTA from "@/components/Services/ServicesCTA";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/services");
const pageTitle = "Enterprise Software Solutions & Services";
const pageDescription =
  "Explore enterprise-grade custom software development, digital transformation, cloud architecture, mobile app development, DevOps, and technology consulting services tailored for global organizations.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "enterprise software solutions",
    "custom software development services",
    "digital transformation services",
    "cloud architecture services",
    "mobile app development services",
    "DevOps services",
    "UI/UX design services",
    "quality assurance services",
    "enterprise integration services",
    "data engineering services",
    "SaaS development",
    "IT consulting services"
  ],
  openGraph: {
    title: `${pageTitle} | Cyber Circus`,
    description: pageDescription,
    url: pageUrl
  },
  twitter: {
    title: pageTitle,
    description: pageDescription
  },
  alternates: {
    canonical: pageUrl
  }
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </>
  );
}

