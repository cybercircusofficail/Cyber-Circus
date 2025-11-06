"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import NoPositions from "./NoPosition";
import OpenPosition from "./OpenPosition";

const CareerOpportunities = ({ showOpenPositions, positions }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <Fade triggerOnce>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Career Opportunities
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
              Find your place in our team and help us build innovative solutions
              that change how businesses operate in the digital world.
            </p>
          </Fade>
        </div>

        {showOpenPositions ? (
          <OpenPosition positions={positions} />
        ) : (
          <NoPositions />
        )}
      </div>
    </div>
  );
};

export default CareerOpportunities;
