"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Code,
  Smartphone,
  Blocks,
  Paintbrush,
  ServerCog,
  CheckSquare,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import { Fade } from "react-awesome-reveal";
import type { LucideIcon } from "lucide-react";

type Service = {
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    title: "Enterprise Web Development",
    icon: Code,
    description:
      "Build scalable, secure web applications that power your business operations. Our full-stack development expertise delivers robust solutions using modern frameworks and cloud-native architecture.",
    features: ["React/Next.js", "Node.js/Express", "AWS/Azure deployment"],
  },
  {
    title: "Mobile Application Development",
    icon: Smartphone,
    description:
      "Create native and cross-platform mobile applications that deliver exceptional user experiences. We build enterprise-grade mobile solutions for iOS and Android with seamless backend integration.",
    features: ["React Native", "Swift/Kotlin", "Seamless API integration"],
  },
  {
    title: "Cloud Architecture & DevOps",
    icon: ServerCog,
    description:
      "Optimize your infrastructure with cloud-native solutions and automated DevOps pipelines. We design scalable architectures that ensure reliability, security, and performance at scale.",
    features: ["Docker/Kubernetes", "CI/CD pipelines", "Cloud architecture"],
  },
  {
    title: "Digital Transformation Consulting",
    icon: Blocks,
    description:
      "Transform your business operations with strategic technology consulting. Our experts help you modernize legacy systems, optimize processes, and implement innovative solutions that drive growth.",
    features: ["Enterprise architecture", "Legacy modernization", "Process optimization"],
  },
  {
    title: "UI/UX Design & User Experience",
    icon: Paintbrush,
    description:
      "Design intuitive, accessible interfaces that users love. Our design team creates compelling user experiences that improve engagement, conversion, and customer satisfaction.",
    features: ["Figma prototyping", "Design systems", "Accessibility focus"],
  },
  {
    title: "Quality Assurance & Testing",
    icon: CheckSquare,
    description:
      "Ensure software quality with comprehensive testing strategies. Our QA engineers deliver automated and manual testing services that guarantee reliability, performance, and security.",
    features: ["Automated testing", "Performance testing", "Security audits"],
  },
  {
    title: "Enterprise Integration Services",
    icon: Blocks,
    description:
      "Seamlessly connect your systems with enterprise integration solutions. We build APIs, microservices, and integration platforms that unify your technology ecosystem.",
    features: ["API development", "Microservices", "System integration"],
  },
  {
    title: "Data Engineering & Analytics",
    icon: BarChart3,
    description:
      "Unlock insights from your data with advanced analytics and engineering solutions. We build data pipelines, warehouses, and analytics platforms that drive informed decision-making.",
    features: ["Data pipelines", "Analytics platforms", "Business intelligence"],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <Fade cascade damping={0.1} triggerOnce>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 border-l-4 border-blue-600 pl-3 inline-block mb-6">
              Enterprise Software Solutions
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              We deliver enterprise-grade software solutions that power digital transformation. Our comprehensive technology services enable businesses to innovate, scale, and achieve competitive advantages in today&apos;s digital landscape.
            </p>
          </div>
        </Fade>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Fade
              key={service.title}
              cascade
              damping={0.1}
              triggerOnce
              className="h-full"
            >
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card className="h-full relative overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-70">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/30 dark:bg-blue-900/10 rounded-full -mr-20 -mt-20" />

                  <CardHeader className="flex flex-col items-center pt-6 pb-2 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full mb-3"
                    >
                      <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-center">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-start px-5 pb-5 relative z-10">
                    <p className="mb-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {service.description}
                    </p>
                    <ul className="mb-4 text-left text-xs space-y-1 text-gray-700 dark:text-gray-300">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      type="button"
                      className="w-full relative group cursor-pointer rounded-lg py-2 border border-blue-600 text-blue-600 dark:text-blue-400 bg-transparent transition-all overflow-hidden flex items-center justify-between px-4 text-sm"
                    >
                      <span className="relative z-10 transition-all group-hover:text-white">
                        Learn More
                      </span>
                      <span className="absolute inset-0 w-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full" />
                      <span className="relative z-10 bg-blue-600 text-white rounded-full p-1 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-blue-600">
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Fade>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;

