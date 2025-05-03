import Hero from "@/components/hero/Hero";
import React from "react";
import EducationPage from "./education/page";
import AboutPage from "./about/page";
import SkillPage from "./skill/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <EducationPage />
      <AboutPage />
      <SkillPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
};

export default HomePage;
