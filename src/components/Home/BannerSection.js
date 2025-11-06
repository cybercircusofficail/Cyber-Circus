"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import LottieFirst from "../../data/Lottie-1.json";

const BannerSection = () => {
  return (
    <section className="w-full py-20 px-8 md:px-16 flex items-center justify-center">
      <div className="container w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
        >
          <Fade cascade damping={0.1} triggerOnce>
            <p className="text-sm uppercase tracking-[0.3em] mb-4 text-blue-600 dark:text-blue-400 font-semibold">
              Enterprise Software Development
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400">
              Transform Your Business with Enterprise-Grade Software Solutions
            </h1>
            <h2 className="text-xl sm:text-2xl font-light mt-6 border-l-4 border-blue-400 pl-5 text-gray-800 dark:text-gray-200">
              We deliver custom software solutions that drive digital transformation, accelerate growth, and create competitive advantages for global enterprises.
            </h2>
            <p className="mt-6 text-lg leading-relaxed max-w-xl text-gray-700 dark:text-gray-300">
              As a leading software development company, we partner with enterprises worldwide to build scalable, secure, and innovative technology solutions. Our expert engineering teams combine deep technical expertise with business acumen to deliver software that transforms operations and drives measurable results.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r text-white from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg font-semibold shadow-lg transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                >
                  View Our Solutions
                </motion.button>
              </div>
            </div>
          </Fade>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex justify-start"
        >
          <Lottie
            animationData={LottieFirst}
            className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[700px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BannerSection;
