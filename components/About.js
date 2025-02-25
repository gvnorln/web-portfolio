'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo, lazy } from 'react';

const FiArrowUpRight = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiArrowUpRight })));

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const aboutText = useMemo(() => (
    "I am a Fullstack Developer and aspiring DevOps Engineer passionate about Cloud, Automation, and DevOps. " +
    "Currently, I’m learning Terraform, Docker, Kubernetes, and Cloud Computing while exploring Microservices and DevOps practices. " +
    "I thrive on automation, system optimization, and building scalable, reliable solutions. 🚀"
  ), []);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-8 drop-shadow-lg"
        >
          About Me
        </motion.h2>

        <motion.div 
          className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed md:text-justify">
            {aboutText}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:gap-3 hover:scale-105 md:hover:scale-110"
          >
            <span>Download CV</span>
            <FiArrowUpRight className="text-xl transition-transform group-hover:rotate-45" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
