import BannerSection from "@/components/Contact/BannerSection";
import ContactSection from "@/components/Contact/ContactSection";

export const metadata = {
  title: "Contact Cyber Circus | Enterprise Software Development Services",
  description:
    "Get in touch with Cyber Circus for enterprise software development, digital transformation, and technology consulting services. Schedule a consultation with our expert team today. Based in Lahore, Pakistan, serving clients worldwide.",
  keywords: [
    "contact cyber circus",
    "software development services",
    "enterprise software consulting",
    "digital transformation consulting",
    "technology consulting",
    "schedule consultation",
    "software development contact",
    "IT consulting contact",
  ],
  openGraph: {
    title: "Contact Cyber Circus | Enterprise Software Development Services",
    description:
      "Get in touch with Cyber Circus for enterprise software development, digital transformation, and technology consulting services.",
    url: "https://cybercircusconnect.com/contact",
  },
  alternates: {
    canonical: "https://cybercircusconnect.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BannerSection />
      <ContactSection />
    </>
  );
}
