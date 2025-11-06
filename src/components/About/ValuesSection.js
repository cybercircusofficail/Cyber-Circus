/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Code, Lightbulb, Users, Zap, Shield, RefreshCw } from "lucide-react";

const ValuesSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Fade cascade damping={0.1} triggerOnce>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400">
              Innovation through collaboration
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We deliver exceptional software solutions by combining technical
              expertise with deep industry knowledge. Our approach emphasizes
              transparent partnerships, innovative problem-solving, and a
              commitment to excellence at every stage of development.
            </p>
          </div>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Fade cascade damping={0.1} triggerOnce>
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Technical Excellence
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                We maintain rigorous standards in our development practices,
                utilizing cutting-edge technologies and methodologies to ensure
                our software is robust, scalable, and future-proof.
              </p>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-yellow-500 dark:text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Innovation
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                We continuously explore new approaches and technologies to solve
                complex problems. Our culture encourages creative thinking and
                intellectual curiosity to drive breakthrough solutions.
              </p>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Client Partnership
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                We view our clients as partners in the development process,
                emphasizing transparent communication, collaborative
                decision-making, and alignment with business objectives.
              </p>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Agility
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                We embrace adaptability in our processes, allowing us to respond
                quickly to changing requirements, emerging technologies, and
                market conditions while maintaining quality and efficiency.
              </p>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-red-600 dark:text-red-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Security
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                We prioritize data protection and system security at every
                level, implementing best practices and rigorous testing to
                safeguard sensitive information and ensure compliance with
                standards.
              </p>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center mb-4">
                <RefreshCw className="h-8 w-8 text-teal-600 dark:text-teal-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Continuous Improvement
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                We're committed to ongoing learning and refinement of our
                skills, processes, and technologies. This dedication ensures we
                consistently deliver the highest quality solutions to our
                clients.
              </p>
            </motion.div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
