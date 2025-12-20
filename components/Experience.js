"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Bisnis Indonesia Group",
    role: "IT Programmer",
    period: "Feb 2024 – Jun 2024",
    highlights: [
      "Developed RESTful APIs for reservation & content systems",
      "Implemented JWT authentication & secure middleware",
      "Built scalable dashboards with Next.js",
      "Designed relational schemas in PostgreSQL & Oracle",
      "Refactored legacy modules & fixed production UI issues",
    ],
    tech: ["Laravel", "Next.js", "PostgreSQL", "Oracle", "JWT"],
  },
  {
    company: "Rakamin Academy",
    role: "Frontend Developer",
    period: "2023",
    highlights: [
      "Built modular UI using Vue.js",
      "Containerized frontend apps using Docker",
      "Implemented unit testing with Jest",
    ],
    tech: ["Vue.js", "Docker", "Jest"],
  },
  {
    company: "PT FUMIRA",
    role: "Warehouse Data Entry",
    period: "2022",
    highlights: [
      "Managed inventory records accurately",
      "Validated invoices & goods receipts",
      "Resolved data discrepancies efficiently",
    ],
    tech: ["Inventory System", "Data Validation"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative py-28
        bg-white dark:bg-neutral-950
        px-6 md:px-10
      "
    >
      {/* ===== AMBIENT BACKDROP ===== */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_45%),
              radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.12),transparent_45%)]
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-neutral-900 dark:text-neutral-100">
            Real-world experience
            <span className="block text-neutral-400 dark:text-neutral-600">
              building, shipping, and maintaining systems.
            </span>
          </h2>
        </motion.div>

        {/* ===== EXPERIENCE LIST ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {experiences.map((exp, i) => (
            <motion.article
              key={i}
              variants={item}
              className="
                group relative
                grid grid-cols-1 md:grid-cols-12 gap-10
              "
            >
              {/* ===== LEFT META ===== */}
              <div className="md:col-span-4 space-y-4">
                <div className="text-sm text-neutral-500">{exp.period}</div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {exp.company}
                </h3>
                <p className="font-medium text-blue-600 dark:text-blue-400">
                  {exp.role}
                </p>
              </div>

              {/* ===== RIGHT CONTENT ===== */}
              <div
                className="
                  md:col-span-8
                  rounded-3xl
                  border border-neutral-200/60 dark:border-neutral-800
                  bg-neutral-50/70 dark:bg-neutral-900/60
                  backdrop-blur-xl
                  p-10
                  space-y-8
                  transition
                  group-hover:border-blue-500/40
                "
              >
                {/* highlights */}
                <ul className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* tech */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1 text-xs rounded-full
                        bg-blue-100 text-blue-700
                        dark:bg-blue-900/40 dark:text-blue-300
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
