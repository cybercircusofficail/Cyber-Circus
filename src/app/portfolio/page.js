import BannerSection from "@/components/Portfolio/BannerSection";
import ProjectSection from "@/components/Portfolio/ProjectSection";
import React from "react";

export const metadata = {
  title: "Portfolio | Cyber Circus Enterprise Software Solutions",
  description:
    "Explore Cyber Circus portfolio of enterprise software solutions, digital transformation projects, and custom software development. See how we've helped businesses achieve their technology goals.",
  keywords:
    "cyber circus portfolio, enterprise software solutions, software development projects, digital transformation case studies, custom software examples, technology projects",
  openGraph: {
    title: "Portfolio | Cyber Circus Enterprise Software Solutions",
    description:
      "Explore Cyber Circus portfolio of enterprise software solutions, digital transformation projects, and custom software development.",
    url: "https://cybercircusconnect.com/portfolio",
  },
};

const page = () => {
  return (
    <>
      <BannerSection />
      <ProjectSection />
    </>
  );
};

export default page;
