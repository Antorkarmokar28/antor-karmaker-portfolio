/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/skills.jsx or app/skills/page.jsx

import Image from "next/image";

const SkillPage = async () => {
  // fetch skill data
  const skillRes = await fetch(
    "https://antor-karmaker-portfolio-server.vercel.app/api/v1/skills"
  );
  const skills = await skillRes.json();
  // fetch soft skill data
  const softSkillRes = await fetch(
    "https://antor-karmaker-portfolio-server.vercel.app/api/v1/soft-skills"
  );
  const softSkills = await softSkillRes.json();
  return (
    <div className="bg-[#1c1c22] text-gray-300 py-10 px-6 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-8 text-[#00ff99] text-center">My Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {skills?.data?.map((skill: any) => (
            <div
              key={skill?._id}
              className="bg-[#1c1c22] p-5 rounded-xl shadow hover:shadow-lg transition duration-300 flex items-center justify-between gap-4"
            >
              <div>
                <Image
                  src={skill?.image}
                  alt={skill?.name}
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#00ff99]">
                  {skill.name}
                </h2>
                <p className="text-gray-300 text-sm mt-1">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#00ff99] mb-4">Soft Skills</h2>
        <ul className="flex flex-wrap gap-4">
          {softSkills?.data?.map((softSkill: any) => (
            <li
              key={softSkill?._id}
              className="bg-gray-800 text-[#00ff99] px-4 py-2 rounded-full text-sm font-medium"
            >
              {softSkill?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillPage;
