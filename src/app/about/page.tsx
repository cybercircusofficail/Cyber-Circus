import BannerSection from "@/components/About/BannerSection";
import TransformIdeasIntoReality from "@/components/About/TransformIdeasIntoReality";
import ValuesSection from "@/components/About/ValuesSection";
import ContactSection from "@/components/About/ContactSection";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/about");
const pageTitle = "About Cyber Circus | Enterprise Software Development Experts";
const pageDescription =
  "Discover Cyber Circus, an enterprise software development partner delivering custom solutions, digital transformation, and technology consulting for ambitious organizations worldwide.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "about cyber circus",
    "software development company",
    "enterprise software developers",
    "technology consulting company",
    "digital transformation company",
    "custom software solutions",
    "software engineering team",
    "IT consulting services"
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

export default function AboutPage() {
  return (
    <>
      <BannerSection />
      <TransformIdeasIntoReality />
      <ValuesSection />
      <ContactSection />
    </>
  );
}

