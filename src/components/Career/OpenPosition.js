"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const OpenPosition = ({ positions }) => {
  return (
    <div className="mt-12">
      <Fade cascade damping={0.1} triggerOnce>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">
          Open Positions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position) => (
            <motion.div
              key={position.id}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden border border-slate-200 dark:border-slate-700 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    {position.type}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    {position.location}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {position.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                  {position.department}
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  {position.description}
                </p>
                <div className="mt-auto">
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center">
                    Apply Now
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default OpenPosition;
