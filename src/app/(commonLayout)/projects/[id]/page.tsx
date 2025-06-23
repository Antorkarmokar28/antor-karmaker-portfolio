// app/projects/[id]/page.tsx

import Image from "next/image";
import Link from "next/link";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(
    `https://antor-karmaker-portfolio-server.vercel.app/api/v1/projects/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const project = data?.data;

  if (!project) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        {project.title}
      </h1>

      <div className="w-full mb-6">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-xl shadow-lg object-cover"
        />
      </div>

      <p className="text-gray-300 mb-8 leading-relaxed text-justify">
        {project.description}
      </p>

      <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
        <div>
          <span className="font-semibold">Frontend Live:</span>{" "}
          <Link
            href={project.frontendLiveLink}
            target="_blank"
            className="text-blue-600 underline break-all"
          >
            {project.frontendLiveLink}
          </Link>
        </div>
        <div>
          <span className="font-semibold">Backend Live:</span>{" "}
          <Link
            href={`https://${project.backendLiveLink}`}
            target="_blank"
            className="text-blue-600 underline break-all"
          >
            {project.backendLiveLink}
          </Link>
        </div>
        <div>
          <span className="font-semibold">GitHub (Frontend):</span>{" "}
          <Link
            href={project.githubFrontendLink}
            target="_blank"
            className="text-blue-600 underline break-all"
          >
            {project.githubFrontendLink}
          </Link>
        </div>
        <div>
          <span className="font-semibold">GitHub (Backend):</span>{" "}
          <Link
            href={project.githubBackendLink}
            target="_blank"
            className="text-blue-600 underline break-all"
          >
            {project.githubBackendLink}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
