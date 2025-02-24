'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-[500px] -left-[500px] w-[1000px] h-[1000px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20 justify-between">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
            className="md:w-[55%] lg:w-[50%] text-center md:text-left relative z-10"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              <Typewriter
                words={['Giovan Orlen', 'Fullstack Developer', 'DevOps Engineer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
                cursorBlinking
                cursorColor="#3B82F6"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.33, 1, 0.68, 1], delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium"
            >
              Turning <span className="text-blue-600 dark:text-blue-400">ideas</span> into {' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                digital reality
              </span>
            </motion.p>

            {/* Social Links + Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-gray-700 dark:text-gray-300"
            >
              <a
                href="https://github.com/gvnorln"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://linkedin.com/in/giovannorlen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              
              {/* Download Resume Button */}
              {/* <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaDownload className="text-lg" />
                <span className="font-medium">Download CV</span> */}
              {/* </motion.a> */}
            </motion.div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 18, mass: 0.8, delay: 1.2 }}
            className="md:w-[45%] lg:w-[40%] flex justify-center relative"
          >
            <motion.div
              whileHover={{ scale: 1.03, rotate: 3 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl z-10"
            >
              <Image
                src="/profile.jpeg"
                alt="Giovan Orlen"
                width={320}
                height={320}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-4 h-8 border-2 border-blue-600 rounded-full relative">
          <motion.div
            animate={{ y: [0, 16], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-blue-600 rounded-full absolute top-1 left-1/2 -translate-x-1/2"
          />
        </div>
        <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">Scroll down</span>
      </motion.div>
    </section>
  );
}