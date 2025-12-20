"use client";

import {
  FaReact,
  FaNode,
  FaPython,
  FaDocker,
  FaVuejs,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiKubernetes,
  SiJenkins,
  SiAmazon as SiAws,
  SiTerraform,
  SiAnsible,
  SiGithubactions as SiGithubActions,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSass,
  SiGo,
  SiMongodb,
} from "react-icons/si";

const ICON_MAP = {
  React: <FaReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  "Vue.js": <FaVuejs className="text-[#4FC08D]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  HTML: <SiHtml5 className="text-[#E34F26]" />,
  CSS: <SiCss3 className="text-[#1572B6]" />,
  Bootstrap: <SiBootstrap className="text-[#7952B3]" />,
  SCSS: <SiSass className="text-[#CC6699]" />,
  "Node.js": <FaNode className="text-[#339933]" />,
  "Express.js": <SiExpress className="text-black dark:text-white" />,
  Laravel: <SiLaravel className="text-[#FF2D20]" />,
  Python: <FaPython className="text-[#3776AB]" />,
  Golang: <SiGo className="text-[#00ADD8]" />,
  Docker: <FaDocker className="text-[#2496ED]" />,
  Kubernetes: <SiKubernetes className="text-[#326CE5]" />,
  Linux: <FaLinux className="text-[#FCC624]" />,
  AWS: <SiAws className="text-[#FF9900]" />,
  Terraform: <SiTerraform className="text-[#7B42BC]" />,
  Ansible: <SiAnsible className="text-[#EE0000]" />,
  Jenkins: <SiJenkins className="text-[#D24939]" />,
  "GitHub Actions": <SiGithubActions className="text-[#2088FF]" />,
  MySQL: <SiMysql className="text-[#4479A1]" />,
  PostgreSQL: <SiPostgresql className="text-[#4169E1]" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
};

const SKILLS = [
  {
    title: "Frontend",
    tech: [
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Bootstrap",
      "SCSS",
    ],
  },
  {
    title: "Backend",
    tech: ["Node.js", "Express.js", "Laravel", "Python", "Golang"],
  },
  {
    title: "DevOps",
    tech: [
      "Docker",
      "Kubernetes",
      "Linux",
      "AWS",
      "Terraform",
      "Ansible",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    title: "Database",
    tech: ["MySQL", "PostgreSQL", "MongoDB"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative py-24
        bg-gradient-to-b from-white via-blue-50 to-white
        dark:from-gray-900 dark:via-gray-900 dark:to-gray-800
      "
    >
      {/* ===== HEADER ===== */}
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Technical Expertise
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to build scalable, secure, and modern
          applications across frontend, backend, and DevOps.
        </p>
      </div>

      {/* ===== GRID ===== */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((group) => (
          <div
            key={group.title}
            className="
              rounded-3xl
              bg-white/80 dark:bg-gray-900/80
              backdrop-blur-xl
              border border-gray-200/50 dark:border-gray-700/50
              shadow-xl
              p-8
              transition-transform duration-300
              hover:scale-[1.02]
            "
          >
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              {group.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {group.tech.map((tech) => (
                <div
                  key={tech}
                  className="
                    flex items-center gap-2
                    px-3 py-2
                    rounded-xl
                    bg-gray-100/70 dark:bg-gray-800/70
                    text-sm font-medium
                    text-gray-700 dark:text-gray-300
                    transition
                    hover:bg-blue-100 dark:hover:bg-blue-900/40
                  "
                >
                  <span className="text-lg">{ICON_MAP[tech]}</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
