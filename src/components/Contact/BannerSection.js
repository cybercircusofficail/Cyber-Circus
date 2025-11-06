"use client";

import React from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import LottieFour from "../../data/Lottie-4.json";

const BannerSection = () => {
  return (
    <section className="w-full  md:px-16 flex items-center justify-center relative overflow-hidden">
      <div className="container w-full flex flex-col lg:flex-row items-center justify-between gap-16 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
        >
          <Fade cascade damping={0.1} triggerOnce>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400 mb-6">
              Cyber Circus
            </h1>

            <p className="text-xl md:text-2xl font-light max-w-xl mx-auto lg:mx-0 mb-8">
              Revolutionizing software solutions with innovation, creativity,
              and technical excellence
            </p>

            <p className=" text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              We craft digital experiences that transform businesses through
              cutting-edge technology and innovative design. Our team of experts
              delivers solutions that drive growth and success.
            </p>

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
                Our Services
              </motion.button>
            </div>
          </Fade>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-full filter blur-3xl opacity-30"></div>
          <Lottie
            animationData={LottieFour}
            className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[700px] z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BannerSection;
