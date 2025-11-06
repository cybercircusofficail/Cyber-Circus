import BannerSection from "@/components/About/BannerSection";
import React from "react";
import TransformIdeasIntoReality from "@/components/About/TransformIdeasIntoReality";
import ValuesSection from "@/components/About/ValuesSection";
import ContactSection from "@/components/About/ContactSection";

export const metadata = {
  title: "About Cyber Circus | Enterprise Software Development Company",
  description:
    "Learn about Cyber Circus, a leading enterprise software development company delivering custom solutions, digital transformation, and technology consulting for global businesses. Discover our team, values, and commitment to excellence.",
  keywords:
    "about cyber circus, software development company, enterprise software developers, technology consulting, digital transformation company, custom software solutions",
  openGraph: {
    title: "About Cyber Circus | Enterprise Software Development Company",
    description:
      "Leading enterprise software development company delivering custom solutions, digital transformation, and technology consulting for global businesses.",
    url: "https://cybercircusconnect.com/about",
  },
};

const page = () => {
  return (
    <>
      <BannerSection />
      <TransformIdeasIntoReality />
      <ValuesSection />
      <ContactSection />
    </>
  );
};

export default page;
