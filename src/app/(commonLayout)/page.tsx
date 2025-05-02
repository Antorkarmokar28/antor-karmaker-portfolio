import Hero from "@/components/hero/Hero";
import React from "react";
import EducationPage from "./education/page";
import AboutPage from "./about/page";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <EducationPage />
      <AboutPage />
    </div>
  );
};

export default HomePage;
