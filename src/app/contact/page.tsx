import BannerSection from "@/components/Contact/BannerSection";
import ContactSection from "@/components/Contact/ContactSection";
import { buildCanonicalUrl, createMetadata, getContactSchema } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/contact");
const pageTitle = "Contact Cyber Circus | Enterprise Software Development Partner";
const pageDescription =
  "Schedule a consultation with Cyber Circus to discuss enterprise software development, digital transformation, and technology consulting initiatives tailored to your business objectives.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "contact cyber circus",
    "software development services",
    "enterprise software consulting",
    "digital transformation consulting",
    "technology consulting",
    "schedule consultation",
    "software development contact",
    "IT consulting contact"
  ],
  openGraph: {
    title: pageTitle,
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

const contactSchema = JSON.stringify(getContactSchema());

export default function ContactPage() {
  return (
    <>
      <BannerSection />
      <ContactSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: contactSchema }}
      />
    </>
  );
}

