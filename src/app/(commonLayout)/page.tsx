import About from "@/components/modules/about/About";
import Education from "@/components/modules/education/Education";
import Hero from "@/components/modules/hero/Hero";
import Skill from "@/components/modules/skills/Skills";
import ProjectsPage from "./projects/page";
import Contact from "@/components/modules/contact/Contact";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Education />
      <About />
      <Skill />
      <ProjectsPage />
      <Contact />
    </div>
  );
};

export default HomePage;
