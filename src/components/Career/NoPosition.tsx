/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { Mail, Copy, Check } from "lucide-react";

const EMAIL_ADDRESS = "careers@cybercircus.com";

const NoPositions: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState(false);

  const copyToClipboard = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopyStatus(true);
      setTimeout(() => setCopyStatus(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="mt-12">
      <Fade triggerOnce>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-2xl mx-auto border border-gray-200 dark:border-gray-700"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            No Open Positions Right Now
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto">
            We don't have any open positions at the moment, but we're always on the lookout for exceptional engineering talent. Send us your resume, and we'll keep you in mind for future opportunities that match your skills and expertise.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={copyToClipboard}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <span className="flex items-center gap-2 relative z-10">
                {copyStatus ? (
                  <>
                    <Check className="h-5 w-5" />
                    Email Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Send Resume to {EMAIL_ADDRESS}
                  </>
                )}
              </span>
            </Button>
          </motion.div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Click the button above to copy the email address, or send your resume directly
          </p>
        </motion.div>
      </Fade>
    </div>
  );
};

export default NoPositions;

