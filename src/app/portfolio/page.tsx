import BannerSection from "@/components/Portfolio/BannerSection";
import ProjectSection from "@/components/Portfolio/ProjectSection";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/portfolio");
const pageTitle = "Portfolio | Cyber Circus Enterprise Software Solutions";
const pageDescription =
  "Review Cyber Circus enterprise software solutions, digital transformation engagements, and custom development projects that deliver measurable business impact.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "cyber circus portfolio",
    "enterprise software solutions",
    "software development projects",
    "digital transformation case studies",
    "custom software examples",
    "technology projects",
    "web development portfolio",
    "mobile app portfolio"
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

export default function PortfolioPage() {
  return (
    <>
      <BannerSection />
      <ProjectSection />
    </>
  );
}

