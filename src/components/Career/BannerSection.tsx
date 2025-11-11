/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import dynamic from "next/dynamic";
import LottieFive from "../../data/Lottie-5.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const BannerSection: React.FC = () => {
  return (
    <section className="w-full  md:px-16 flex items-center justify-center relative overflow-hidden">
      <div className="container w-full flex flex-col lg:flex-row items-center justify-between gap-16 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
        >
          <Fade direction="left" triggerOnce className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Join Our{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Elite Engineering
                </span>{" "}
                Team
              </h1>
              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mt-4 mb-6"></div>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-6">
                At Cyber Circus, we're building enterprise-grade software solutions that transform how businesses operate in the digital world. We partner with leading enterprises to deliver innovative technology that drives competitive advantage.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                We're seeking exceptional engineering talent who are passionate about technology and want to make an impact. Join us and be part of a team that values innovation, technical excellence, and professional growth.
              </p>
            </motion.div>
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
            animationData={LottieFive}
            className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[700px] z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BannerSection;

