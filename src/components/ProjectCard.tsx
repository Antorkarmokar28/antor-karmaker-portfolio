// components/ProjectCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  image: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ id, title, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Link
          href={`/projects/${id}`}
          className="bg-white text-black px-5 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
