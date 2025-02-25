'use client';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiMaterialdesign, SiPostgresql, SiVite, SiOpenstreetmap, SiExpress } from 'react-icons/si';
import Image from 'next/image';
import { memo } from 'react';

const techIcons = {
  React: <SiReact className="text-[#61DAFB]" />, 
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />, 
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />, 
  TypeScript: <SiTypescript className="text-[#3178C6]" />, 
  "Material UI": <SiMaterialdesign className="text-[#0081CB]" />, 
  PostgreSQL: <SiPostgresql className="text-[#4169E1]" />, 
  Vite: <SiVite className="text-[#646CFF]" />, 
  "OpenWeather API": <SiOpenstreetmap className="text-[#EB6E4B]" />, 
  Express: <SiExpress className="text-[#000000]" />
};

const projects = [
  { title: "Dashboard App", description: "Admin dashboard with comprehensive analytics using React, TypeScript, and Recharts", tech: ["React", "TypeScript", "Tailwind CSS", "Material UI"], githubLink: "https://github.com/GrimmJow07/dashboard-admin.git", demoLink: "#", image: "/images/dashboard-preview.png" },
  { title: "Employee Portal", description: "Employee management system using Express.Js, Next.js and PostgreSQL", tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Express"], githubLink: "https://github.com/gvnorln/forum-web", demoLink: "#", image: "/images/employee-portal-preview.png" },
  { title: "Weather App", description: "Real-time weather forecast application using OpenWeather API", tech: ["React", "Tailwind CSS", "OpenWeather API"], githubLink: "https://github.com/gvnorln/weather-app-react", demoLink: "#", image: "/images/weather-app-preview.png" },
  { title: "Typing Game", description: "Typing speed test game with different difficulty levels", tech: ["React", "Tailwind CSS", "Vite"], githubLink: "https://github.com/gvnorln/typing-game-react", demoLink: "#", image: "/images/typing-game-preview.png" }
];

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } })
};

const Projects = memo(() => {
  return (
    <motion.section 
      id="projects" 
      className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 will-change-transform"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {projects.map((project, index) => (
            <motion.article 
              key={project.title} 
              variants={projectVariants}
              custom={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 will-change-transform"
            >
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  className="group-hover:scale-105 transition-transform object-cover" 
                  priority={index === 0} 
                  quality={85} 
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-600">
                    {techIcons[tech]}
                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                  </span>
                ))}
              </div>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 px-6 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md transition-all"
              >
                <FaGithub className="text-xl" />
                <span>Source</span>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
});

export default Projects;
