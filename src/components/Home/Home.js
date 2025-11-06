"use client";

import React from "react";
import ServicesSection from "./ServicesSection";
import BannerSection from "./BannerSection";
import TectStack from "./TectStack";
import ReviewsSection from "./reviewsSection";
import StatsSection from "./StatsSection";
import ProcessFlowSection from "./ProcessFlowSection";

const Home = () => {
  return (
    <>
      <BannerSection />
      <ServicesSection />
      <TectStack />
      <ProcessFlowSection />
      <StatsSection />
      <ReviewsSection />
    </>
  );
};

export default Home;
