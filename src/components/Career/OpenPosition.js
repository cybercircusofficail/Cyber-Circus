"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const OpenPosition = ({ positions }) => {
  return (
    <div className="mt-12">
      <Fade cascade damping={0.1} triggerOnce>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Open Positions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0 px-3 py-1">
                    {position.type}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    {position.location}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {position.title}
                </h4>
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <Briefcase className="h-4 w-4" />
                  {position.department}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed line-clamp-4">
                  {position.description}
                </p>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg group"
                >
                  <Link href={`/career?position=${position.id}`}>
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default OpenPosition;
