import ServicesHero from "@/components/Services/ServicesHero";
import ServicesList from "@/components/Services/ServicesList";
import ServicesCTA from "@/components/Services/ServicesCTA";

export const metadata = {
  title: "Enterprise Software Solutions & Services | Cyber Circus",
  description:
    "Explore our comprehensive enterprise software solutions including custom software development, digital transformation, cloud architecture, mobile app development, DevOps services, and technology consulting. Discover how we help businesses transform their operations.",
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
    "web application development",
    "IT consulting services",
  ],
  openGraph: {
    title: "Enterprise Software Solutions & Services | Cyber Circus",
    description:
      "Explore our comprehensive enterprise software solutions including custom software development, digital transformation, cloud architecture, and technology consulting.",
    url: "https://cybercircusconnect.com/services",
  },
  alternates: {
    canonical: "https://cybercircusconnect.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </>
  );
}

