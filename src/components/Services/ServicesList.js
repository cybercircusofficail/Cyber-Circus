"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import {
  Code,
  Smartphone,
  ServerCog,
  Blocks,
  Paintbrush,
  CheckSquare,
  BarChart3,
  Database,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ServicesList = () => {
  const services = [
    {
      icon: Code,
      title: "Enterprise Web Development",
      description:
        "Build scalable, secure web applications that power your business operations. Our full-stack development expertise delivers robust solutions using modern frameworks and cloud-native architecture.",
      features: ["React/Next.js", "Node.js/Express", "AWS/Azure deployment"],
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description:
        "Create native and cross-platform mobile applications that deliver exceptional user experiences. We build enterprise-grade mobile solutions for iOS and Android with seamless backend integration.",
      features: ["React Native", "Swift/Kotlin", "Seamless API integration"],
    },
    {
      icon: ServerCog,
      title: "Cloud Architecture & DevOps",
      description:
        "Optimize your infrastructure with cloud-native solutions and automated DevOps pipelines. We design scalable architectures that ensure reliability, security, and performance at scale.",
      features: ["Docker/Kubernetes", "CI/CD pipelines", "Cloud architecture"],
    },
    {
      icon: Blocks,
      title: "Digital Transformation Consulting",
      description:
        "Transform your business operations with strategic technology consulting. Our experts help you modernize legacy systems, optimize processes, and implement innovative solutions that drive growth.",
      features: ["Enterprise architecture", "Legacy modernization", "Process optimization"],
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design & User Experience",
      description:
        "Design intuitive, accessible interfaces that users love. Our design team creates compelling user experiences that improve engagement, conversion, and customer satisfaction.",
      features: ["Figma prototyping", "Design systems", "Accessibility focus"],
    },
    {
      icon: CheckSquare,
      title: "Quality Assurance & Testing",
      description:
        "Ensure software quality with comprehensive testing strategies. Our QA engineers deliver automated and manual testing services that guarantee reliability, performance, and security.",
      features: ["Automated testing", "Performance testing", "Security audits"],
    },
    {
      icon: BarChart3,
      title: "Data Engineering & Analytics",
      description:
        "Unlock insights from your data with advanced analytics and engineering solutions. We build data pipelines, warehouses, and analytics platforms that drive informed decision-making.",
      features: ["Data pipelines", "Analytics platforms", "Business intelligence"],
    },
    {
      icon: Database,
      title: "Enterprise Integration Services",
      description:
        "Seamlessly connect your systems with enterprise integration solutions. We build APIs, microservices, and integration platforms that unify your technology ecosystem.",
      features: ["API development", "Microservices", "System integration"],
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Fade cascade damping={0.1} triggerOnce>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Comprehensive Software Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              From initial concept to deployment and beyond, we provide end-to-end software development services that transform your business operations and drive measurable results.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-start group mt-auto"
                    >
                      <Link href="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

