/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const StatBox = ({ percentage, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center p-8 rounded-xl bg-gray-100/40 dark:bg-gray-800/40 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/30 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
    >
      <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
        {percentage}
      </span>
      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
        {label}
      </span>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl"></div>
      </div>

      <Fade cascade damping={0.1} triggerOnce>
        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                Driving Business Success Through{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Strategic Technology Partnerships
                </span>
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Long-Term Strategic Partnerships
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    At Cyber Circus, we build lasting partnerships that extend beyond software development. We invest in your long-term success by understanding your business objectives, optimizing your technology infrastructure, and delivering solutions that drive continuous innovation and sustainable competitive advantage.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Elite Engineering Talent
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our carefully curated engineering teams combine deep technical expertise with business acumen. We assemble senior full-stack developers, enterprise architects, cloud specialists, and certified project managers who transform complex technical challenges into strategic business advantages.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatBox percentage="98%" label="Client Satisfaction Rate" />
              <StatBox percentage="95%" label="On-Time Delivery" />
              <StatBox percentage="92%" label="Client Retention Rate" />
              <StatBox percentage="150+" label="Enterprise Projects Delivered" />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default StatsSection;
