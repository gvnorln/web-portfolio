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
      className="md:py-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
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
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700 text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-blue-400 dark:hover:border-cyan-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  fill
                  loading="lazy"
                  className="object-contain p-1 rounded-lg shadow-md"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {exp.company}
              </h3>
              <p className="text-lg md:text-xl text-cyan-600 dark:text-cyan-400 mb-2">
                {exp.position}
              </p>

              <motion.ul className="space-y-4 border-l-2 border-blue-100 dark:border-blue-900 pl-6 text-left">
                {exp.points.map((point, i) => (
                  <motion.li 
                    key={i}
                    className="relative text-gray-700 dark:text-gray-300 text-base md:text-lg group transition-all duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <FiArrowUpRight className="inline-block mr-2 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:translate-x-1" />
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
