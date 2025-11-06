/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const NoPositions = () => {
  const [copyStatus, setCopyStatus] = useState("");
  const emailAddress = "career@cybercircusconnect.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        setCopyStatus("Copied!");
        // Reset the status after 2 seconds
        setTimeout(() => setCopyStatus(""), 2000);
      })
      .catch((err) => {
        setCopyStatus("Failed to copy");
        console.error("Failed to copy: ", err);
        setTimeout(() => setCopyStatus(""), 2000);
      });
  };

  return (
    <div className="mt-12">
      <Fade triggerOnce>
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 md:p-12 text-center max-w-2xl mx-auto border border-slate-200 dark:border-slate-700">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            No Open Positions Right Now
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            We don't have any open positions at the moment, but we're always on
            the lookout for exceptional talent. Send us your resume, and we'll
            keep you in mind for future opportunities.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <button
              onClick={copyToClipboard}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md relative"
            >
              Send Your Resume {emailAddress}
              {copyStatus && (
                <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  {copyStatus}
                </span>
              )}
            </button>
          </motion.div>
        </div>
      </Fade>
    </div>
  );
};

export default NoPositions;
