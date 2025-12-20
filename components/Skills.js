"use client";

import { motion, useReducedMotion } from "framer-motion";
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

/* ================= ICON MAP ================= */

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

/* ================= DATA ================= */

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

/* ================= ANIMATION PRESET ================= */

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

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="
        relative py-28
        bg-white dark:bg-neutral-950
        px-6
      "
    >
      {/* ===== SUBTLE GRADIENT AMBIENCE ===== */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_45%),
              radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.06),transparent_40%)]
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ===== HEADER ===== */}
        <motion.div
          variants={fadeUp(reduceMotion)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mx-auto text-center mb-24 will-change-transform"
        >
          <p className="text-xs tracking-widest uppercase text-neutral-500 mb-4">
            Skills
          </p>
          <h2
            className="
              text-4xl md:text-5xl font-extrabold
              text-neutral-900 dark:text-neutral-100
            "
          >
            Technical
            <span className="block text-neutral-400 dark:text-neutral-600">
              expertise & tools
            </span>
          </h2>
        </motion.div>

        {/* ===== GRID ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {SKILLS.map((group) => (
            <motion.article
              key={group.title}
              variants={fadeUp(reduceMotion)}
              className="
                rounded-3xl
                border border-neutral-200/60 dark:border-neutral-800
                bg-neutral-50/70 dark:bg-neutral-900/60
                backdrop-blur-xl
                p-10
                space-y-8
                will-change-transform
              "
            >
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 text-center">
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
                      bg-neutral-100 dark:bg-neutral-800
                      text-sm font-medium
                      text-neutral-700 dark:text-neutral-300
                      transition
                      hover:-translate-y-0.5
                      hover:bg-indigo-100 dark:hover:bg-indigo-900/40
                    "
                  >
                    <span className="text-lg">{ICON_MAP[tech]}</span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
