"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";
import { FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMaterialdesign,
  SiPostgresql,
  SiVite,
  SiOpenstreetmap,
  SiExpress,
  SiGo,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

/* ===================== ICON MAP ===================== */
const techIcons = {
  React: <SiReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  "Material UI": <SiMaterialdesign className="text-[#0081CB]" />,
  PostgreSQL: <SiPostgresql className="text-[#4169E1]" />,
  Vite: <SiVite className="text-[#646CFF]" />,
  "OpenWeather API": <SiOpenstreetmap className="text-[#EB6E4B]" />,
  Express: <SiExpress className="text-gray-700 dark:text-gray-200" />,
  Golang: <SiGo className="text-[#00ADD8]" />,
  Docker: <SiDocker className="text-[#2496ED]" />,
  Kubernetes: <SiKubernetes className="text-[#326CE5]" />,
};

/* ===================== DATA ===================== */
const projects = [
  {
    title: "Dashboard Admin",
    description: "Modern admin dashboard with analytics and clean UI.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Material UI"],
    github: "https://github.com/GrimmJow07/dashboard-admin.git",
    image: "/images/dashboard-preview.png",
  },
  {
    title: "Employee Portal",
    description: "Employee management system with authentication and CRUD.",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Express"],
    github: "https://github.com/gvnorln/forum-web",
    image: "/images/employee-portal-preview.png",
  },
  {
    title: "Weather App",
    description: "Real-time weather forecast app.",
    tech: ["React", "Tailwind CSS", "OpenWeather API"],
    github: "https://github.com/gvnorln/weather-app-react",
    image: "/images/weather-app-preview.png",
  },
  {
    title: "Typing Speed Game",
    description: "Typing speed test with difficulty levels.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/gvnorln/typing-game-react",
    image: "/images/typing-game-preview.png",
  },
  {
    title: "Ticket Booking Backend",
    description: "Scalable backend with clean architecture & REST API.",
    tech: ["Golang", "PostgreSQL", "Docker", "Kubernetes"],
    github: "https://github.com/gvnorln/ticket-booking-backend.git",
    image: "/images/backend-cover.png",
  },
];

/* ===================== COMPONENT ===================== */
const Projects = memo(() => (
  <section id="projects" className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        Selected Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            whileHover={{
              y: -6,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="group flex flex-col h-full rounded-3xl
                       bg-white dark:bg-gray-800
                       border border-gray-200 dark:border-gray-700
                       shadow-md hover:shadow-2xl
                       will-change-transform"
          >
            <div className="relative h-48 overflow-hidden rounded-t-3xl">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out
                           group-hover:scale-[1.05]"
              />
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                {p.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm
                               rounded-full
                               bg-gray-100 dark:bg-gray-700
                               text-gray-800 dark:text-gray-200"
                  >
                    {techIcons[t]}
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.github}
                target="_blank"
                className="mt-auto inline-flex items-center justify-center gap-2
                           w-full px-5 py-3 rounded-xl font-semibold
                           bg-gradient-to-r from-blue-600 to-cyan-500
                           text-white transition-transform duration-300
                           group-hover:translate-x-1"
              >
                <FaGithub className="text-lg" />
                View Source
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
));

export default Projects;
