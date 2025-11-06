/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { MapPin, Mail, Phone, Clock, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.02,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Fade cascade damping={0.1} triggerOnce>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400">
              Get in Touch
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
              Connect with our team to discuss how we can transform your ideas
              into innovative solutions.
            </p>
          </div>
        </Fade>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Fade cascade damping={0.1} triggerOnce>
            <motion.div
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Contact Information
                </h3>

                <motion.div
                  className="flex items-start mb-6"
                  whileHover="hover"
                  variants={hoverVariants}
                >
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                      Office Location
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      J2 Block, Block J 2 Phase 2 Johar Town,
                      <br />
                      Lahore, 54782, Pakistan
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start mb-6"
                  whileHover="hover"
                  variants={hoverVariants}
                >
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                      Email Us
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      <a
                        href="mailto:info@cybercircusconnect.com"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        info@cybercircusconnect.com
                      </a>
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start mb-6"
                  whileHover="hover"
                  variants={hoverVariants}
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                      Call Us
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      <a
                        href="tel:+92XXXXXXXXXX"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        +92 3489745648, +923029825213
                      </a>
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start"
                  whileHover="hover"
                  variants={hoverVariants}
                >
                  <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Weekend: Closed
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <motion.div
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden h-full"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative h-96 bg-blue-100 dark:bg-blue-900">
                <div className="absolute inset-0 bg-blue-50 dark:bg-blue-800 flex items-center justify-center">
                  <div className="text-center p-4">
                    <MapPin className="h-12 w-12 text-blue-600 dark:text-blue-300 mx-auto mb-4" />
                    <p className="text-gray-900 dark:text-white font-medium mb-2">
                      Map Placeholder
                    </p>
                    <motion.a
                      href="https://maps.google.com/?q=J2+Block+Block+J+2+Phase+2+Johar+Town+Lahore+54782"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium transition-colors hover:bg-blue-700 dark:hover:bg-blue-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Visit Our Office
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  We're located in the heart of Johar Town, easily accessible
                  from main roads. Drop by for a coffee and let's discuss how we
                  can bring your vision to life.
                </p>
              </div>
            </motion.div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
