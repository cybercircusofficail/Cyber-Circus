import BannerSection from "@/components/Career/BannerSection";
import CareerOpportunities from "@/components/Career/CareerOpportunities";

export const metadata = {
  title: "Careers at Cyber Circus | Join Our Engineering Team",
  description:
    "Join Cyber Circus, a leading enterprise software development company. Explore engineering career opportunities, work on innovative projects, and grow your career with our expert team. Competitive benefits and professional development.",
  keywords: [
    "cyber circus careers",
    "software engineering jobs",
    "enterprise software developer jobs",
    "technology careers",
    "software development careers",
    "engineering opportunities",
    "developer jobs",
    "IT jobs",
  ],
  openGraph: {
    title: "Careers at Cyber Circus | Join Our Engineering Team",
    description:
      "Join Cyber Circus, a leading enterprise software development company. Explore engineering career opportunities and innovative projects.",
    url: "https://cybercircusconnect.com/career",
  },
  alternates: {
    canonical: "https://cybercircusconnect.com/career",
  },
};

export default function CareerPage() {
  const openPositions = [
    {
      id: 1,
      title: "React.js Developer",
      department: "Frontend Engineering",
      location: "Remote / New York",
      type: "Full-time",
      description:
        "We're looking for an experienced React.js developer to join our frontend team and build responsive, user-friendly interfaces for our enterprise clients.",
    },
    {
      id: 2,
      title: "Java Developer",
      department: "Backend Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description:
        "Join our backend team to develop scalable and efficient server-side applications using Java and Spring Boot.",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      description:
        "Help us build and maintain our cloud infrastructure, CI/CD pipelines, and ensure optimal performance of our systems.",
    },
  ];

  const showOpenPositions = false;

  return (
    <>
      <BannerSection />
      <CareerOpportunities
        showOpenPositions={showOpenPositions}
        positions={openPositions}
      />
    </>
  );
}
