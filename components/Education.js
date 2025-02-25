'use client';
import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { FiCode, FiDatabase, FiBookOpen } from 'react-icons/fi';

const courses = [
  { name: 'Algorithms & Programming', icon: FiCode },
  { name: 'Database Systems', icon: FiDatabase },
  { name: 'Web Development', icon: FiBookOpen },
  { name: 'Software Engineering', icon: FiBookOpen },
];

const CourseItem = memo(({ name, Icon }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="p-3 md:p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 shadow-md text-center"
  >
    <div className="text-blue-600 dark:text-blue-400 text-2xl md:text-3xl mb-2 md:mb-3 flex justify-center">
      <Icon aria-label={name} />
    </div>
    <span className="text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200">{name}</span>
  </motion.div>
));

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
};

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const courseList = useMemo(() => courses, []);

  return (
    <motion.section
      ref={ref}
      id="education"
      className="min-h-screen flex flex-col justify-center items-center py-8 sm:py-12 md:py-20 bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={sectionVariants}
    >
      <div className="max-w-6xl w-full px-5 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-900 dark:text-white"
        >
          Academic Education
        </motion.h2>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.8, type: 'spring', damping: 12 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mx-auto w-full max-w-4xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex flex-col items-center mb-4 sm:mb-6">
                <FaUniversity className="text-3xl sm:text-4xl text-blue-600 dark:text-blue-400 mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Krisnadwipayana University</h3>
                <p className="text-sm sm:text-lg text-cyan-600 dark:text-cyan-400 mt-1 sm:mt-2 flex items-center gap-2">
                  <FaGraduationCap className="inline" /> Faculty of Informatics Engineering
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <span className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">2021 - Present</span>
                <div className="w-full max-w-[200px] sm:max-w-xs bg-gray-300 dark:bg-gray-700 rounded-full h-2 sm:h-3">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '90%' }} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">Current GPA: 3.63/4.00</p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <h4 className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-200 mb-4 sm:mb-6 text-center flex items-center justify-center gap-2">
                <FiBookOpen className="text-lg sm:text-xl" /> Relevant Courses
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {courseList.map((course, i) => (
                  <CourseItem key={i} name={course.name} Icon={course.icon} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
