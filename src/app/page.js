import Home from "@/components/Home/Home";

export const metadata = {
  title: "Enterprise Software Development & Digital Transformation Services",
  description:
    "Transform your business with enterprise-grade custom software solutions. Cyber Circus delivers digital transformation, cloud architecture, and technology consulting for global businesses. Schedule a consultation today.",
  keywords: [
    "enterprise software development",
    "custom software solutions",
    "digital transformation services",
    "cloud architecture consulting",
    "SaaS development",
    "web application development",
    "mobile app development",
    "enterprise applications",
    "software engineering services",
    "IT consulting",
  ],
  openGraph: {
    title: "Enterprise Software Development & Digital Transformation Services",
    description:
      "Transform your business with enterprise-grade custom software solutions. Cyber Circus delivers digital transformation, cloud architecture, and technology consulting.",
    url: "https://cybercircusconnect.com",
  },
  alternates: {
    canonical: "https://cybercircusconnect.com",
  },
};

export default function Page() {
  return <Home />;
}
