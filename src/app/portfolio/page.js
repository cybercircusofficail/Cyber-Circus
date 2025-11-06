import BannerSection from "@/components/Portfolio/BannerSection";
import ProjectSection from "@/components/Portfolio/ProjectSection";

export const metadata = {
  title: "Portfolio | Cyber Circus Enterprise Software Solutions",
  description:
    "Explore Cyber Circus portfolio of enterprise software solutions, digital transformation projects, and custom software development. See how we've helped businesses achieve their technology goals and drive measurable results.",
  keywords: [
    "cyber circus portfolio",
    "enterprise software solutions",
    "software development projects",
    "digital transformation case studies",
    "custom software examples",
    "technology projects",
    "web development portfolio",
    "mobile app portfolio",
  ],
  openGraph: {
    title: "Portfolio | Cyber Circus Enterprise Software Solutions",
    description:
      "Explore Cyber Circus portfolio of enterprise software solutions, digital transformation projects, and custom software development.",
    url: "https://cybercircusconnect.com/portfolio",
  },
  alternates: {
    canonical: "https://cybercircusconnect.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <BannerSection />
      <ProjectSection />
    </>
  );
}
