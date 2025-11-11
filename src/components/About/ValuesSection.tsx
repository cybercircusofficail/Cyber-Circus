"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Code, Lightbulb, Users, Zap, Shield, RefreshCw } from "lucide-react";
import type { Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ValueItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClassName: string;
};

const values: ValueItem[] = [
  {
    title: "Technical Excellence",
    description:
      "We maintain rigorous standards in our development practices, utilizing cutting-edge technologies and methodologies to ensure our software is robust, scalable, and future-proof.",
    icon: Code,
    iconClassName: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Innovation",
    description:
      "We continuously explore new approaches and technologies to solve complex problems. Our culture encourages creative thinking and intellectual curiosity to drive breakthrough solutions.",
    icon: Lightbulb,
    iconClassName: "text-yellow-500 dark:text-yellow-400",
  },
  {
    title: "Client Partnership",
    description:
      "We view our clients as partners in the development process, emphasizing transparent communication, collaborative decision-making, and alignment with business objectives.",
    icon: Users,
    iconClassName: "text-green-600 dark:text-green-400",
  },
  {
    title: "Agility",
    description:
      "We embrace adaptability in our processes, allowing us to respond quickly to changing requirements, emerging technologies, and market conditions while maintaining quality and efficiency.",
    icon: Zap,
    iconClassName: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Security",
    description:
      "We prioritize data protection and system security at every level, implementing best practices and rigorous testing to safeguard sensitive information and ensure compliance with standards.",
    icon: Shield,
    iconClassName: "text-red-600 dark:text-red-400",
  },
  {
    title: "Continuous Improvement",
    description:
      "We're committed to ongoing learning and refinement of our skills, processes, and technologies. This dedication ensures we consistently deliver the highest quality solutions to our clients.",
    icon: RefreshCw,
    iconClassName: "text-teal-600 dark:text-teal-400",
  },
];

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ValuesSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Fade cascade damping={0.1} triggerOnce>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400">
              Innovation through collaboration
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We deliver exceptional software solutions by combining technical expertise with deep industry knowledge. Our approach emphasizes transparent partnerships, innovative problem-solving, and a commitment to excellence at every stage of development.
            </p>
          </div>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Fade cascade damping={0.1} triggerOnce>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex items-center mb-4">
                    <Icon className={`h-8 w-8 mr-3 ${value.iconClassName}`} />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

