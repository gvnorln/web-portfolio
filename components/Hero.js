'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Dynamic Import untuk Framer Motion & Typewriter
const MotionSection = dynamic(() => import('framer-motion').then((mod) => mod.motion.section), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const Typewriter = dynamic(() => import('react-simple-typewriter').then((mod) => mod.Typewriter), { ssr: false });

export default function Hero() {
  const typewriterWords = useMemo(() => ['Giovan Orlen', 'Fullstack Developer', 'DevOps Engineer'], []);

  return (
    <MotionSection
      id="home"
      className="min-h-screen flex mb-10 items-center bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 relative overflow-hidden md:pt-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Background Gradient */}
      <MotionDiv
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute -top-[500px] -left-[500px] w-[1000px] h-[1000px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl will-change-transform"
        role="img"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 xl:px-0 flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20 justify-between">
        {/* Text Content */}
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 70, damping: 12 }}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-[55%] lg:w-[50%] text-center md:text-left relative z-10"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            <Typewriter
              words={typewriterWords}
              loop={0}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
              cursorBlinking
              cursorColor="#3B82F6"
            />
          </h1>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium"
          >
            Turning <span className="text-blue-600 dark:text-blue-400">ideas</span> into{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              digital reality
            </span>
          </MotionDiv>

          {/* Social Links */}
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center md:justify-start items-center gap-6 text-gray-700 dark:text-gray-300"
          >
            <a href="https://github.com/gvnorln" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/giovannorlen" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">
              <FaLinkedin size={30} />
            </a>
          </MotionDiv>
        </MotionDiv>

        {/* Profile Picture */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-[45%] lg:w-[40%] flex justify-center relative"
        >
          <MotionDiv
            whileHover={{ scale: 1.03, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
          >
            <Image
              src="/profile.jpeg"
              alt="Giovan Orlen's Profile Picture"
              width={320}
              height={320}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
              priority
            />
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
