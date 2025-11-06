"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const ProcessStep = ({
  number,
  title,
  description,
  color,
  delay,
  isLast,
  isActive,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="relative"
      onClick={onClick}
    >
      <motion.div
        className={`w-full md:w-64 h-32 md:h-44 rounded-2xl flex flex-col justify-center items-center p-4 z-10 shadow-xl cursor-pointer ${color} ${
          isActive ? "ring-4 ring-white/30" : ""
        } transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
        whileHover={{ y: -5 }}
      >
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
          <span
            className="text-sm font-bold"
            style={{
              background: "linear-gradient(to right, #4F46E5, #7E22CE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {number < 10 ? `0${number}` : number}
          </span>
        </div>
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-white/10 backdrop-blur-sm`}
        >
          <span className="text-xl font-bold text-white">
            {getStepIcon(number)}
          </span>
        </div>
        <h3 className="text-white font-semibold text-center text-lg mb-1">
          {title}
        </h3>
        <p className="text-white/80 text-xs text-center leading-tight">
          {description}
        </p>
      </motion.div>

      {!isLast && (
        <div className="hidden md:block absolute h-1 w-8 right-0 top-1/2 -translate-y-1/2 translate-x-full z-0">
          <motion.div
            className="w-full h-full"
            style={{
              background: "linear-gradient(to right, #4F46E5, #7E22CE)",
              boxShadow: "0 0 10px rgba(79, 70, 229, 0.5)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.6 }}
          ></motion.div>
        </div>
      )}
    </motion.div>
  );
};

// Function to get icon based on step number
const getStepIcon = (number) => {
  switch (number) {
    case 1:
      return "🔍";
    case 2:
      return "🏗️";
    case 3:
      return "🎨";
    case 4:
      return "🚀";
    case 5:
      return "🧪";
    case 6:
      return "🚢";
    case 7:
      return "🛠️";
    default:
      return number;
  }
};

const ProcessFlowSection = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      number: 1,
      title: "Discovery & Strategy",
      description: "In-depth analysis of requirements and strategic planning",
      color: "bg-gradient-to-br from-indigo-700 to-indigo-900",
      details:
        "We begin by understanding your business goals, target audience, and technical requirements. This phase includes stakeholder interviews, competitive analysis, and defining key performance indicators.",
    },
    {
      number: 2,
      title: "Architecture Design",
      description: "Creating scalable and secure system blueprints",
      color: "bg-gradient-to-br from-indigo-600 to-indigo-800",
      details:
        "Our architects design a robust technical foundation that ensures your solution is scalable, secure, and maintainable. We select appropriate technologies and create detailed system diagrams.",
    },
    {
      number: 3,
      title: "UX/UI Design",
      description: "User-centered interface design with modern aesthetics",
      color: "bg-gradient-to-br from-blue-600 to-indigo-700",
      details:
        "Our design team creates intuitive user experiences and visually appealing interfaces. We develop wireframes, interactive prototypes, and design systems aligned with your brand identity.",
    },
    {
      number: 4,
      title: "Development Sprint",
      description: "Agile development with regular client checkpoints",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      details:
        "Using agile methodologies, our development team builds your solution in iterative sprints. You'll receive regular demos and have opportunities to provide feedback throughout the process.",
    },
    {
      number: 5,
      title: "Quality Assurance",
      description: "Rigorous testing across devices and use cases",
      color: "bg-gradient-to-br from-violet-500 to-blue-600",
      details:
        "Our QA engineers conduct comprehensive testing to ensure your solution functions perfectly across all devices and use cases. This includes automated testing, performance optimization, and security validation.",
    },
    {
      number: 6,
      title: "Deployment",
      description: "Smooth transition to production environments",
      color: "bg-gradient-to-br from-violet-400 to-violet-600",
      details:
        "We manage the deployment process using CI/CD pipelines for a smooth transition to production. This includes configuration management, environment setup, and monitoring implementation.",
    },
    {
      number: 7,
      title: "Post-Launch Support",
      description: "Ongoing maintenance and performance optimization",
      color: "bg-gradient-to-br from-purple-400 to-violet-500",
      details:
        "Our relationship continues after launch with dedicated support, regular updates, and performance monitoring. We help you evolve your solution as your business grows.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <Fade cascade damping={0.1} triggerOnce>
        <div className="absolute top-0 left-0 w-full h-full opacity-50 dark:opacity-20 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-[5%] left-[10%] w-96 h-96 rounded-full bg-blue-200 dark:bg-blue-900/30 blur-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-[5%] right-[10%] w-96 h-96 rounded-full bg-violet-200 dark:bg-violet-900/30 blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute top-[40%] left-[60%] w-64 h-64 rounded-full bg-indigo-200 dark:bg-indigo-900/30 blur-3xl"
            animate={{
              x: [0, 20, 0],
              y: [0, 30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
      </Fade>

      <div className="container mx-auto relative">
        <Fade cascade damping={0.1} triggerOnce>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium mb-4">
              Our Workflow
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Proven Methodology
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500 ml-2">
                Delivering Excellence
              </span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We follow a rigorous, enterprise-grade methodology that transforms your vision into production-ready software. Our proven approach combines industry best practices with agile principles to deliver solutions that exceed expectations.
            </p>
          </div>
        </Fade>
        <div className="hidden md:flex justify-center mb-12">
          <div className="h-1 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-500 w-1/2 rounded-full shadow-lg shadow-indigo-500/30"></div>
        </div>

        <Fade cascade damping={0.1} triggerOnce>
          <div className="hidden md:flex flex-wrap justify-center items-center gap-2 max-w-6xl mx-auto relative">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center">
                <ProcessStep
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  color={step.color}
                  delay={index * 0.1}
                  isLast={index === steps.length - 1}
                  isActive={activeStep === index}
                  onClick={() =>
                    setActiveStep(activeStep === index ? null : index)
                  }
                />
                {index < steps.length - 1 && <div className="w-8"></div>}
              </div>
            ))}
          </div>
        </Fade>
        <Fade cascade damping={0.1} triggerOnce>
          <div className="md:hidden grid grid-cols-1 gap-8 max-w-sm mx-auto relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <ProcessStep
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  color={step.color}
                  delay={index * 0.1}
                  isLast={index === steps.length - 1}
                  isActive={activeStep === index}
                  onClick={() =>
                    setActiveStep(activeStep === index ? null : index)
                  }
                />
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute w-1 bg-gradient-to-b from-indigo-500 to-blue-500 left-1/2 -translate-x-1/2 top-full"
                    style={{ height: "40px" }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                  ></motion.div>
                )}
              </div>
            ))}
          </div>
        </Fade>

        <AnimatePresence>
          {activeStep !== null && (
            <motion.div
              className="mt-12 mx-auto max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-indigo-100 dark:border-indigo-900/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: steps[activeStep].color }}
                >
                  <span className="text-xl text-white">
                    {getStepIcon(steps[activeStep].number)}
                  </span>
                </div>
                <h3 className="text-xl font-bold ml-3 text-gray-900 dark:text-white">
                  {steps[activeStep].title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {steps[activeStep].details}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(99, 102, 241, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 text-white font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
          >
            Start Your Digital Transformation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlowSection;
