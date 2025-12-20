'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import {
  FaUniversity,
  FaGraduationCap,
  FaShieldAlt,
  FaGithub
} from 'react-icons/fa';
import {
  FiCode,
  FiDatabase,
  FiBookOpen,
  FiGlobe,
  FiServer,
  FiLock
} from 'react-icons/fi';

/* ===================== DATA ===================== */
const courses = [
  { name: 'Algorithms & Programming', icon: FiCode },
  { name: 'Database Systems', icon: FiDatabase },
  { name: 'Web Development', icon: FiGlobe },
  { name: 'Software Engineering', icon: FiBookOpen },
  { name: 'Cloud Computing', icon: FiServer },
];

/* ===================== COURSE CARD ===================== */
const CourseItem = memo(({ name, Icon }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2, ease: 'easeOut' }}
    className="
      group p-4 rounded-xl bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      shadow-sm hover:shadow-lg
      will-change-transform
    "
  >
    <div className="flex flex-col items-center text-center">
      <Icon className="text-3xl mb-3 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
        {name}
      </span>
    </div>
  </motion.div>
));

/* ===================== MAIN ===================== */
const Education = memo(() => (
  <section
    id="education"
    className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
  >
    <div className="max-w-6xl mx-auto px-6">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        Academic Education
      </h2>

      {/* ===================== EDUCATION CARD ===================== */}
      <div className="flex justify-center mb-20">
        <div
          className="
            w-full max-w-4xl rounded-3xl
            bg-white/90 dark:bg-gray-900/90
            backdrop-blur
            border border-gray-200 dark:border-gray-700
            shadow-xl p-8 md:p-10
          "
        >
          {/* Header */}
          <div className="text-center mb-10">
            <FaUniversity className="mx-auto text-4xl text-blue-600 dark:text-blue-400 mb-4" />

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Krisnadwipayana University
            </h3>

            <p className="mt-2 flex justify-center items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium">
              <FaGraduationCap />
              Faculty of Informatics Engineering
            </p>

            <div className="mt-6 flex flex-col items-center gap-3">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-600 text-white">
                2021 — Present
              </span>

              {/* Progress */}
              <div className="w-64 h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div className="h-full w-[90%] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
              </div>

              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Current GPA: <span className="font-semibold">3.63 / 4.00</span>
              </p>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="flex items-center justify-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
              <FiBookOpen />
              Relevant Courses
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {courses.map((c) => (
                <CourseItem key={c.name} name={c.name} Icon={c.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===================== THESIS SECTION ===================== */}
      <div className="flex justify-center">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="
            w-full max-w-4xl rounded-3xl
            bg-gradient-to-br from-blue-600/90 to-cyan-500/90
            text-white
            shadow-2xl p-8 md:p-10
            will-change-transform
          "
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <FaShieldAlt className="text-3xl" />
            <h3 className="text-2xl font-bold">
              Final Project / Thesis
            </h3>
          </div>

          <h4 className="text-xl font-semibold mb-3">
            Implementation of Dynamic Secrets for Securing Kubernetes CI/CD Pipelines
          </h4>

          <p className="text-white/90 leading-relaxed mb-6">
            This research focuses on improving CI/CD pipeline security by
            implementing <strong>Dynamic Secrets</strong> using
            <strong> HashiCorp Vault</strong>, integrated with
            <strong> GitHub Actions</strong> and <strong>Kubernetes</strong>.
            The solution eliminates the risk of static credential leakage
            through short-lived, TTL-based secrets obtained via OIDC authentication.
          </p>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="flex gap-3 items-start">
              <FiLock className="text-xl shrink-0" />
              <p className="text-sm">
                <strong>0% secrets leakage</strong> detected using Gitleaks & Git-Secrets
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <FiServer className="text-xl shrink-0" />
              <p className="text-sm">
                Automatic credential rotation in <strong>~74ms</strong> (Vault TTL-based)
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <FiCode className="text-xl shrink-0" />
              <p className="text-sm">
                Secure CI/CD authentication via <strong>GitHub OIDC</strong>
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <FiBookOpen className="text-xl shrink-0" />
              <p className="text-sm">
                <strong>100% compliance</strong> with NIST SP 800-171
              </p>
            </div>
          </div>

          {/* Action */}
          <a
            href="https://github.com/gvnorln/vault-secrets-research.git"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              px-5 py-3 rounded-xl
              bg-white text-blue-700 font-semibold
              hover:bg-gray-100 transition
            "
          >
            <FaGithub />
            View Project Details
          </a>
        </motion.div>
      </div>
    </div>
  </section>
));

export default Education;
