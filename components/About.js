"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

/* ===== ANIMATION VARIANTS ===== */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="
        relative py-28 md:py-36
        bg-white dark:bg-neutral-950
        px-6 md:px-10
      "
    >
      {/* ===== SUBTLE AMBIENCE ===== */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_65%_25%,rgba(99,102,241,0.08),transparent_45%)]
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ===== HEADER ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mb-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-widest uppercase text-neutral-500 mb-4"
          >
            About
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="
              text-4xl md:text-5xl font-extrabold
              leading-tight
              text-neutral-900 dark:text-neutral-100
            "
          >
            I design and build software
            <span className="block text-neutral-400 dark:text-neutral-600">
              with clarity, purpose, and long-term vision.
            </span>
          </motion.h2>
        </motion.div>

        {/* ===== CONTENT ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 items-start">
          {/* ===== LEFT : STORY ===== */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="
              md:col-span-7
              space-y-7
              text-neutral-600 dark:text-neutral-400
              leading-relaxed text-lg
            "
          >
            <motion.p variants={fadeUp}>
              I’m a{" "}
              <strong className="text-neutral-900 dark:text-neutral-100">
                Software Engineer
              </strong>{" "}
              focused on building systems that are easy to understand, resilient
              in production, and pleasant to use.
            </motion.p>

            <motion.p variants={fadeUp}>
              I care deeply about how software evolves over time — from how
              codebases are structured, to how teams ship, secure, and maintain
              systems in real-world environments.
            </motion.p>

            <motion.p variants={fadeUp}>
              Rather than chasing tools or trends, I focus on fundamentals:
              thoughtful design, automation where it matters, and decisions that
              age well.
            </motion.p>
          </motion.div>

          {/* ===== RIGHT : PRINCIPLES ===== */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="
              md:col-span-5
              rounded-3xl
              border border-neutral-200/60 dark:border-neutral-800
              bg-neutral-50 dark:bg-neutral-900
              p-10
              space-y-8
            "
          >
            {[
              {
                label: "How I Think",
                value: "Systems first, details second",
              },
              {
                label: "How I Build",
                value: "Clean, maintainable, and production-oriented",
              },
              {
                label: "What I Value",
                value: "Simplicity, security, and long-term impact",
              },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp}>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
                  {item.label}
                </p>
                <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
