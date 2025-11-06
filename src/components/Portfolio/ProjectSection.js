"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Eye, Github } from "lucide-react";
import Image from "next/image";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "We developed a sophisticated web platform for a gemstone and jewelry business, specializing in high-value ring stones such as diamonds and other precious gems. Built with a modern technology stack including Next.js, Node.js, MongoDB, and AWS, the platform ensures seamless performance, scalability, and security.Users can browse, purchase, and receive certificates for premium stones tailored for custom rings. The intuitive UI/UX, designed in Figma, enhances the customer experience by providing a clean, trustworthy, and user-friendly interface",
      image: "/capitalgemologicallab.PNG",
      category: "web",
      technologies: ["Next.js", "Node Js", "AWS", "Figma", "Mongo DB"],
      demoLink: "https://capitalgemologicallab.com",
      featured: true,
    },
    {
      id: 2,
      title: "Solar System Visualizer",
      description:
        "An interactive web application that helps homeowners visualize solar panel installations for their properties. Users can upload images of their home, adjust panel placement, and receive real-time estimates on energy production and cost savings. The application features 3D modeling capabilities and integrates with local weather data to provide accurate solar potential assessments.",
      image: "/solar-system.png",
      category: "web",
      technologies: ["React", "Next Js", "Tailwind Css", "Redux"],
      demoLink: "#",
      demoLink: "https://solar-system-two-mu.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "GitCross",
      description:
        "A comprehensive website for a modern co-working space that allows users to browse available spaces, book desks or meeting rooms, and manage memberships. The platform features an interactive space explorer, real-time availability calendars, and a community portal for networking opportunities among members.",
      image: "/gitx.png",
      category: "web",
      technologies: ["Html", "Css", "Javascript"],
      demoLink: "https://gitcross.com",
      featured: false,
    },
    {
      id: 4,
      title: "Financial Dashboard",
      description:
        "An analytics dashboard for financial data visualization with interactive charts.",
      image: "/dummy.jpg",
      category: "dashboard",
      technologies: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
      demoLink: "#",
      featured: false,
    },
    {
      id: 5,
      title: "AI Content Generator",
      description:
        "An AI-powered application that generates marketing content based on user prompts.",
      image: "/dummy.jpg",
      category: "ai",
      technologies: ["Python", "TensorFlow", "GPT-3", "React"],
      demoLink: "#",
      featured: true,
    },
    {
      id: 6,
      title: "Real Estate Marketplace",
      description:
        "A platform connecting property buyers and sellers with virtual tours and messaging.",
      image: "/dummy.jpg",
      category: "web",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "Google Maps API"],
      demoLink: "#",
      featured: false,
    },
  ];

  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  return (
    <section className="w-full py-10 flex  items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Projects
          </h2>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            Explore our portfolio of innovative solutions and successful
            deployments across various industries.
          </p>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(
                    (project) =>
                      category === "all" || project.category === category
                  )
                  .map((project) => (
                    <Card
                      key={project.id}
                      className="overflow-hidden group transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          width={100}
                          height={100}
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {project.featured && (
                          <Badge className="absolute top-2 right-2 bg-primary hover:bg-primary">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <a href={project.demoLink} target="_blank">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Eye size={16} />
                            <span>Live</span>
                          </Button>
                        </a>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="flex justify-center mt-12">
          <Button className="gap-2">
            View All Projects
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
