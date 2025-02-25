import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { useMemo } from "react";

export default function Hero() {
  const typewriterWords = useMemo(
    () => ["Giovan Orlen", "Fullstack Developer", "DevOps Engineer"],
    []
  );

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 relative overflow-hidden px-4 sm:px-6 md:px-8 text-center pb-12 sm:pb-16"
    >
      {/* Background Gradient */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-[500px] -left-[500px] w-[1000px] h-[1000px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 justify-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full md:w-[55%] relative z-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
          >
            Turning{" "}
            <span className="text-blue-600 dark:text-blue-400">ideas</span> into{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              digital reality
            </span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-gray-700 dark:text-gray-300"
          >
            <a
              href="https://github.com/gvnorln"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/giovanorlen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              <FaLinkedin size={28} />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.8 }}
          className="w-48 sm:w-56 md:w-64 lg:w-72 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03, rotate: 3 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl w-full aspect-square"
          >
            <Image
              src="/profile.jpeg"
              alt="Giovan Orlen"
              width={256}
              height={256}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Icon */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
        className="absolute bottom-11 inset-x-0 mx-auto w-fit flex flex-col items-center text-blue-500 dark:text-blue-400"
      >
        <FaArrowDown size={32} className="animate-bounce sm:hidden" />
        <BsMouse size={32} className="animate-bounce hidden sm:block" />
      </motion.div>
    </section>
  );
}
