"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
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

/* ================= ICON MAP ================= */

const ICON_MAP = {
  React: <SiReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  "Material UI": <SiMaterialdesign className="text-[#0081CB]" />,
  PostgreSQL: <SiPostgresql className="text-[#4169E1]" />,
  Vite: <SiVite className="text-[#646CFF]" />,
  "OpenWeather API": <SiOpenstreetmap className="text-[#EB6E4B]" />,
  Express: <SiExpress className="text-neutral-700 dark:text-neutral-200" />,
  Golang: <SiGo className="text-[#00ADD8]" />,
  Docker: <SiDocker className="text-[#2496ED]" />,
  Kubernetes: <SiKubernetes className="text-[#326CE5]" />,
};

/* ================= DATA ================= */

const PROJECTS = [
  {
    title: "Cepot Blower Bekasi",
    description:
      "Responsive event equipment rental website with interactive product catalog, floating cart system, dynamic checkout form, WhatsApp order integration, category filtering, testimonials, FAQ, and SEO optimization for lead generation.",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "WhatsApp API",
      "SEO"
    ],
    github: "https://www.cepotblowerbekasi.com/",
    image: "/images/cepot-blower.png",
  },
  {
    title: "Teacher Dashboard (Frontend)",
    description:
      "Modern and responsive teacher dashboard for managing students and salary reports with monthly filters and PDF export.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JWT", "jsPDF"],
    github: "https://github.com/gvnorln/teacher-dashboard-fe.git",
    image: "/images/teacher-dashboard.png",
  },
  // {
  //   title: "Teacher Dashboard (Backend)",
  //   description:
  //     "REST API backend for Teacher Dashboard with JWT authentication, multi-tenant student management, and income data processing.",
  //   tech: ["Node.js", "Express", "PostgreSQL", "JWT", "bcrypt"],
  //   github: "https://github.com/USERNAME/teacher-dashboard-backend",
  //   image: "/images/teacher-dashboard-be.png",
  // },
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
    description: "Real-time weather forecast application.",
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

/* ================= ANIMATION ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
    },
  },
};

const fadeUp = (reduce) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: reduce
      ? { duration: 0 }
      : {
          type: "spring",
          stiffness: 60,
          damping: 18,
          mass: 0.9,
        },
  },
});

/* ================= COMPONENT ================= */

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="
        relative py-28
        bg-white dark:bg-neutral-950
        px-6
      "
    >
      {/* ===== AMBIENCE (SAME AS SKILLS) ===== */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_45%),
              radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.06),transparent_40%)]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <motion.div
          variants={fadeUp(reduceMotion)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <p className="text-xs tracking-widest uppercase text-neutral-500 mb-4">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-neutral-100">
            Selected
            <span className="block text-neutral-400 dark:text-neutral-600">
              work & experiments
            </span>
          </h2>
        </motion.div>

        {/* ===== GRID ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {PROJECTS.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp(reduceMotion)}
              className="
                group flex flex-col
                rounded-3xl
                border border-neutral-200/60 dark:border-neutral-800
                bg-neutral-50/70 dark:bg-neutral-900/60
                backdrop-blur-xl
                overflow-hidden
                transition
                hover:-translate-y-1
              "
            >
              {/* Image */}
              <div className="relative h-52">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  {p.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  {p.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        flex items-center gap-2
                        px-3 py-1.5 rounded-xl
                        text-sm font-medium
                        bg-neutral-100 dark:bg-neutral-800
                        text-neutral-700 dark:text-neutral-300
                        hover:bg-indigo-100 dark:hover:bg-indigo-900/40
                        transition
                      "
                    >
                      <span className="text-lg">{ICON_MAP[t]}</span>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-auto inline-flex items-center justify-center gap-2
                    w-full py-3 rounded-xl
                    bg-neutral-900 dark:bg-neutral-100
                    text-white dark:text-neutral-900
                    text-sm font-semibold
                    hover:opacity-90 transition
                  "
                >
                  <FaGithub />
                  View Source
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
