import BannerSection from "@/components/Contact/BannerSection";
import ContactSection from "@/components/Contact/ContactSection";
import React from "react";

export const metadata = {
  title: "Contact Cyber Circus | Enterprise Software Development Services",
  description:
    "Get in touch with Cyber Circus for enterprise software development, digital transformation, and technology consulting services. Schedule a consultation with our expert team today.",
  keywords:
    "contact cyber circus, software development services, enterprise software consulting, digital transformation consulting, technology consulting, schedule consultation",
  openGraph: {
    title: "Contact Cyber Circus | Enterprise Software Development Services",
    description:
      "Get in touch with Cyber Circus for enterprise software development, digital transformation, and technology consulting services.",
    url: "https://cybercircusconnect.com/contact",
  },
};

const page = () => {
  return (
    <>
      <BannerSection />
      <ContactSection />
    </>
  );
};

export default page;
