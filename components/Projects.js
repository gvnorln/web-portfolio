'use client';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMaterialdesign,
  SiPostgresql,
  SiVite,
  SiOpenstreetmap
} from 'react-icons/si';
import Image from 'next/image';

const projects = [
  {
    title: "Dashboard App",
    description: "Admin dashboard dengan analitik lengkap menggunakan React, TypeScript, dan Recharts",
    tech: ["React", "TypeScript", "Tailwind CSS", "Material UI"],
    githubLink: "https://github.com/GrimmJow07/dashboard-admin.git",
    demoLink: "#",
    image: "/images/dashboard-preview.png"
  },
  {
    title: "Employee Portal",
    description: "Sistem manajemen karyawan dengan Next.js dan PostgreSQL",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    githubLink: "https://github.com/gvnorln/forum-web",
    demoLink: "#",
    image: "/images/employee-portal-preview.png"
  },
  {
    title: "Weather App",
    description: "Aplikasi prakiraan cuaca real-time dengan OpenWeather API",
    tech: ["React", "Tailwind CSS", "OpenWeather API"],
    githubLink: "https://github.com/gvnorln/weather-app-react",
    demoLink: "#",
    image: "/images/weather-app-preview.png"
  },
  {
    title: "Typing Game",
    description: "Game tes kecepatan mengetik dengan level kesulitan berbeda",
    tech: ["React", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/gvnorln/typing-game-react",
    demoLink: "#",
    image: "/images/typing-game-preview.png"
  }
];

const techIcons = {
  "React": <SiReact className="text-[#61DAFB] hover:scale-110 transition-transform" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white hover:scale-110 transition-transform" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4] hover:scale-110 transition-transform" />,
  "TypeScript": <SiTypescript className="text-[#3178C6] hover:scale-110 transition-transform" />,
  "Material UI": <SiMaterialdesign className="text-[#0081CB] hover:scale-110 transition-transform" />,
  "PostgreSQL": <SiPostgresql className="text-[#4169E1] hover:scale-110 transition-transform" />,
  "Vite": <SiVite className="text-[#646CFF] hover:scale-110 transition-transform" />,
  "OpenWeather API": <SiOpenstreetmap className="text-[#EB6E4B] hover:scale-110 transition-transform" />
};

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-900 dark:to-gray-800 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-100/20 dark:border-gray-700/50 backdrop-blur-md"
            >
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden border border-gray-200/20 dark:border-gray-700/50">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white/50 dark:bg-gray-700/50 rounded-full text-sm font-medium border border-gray-200/30 dark:border-gray-600/50 hover:bg-gray-100/50 dark:hover:bg-gray-600/50 transition-all">
                    {techIcons[tech]}
                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                  </span>
                ))}
              </div>

             <div className="flex gap-3">
            <a 
             href={project.githubLink} 
              target="_blank" 
             rel="noopener noreferrer" 
            className="flex-1 px-6 py-2.5 bg-white/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-100/80 dark:hover:bg-gray-600/80 hover:shadow-md transition-all"
            >
            <FaGithub className="text-xl" />
             <span>Source</span>
            </a>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
