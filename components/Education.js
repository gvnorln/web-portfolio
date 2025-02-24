'use client';
import { motion } from 'framer-motion';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { FiCode, FiDatabase, FiBookOpen } from 'react-icons/fi';
import Image from 'next/image';

export default function Education() {
  return (
    <motion.section 
      id="education" 
      className="min-h-screen flex flex-col justify-center items-center py-12 md:py-20 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-900 dark:to-gray-800 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="max-w-6xl w-full px-4 xl:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Academic Education
        </motion.h2>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 12 }}
            className="relative bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 mx-auto w-full max-w-4xl shadow-2xl hover:shadow-3xl backdrop-blur-md border border-gray-100/20 dark:border-gray-700/50"
          >
            {/* Header Section */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center mb-6">
                <FaUniversity className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Krisnadwipayana University
                </h3>
                <p className="text-lg text-cyan-600 dark:text-cyan-400 mt-2 flex items-center gap-2">
                  <FaGraduationCap className="inline" />
                  Faculty of Informatics Engineering
                </p>
              </div>

              {/* Timeline & GPA */}
              <div className="flex flex-col items-center space-y-4 mb-8">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm">
                  2021 - Present
                </span>
                <div className="w-full max-w-xs bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full rounded-full" 
                    style={{ width: '90%' }}
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  Current GPA: 3.63/4.00
                </p>
              </div>
            </div>

            {/* Relevant Courses */}
            <div className="mt-8">
              <h4 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-6 text-center flex items-center justify-center gap-2">
                <FiBookOpen className="text-xl" />
                Relevant Courses
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[ 
                  { name: 'Algorithms & Programming', icon: <FiCode /> },
                  { name: 'Database Systems', icon: <FiDatabase /> },
                  { name: 'Web Development', icon: <FiBookOpen /> },
                  { name: 'Software Engineering', icon: <FiBookOpen /> }
                ].map((course, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl border border-gray-100/30 dark:border-gray-600/50 backdrop-blur-sm text-center"
                  >
                    <div className="text-blue-600 dark:text-blue-400 text-3xl mb-3 flex justify-center">
                      {course.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {course.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}