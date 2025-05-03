/* eslint-disable @typescript-eslint/no-explicit-any */
// app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";

const ProjectsPage = async () => {
  const res = await fetch("https://antor-karmaker-portfolio-server.vercel.app/api/v1/projects");
  const projects = await res.json();
  return (
    <div className="container mx-auto px-4 pt-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#00ff99]">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects?.data?.map((project: any) => (
          <ProjectCard
            key={project?._id}
            id={project?._id}
            title={project?.title}
            image={project?.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
