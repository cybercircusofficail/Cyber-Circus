/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import LottieSecond from "../../data/Lottie-2.json";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const BannerSection = () => {
  return (
    <section className="relative overflow-hidden py-10 sm:py-12 md:py-16 lg:py-24 transition-colors duration-200">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6"
      >
        <Fade cascade damping={0.1} triggerOnce>
          <div className="container w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 lg:pr-4 xl:pr-8">
              <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400">
                Transform Your Business with Cutting-Edge Software
              </h1>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
                We deliver enterprise-grade solutions that drive growth,
                streamline operations, and give you the competitive edge in
                today's digital landscape.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r text-white from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 rounded-full  font-semibold shadow-lg"
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-transparent border-2 border-purple-500 rounded-full  font-semibold hover:bg-purple-500/20"
                  >
                    Explore More
                  </motion.button>
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
              <Lottie
                animationData={LottieSecond}
                className="w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[550px]"
                loop={true}
                autoplay={true}
              />
            </div>
          </div>
        </Fade>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto mt-10 sm:mt-12 md:mt-16 px-4 sm:px-6"
      >
        <Fade cascade damping={0.1} triggerOnce>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-4 sm:p-5 md:p-6 shadow-lg dark:bg-gray-800 dark:shadow-gray-700/10">
              <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 p-2 sm:p-3 dark:bg-blue-900/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold dark:text-white">
                Enterprise Performance
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Our solutions are built for scale with best-in-class
                architecture and performance optimization.
              </p>
            </div>
            <div className="rounded-xl bg-white p-4 sm:p-5 md:p-6 shadow-lg dark:bg-gray-800 dark:shadow-gray-700/10">
              <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 p-2 sm:p-3 dark:bg-blue-900/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold dark:text-white">
                Ironclad Security
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Protect your data with our military-grade security protocols and
                compliance standards.
              </p>
            </div>
            <div className="rounded-xl bg-white p-4 sm:p-5 md:p-6 shadow-lg dark:bg-gray-800 dark:shadow-gray-700/10">
              <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 p-2 sm:p-3 dark:bg-blue-900/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold dark:text-white">
                Future-Proof Technology
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Stay ahead with cloud-native architecture and cutting-edge
                technologies that evolve with your business.
              </p>
            </div>
          </div>
        </Fade>
      </motion.div>
    </section>
  );
};

export default BannerSection;
