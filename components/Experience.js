'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';

const experiences = [
  {
    company: 'Bisnis Indonesia Group',
    position: 'IT Programmer',
    duration: 'Feb 2024 – Jun 2024',
    points: [
      'Fixed various bugs in Internal Employee Website (Laravel 5)',
      'Developed automated logging system for item transactions',
      'Led portal redesign using Next.js 14 & Express.js',
      'Built reservation management system for meeting rooms'
    ],
    tech: ['Laravel', 'Next.js', 'Express.js', 'MySQL', 'PostgreSQL', 'Oracle'],
    logo: '/images/big-logo.jpg'
  }
];

export default function Experience() {
  return (
    <motion.section 
      id="experience" 
      className="md:py-20 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-900 dark:to-gray-800 backdrop-blur-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Professional Journey
        </motion.h2>

        <div className="flex flex-col items-center gap-6 md:gap-8">
          <AnimatePresence>
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="group relative w-full max-w-3xl bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-md border border-gray-100/20 dark:border-gray-700/50 flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Logo */}
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="object-contain p-1 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg"
                    />
                  </div>
                </motion.div>

                {/* Company Info */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {exp.company}
                </h3>
                <p className="text-lg md:text-xl text-cyan-600 dark:text-cyan-400 mb-2">
                  {exp.position}
                </p>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-6">
                  <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                    {exp.duration}
                  </span>
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-2 w-full max-w-prose mb-6">
                  {exp.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-blue-100/50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm border border-blue-200/30 dark:border-blue-700/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Experience Points */}
                <motion.ul className="space-y-4 md:space-y-6 border-l-2 border-blue-100 dark:border-blue-900 pl-6 md:pl-8 text-left">
                  {exp.points.map((point, i) => (
                    <motion.li 
                      key={i}
                      className="relative text-gray-700 dark:text-gray-300 text-base md:text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      <div className="absolute -left-[9px] top-3 w-3 h-3 bg-blue-600 rounded-full" />
                      <div className="flex items-start gap-3">
                        <FiArrowUpRight className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400 w-5 h-5" />
                        <span>{point}</span>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
