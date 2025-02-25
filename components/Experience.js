'use client';
import { motion } from 'framer-motion';
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
      className="py-16 px-4 md:py-20 bg-gray-50 dark:bg-gray-900 flex items-center justify-center min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Professional Journey
        </motion.h2>

        <div className="flex flex-col items-center">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-blue-400 dark:hover:border-cyan-500 text-center w-full max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 mx-auto mb-6">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  fill
                  loading="lazy"
                  className="object-contain rounded-lg shadow-md"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {exp.company}
              </h3>
              <p className="text-lg text-cyan-600 dark:text-cyan-400 mb-2">
                {exp.position}
              </p>

              <motion.ul className="space-y-3 text-center">
                {exp.points.map((point, i) => (
                  <motion.li 
                    key={i}
                    className="flex justify-center items-center text-gray-700 dark:text-gray-300 text-base group transition-all duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <FiArrowUpRight className="mr-2 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
