"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FaUniversity,
  FaGraduationCap,
  FaShieldAlt,
  FaGithub,
} from "react-icons/fa";
import {
  FiCode,
  FiDatabase,
  FiBookOpen,
  FiGlobe,
  FiServer,
  FiLock,
} from "react-icons/fi";

/* ================= DATA ================= */

const COURSES = [
  { name: "Algorithms & Programming", icon: <FiCode /> },
  { name: "Database Systems", icon: <FiDatabase /> },
  { name: "Web Development", icon: <FiGlobe /> },
  { name: "Software Engineering", icon: <FiBookOpen /> },
  { name: "Cloud Computing", icon: <FiServer /> },
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

export default function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="
        relative py-28
        bg-white dark:bg-neutral-950
        px-6
      "
    >
      {/* ===== SUBTLE AMBIENCE (SAME AS SKILLS) ===== */}
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
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <p className="text-xs tracking-widest uppercase text-neutral-500 mb-4">
            Education
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-neutral-100">
            Academic
            <span className="block text-neutral-400 dark:text-neutral-600">
              background & research
            </span>
          </h2>
        </motion.div>

        {/* ===== EDUCATION CARD ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="flex justify-center mb-24"
        >
          <motion.article
            variants={fadeUp(reduceMotion)}
            className="
              w-full max-w-4xl
              rounded-3xl
              border border-neutral-200/60 dark:border-neutral-800
              bg-neutral-50/70 dark:bg-neutral-900/60
              backdrop-blur-xl
              p-10
              space-y-10
            "
          >
            {/* University */}
            <div className="text-center space-y-3">
              <FaUniversity className="mx-auto text-3xl text-indigo-500" />
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                Krisnadwipayana University
              </h3>
              <p className="flex justify-center items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                <FaGraduationCap />
                Informatics Engineering
              </p>

              <div className="mt-6 space-y-3">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-600 text-white">
                  2021 — Present
                </span>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  GPA: <strong>3.63 / 4.00</strong>
                </p>
              </div>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-center text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-6 flex justify-center gap-2">
                <FiBookOpen />
                Relevant Courses
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {COURSES.map((c) => (
                  <div
                    key={c.name}
                    className="
                      flex flex-col items-center text-center
                      px-4 py-4 rounded-2xl
                      bg-neutral-100 dark:bg-neutral-800
                      text-sm font-medium
                      text-neutral-700 dark:text-neutral-300
                      transition
                      hover:-translate-y-0.5
                      hover:bg-indigo-100 dark:hover:bg-indigo-900/40
                    "
                  >
                    <span className="text-xl mb-2 text-indigo-500">
                      {c.icon}
                    </span>
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </motion.div>

        {/* ===== THESIS ===== */}
        <motion.div
          variants={fadeUp(reduceMotion)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <article
            className="
              w-full max-w-4xl
              rounded-3xl
              border border-neutral-200/60 dark:border-neutral-800
              bg-neutral-50/70 dark:bg-neutral-900/60
              backdrop-blur-xl
              p-10
              space-y-6
            "
          >
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-xl text-indigo-500" />
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                Final Project / Thesis
              </h3>
            </div>

            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              Dynamic Secrets for Kubernetes CI/CD Security
            </h4>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Research on securing CI/CD pipelines using{" "}
              <strong>HashiCorp Vault</strong>, integrated with{" "}
              <strong>GitHub Actions</strong> and{" "}
              <strong>Kubernetes</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex gap-2">
                <FiLock /> 0% secrets leakage
              </div>
              <div className="flex gap-2">
                <FiServer /> Rotation ~74ms
              </div>
              <div className="flex gap-2">
                <FiCode /> GitHub OIDC
              </div>
              <div className="flex gap-2">
                <FiBookOpen /> NIST SP 800-171
              </div>
            </div>

            <a
              href="https://github.com/gvnorln/vault-secrets-research.git"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 py-3 rounded-xl
                bg-neutral-900 dark:bg-neutral-100
                text-white dark:text-neutral-900
                font-semibold
                hover:opacity-90 transition
              "
            >
              <FaGithub />
              View Repository
            </a>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
