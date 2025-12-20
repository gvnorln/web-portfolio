"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative py-20 md:py-28 overflow-hidden
        bg-gradient-to-b from-white via-blue-50 to-white
        dark:from-gray-900 dark:via-gray-900 dark:to-gray-800
      "
    >
      {/* ===== STATIC BACKGROUND ===== */}
      <div
        aria-hidden
        className="
          absolute inset-0
          flex items-center justify-center
        "
      >
        <div
          className="
            w-[50rem] h-[50rem]
            rounded-full blur-3xl
            bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10
          "
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ===== HEADING (NO ANIMATION) ===== */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A brief introduction about who I am and how I build impactful digital solutions.
          </p>
        </div>

        {/* ===== MAIN CARD (STATIC) ===== */}
        <div
          className="
            relative max-w-4xl mx-auto
            rounded-3xl
            bg-white/80 dark:bg-gray-900/80
            backdrop-blur-xl
            border border-gray-200/50 dark:border-gray-700/50
            shadow-xl
            p-8 md:p-12
          "
        >
          {/* accent line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            <p>
              💻 <strong>Software Engineer</strong> with a strong foundation in full-stack
              development and cloud-native technologies. Experienced in building and
              optimizing modern web applications using{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Next.js, Laravel, and Node.js
              </span>
              , focusing on clean architecture, secure APIs, and great UI/UX.
            </p>

            <p>
              🚀 I bridge <strong>software engineering</strong> and{" "}
              <strong>DevOps practices</strong> with hands-on experience in{" "}
              <span className="font-semibold">
                Docker, Kubernetes, HashiCorp Vault, and GitHub Actions
              </span>
              — enabling secure, automated CI/CD pipelines.
            </p>

            <p>
              🌱 Passionate about <strong>continuous learning</strong>,
              building scalable systems, and delivering impactful digital solutions.
            </p>
          </div>

          {/* ===== CTA (HOVER ONLY) ===== */}
          <div className="mt-10 flex justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              href="/cv-giovan-orlen.pdf"
              className="
                group inline-flex items-center gap-3
                px-7 py-3
                rounded-full
                font-semibold
                bg-gradient-to-r from-blue-600 to-cyan-500
                text-white
                shadow-lg hover:shadow-xl
                transition
              "
            >
              <span>Download CV</span>
              <FiArrowUpRight className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
