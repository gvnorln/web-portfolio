"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useMounted } from "./useMounted";

export default function Hero() {
  const mounted = useMounted();

  const typewriterWords = useMemo(
    () => [
      "Giovan Orlen",
      "Fullstack Developer",
      "UI/UX Designer",
      "Tech Enthusiast",
    ],
    []
  );

  const handleScroll = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        flex items-center justify-center
        bg-gradient-to-b from-white via-blue-50 to-purple-50
        dark:from-gray-900 dark:via-gray-900 dark:to-gray-800
        px-6
      "
    >
      {/* ===== STATIC BACKGROUND ===== */}
      <div
        aria-hidden
        className="
          absolute -top-[30rem] -left-[30rem]
          w-[60rem] h-[60rem]
          rounded-full blur-3xl
          bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20
        "
      />

      <div className="relative z-10 max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12">
        {/* ===== TEXT (NO MOUNT ANIMATION) ===== */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {mounted && (
                <Typewriter
                  words={typewriterWords}
                  loop={0}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={45}
                  delaySpeed={2000}
                  cursorColor="#3B82F6"
                />
              )}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Turning <span className="text-blue-600 font-semibold">ideas</span>{" "}
            into{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
              digital reality
            </span>
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <button
              onClick={handleScroll}
              className="px-6 py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg"
            >
              Explore More
            </button>

            <a
              href="/cv-giovan-orlen.pdf"
              className="px-6 py-3 rounded-xl font-semibold border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              Download CV
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-5 text-gray-700 dark:text-gray-300">
            <FaGithub size={28} />
            <FaLinkedin size={28} />
          </div>
        </div>

        {/* ===== IMAGE WITH IDLE FLOAT (SAFE) ===== */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative w-56 h-56 md:w-72 md:h-72
              rounded-full overflow-hidden
              border-4 border-white dark:border-gray-800
              shadow-2xl
              bg-white dark:bg-gray-900
            "
          >
            <Image
              src="/profile2.jpeg"
              alt="Giovan Orlen"
              width={288}
              height={288}
              priority
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <div
        onClick={handleScroll}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-blue-600 dark:text-blue-400"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="hidden md:block">
            <BsMouse size={28} />
          </span>
          <span className="md:hidden">
            <FaArrowDown size={26} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
