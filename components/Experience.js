"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Bisnis Indonesia Group",
    role: "IT Programmer",
    period: "Feb 2024 – Jun 2024",
    logo: "/images/big-logo.jpg",
    highlights: [
      "Developed RESTful APIs for room reservation & article management (Laravel)",
      "Integrated JWT authentication & route protection middleware",
      "Built dynamic reservation & asset management UI (Next.js)",
      "Designed relational tables in PostgreSQL & Oracle",
      "Improved dashboard navigation & fixed cross-browser UI issues",
      "Performed API testing with Postman & refactored legacy modules",
    ],
    tech: [
      "Laravel",
      "Next.js",
      "PostgreSQL",
      "Oracle",
      "JWT",
      "Postman",
    ],
  },
  {
    company: "Rakamin Academy",
    role: "Frontend Developer",
    period: "2023",
    highlights: [
      "Built dynamic UI using Vue.js",
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
      "Recorded incoming & outgoing inventory data",
      "Verified invoices and goods receipts",
      "Resolved discrepancies in inventory records",
    ],
    tech: ["Inventory System", "Data Verification"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
            Professional Journey
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A snapshot of my professional experience, responsibilities, and technologies
          I’ve worked with across software engineering and IT roles.
        </p>
      </div>

      {/* ===== TIMELINE ===== */}
      <div className="relative max-w-4xl mx-auto px-6">
        {/* vertical line */}
        <div
          aria-hidden
          className="
            absolute left-4 top-0 bottom-0
            w-px bg-gradient-to-b from-blue-500/40 via-cyan-500/40 to-transparent
          "
        />

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-14">
              {/* dot */}
              <div
                aria-hidden
                className="
                  absolute left-2 top-6
                  w-4 h-4 rounded-full
                  bg-blue-600
                  ring-4 ring-blue-500/20
                "
              />

              {/* card */}
              <div
                className="
                  rounded-3xl
                  bg-white/80 dark:bg-gray-900/80
                  backdrop-blur-xl
                  border border-gray-200/50 dark:border-gray-700/50
                  shadow-xl
                  p-8
                "
              >
                {/* header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </span>
                </div>

                {/* highlights */}
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1 text-sm rounded-full
                        bg-blue-100 text-blue-700
                        dark:bg-blue-900/40 dark:text-blue-300
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
