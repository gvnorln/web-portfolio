"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useMemo } from "react";
import { useMounted } from "./useMounted";
export default function Hero() {
  const mounted = useMounted();
  const roles = useMemo(
    () => [
      "Fullstack Developer",
      "UI / UX Explorer",
      "Tech & System Enthusiast",
    ],
    []
  );
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="home"
      className=" relative min-h-screen overflow-hidden bg-white dark:bg-neutral-950 px-6 "
    >
      {" "}
      {/* ===== Ambient Background ===== */}{" "}
      <div
        aria-hidden
        className=" absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%), radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.15),transparent_40%)] "
      />{" "}
      <div className=" relative z-10 max-w-7xl mx-auto min-h-screen pt-20 flex flex-col justify-center ">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {" "}
          {/* ===== LEFT : TYPOGRAPHY ===== */}{" "}
          <div className="md:col-span-7">
            {" "}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-widest uppercase text-neutral-500 mb-4"
            >
              {" "}
              Hello, I’m{" "}
            </motion.p>{" "}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className=" text-[clamp(3rem,6vw,5.5rem)] font-black leading-[1.05] text-neutral-900 dark:text-neutral-100 "
            >
              {" "}
              Giovan{" "}
              <span className="block text-neutral-400 dark:text-neutral-600">
                {" "}
                Orlen{" "}
              </span>{" "}
            </motion.h1>{" "}
            {/* ===== ROLE ===== */}{" "}
            <div className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 h-8">
              {" "}
              {mounted && (
                <Typewriter
                  words={roles}
                  loop={0}
                  cursor
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1800}
                />
              )}{" "}
            </div>{" "}
            {/* ===== DESCRIPTION ===== */}{" "}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-6 max-w-xl text-neutral-600 dark:text-neutral-400 leading-relaxed"
            >
              {" "}
              I build scalable web systems with strong attention to performance,
              architecture, and clean user experience.{" "}
            </motion.p>{" "}
            {/* ===== ACTIONS ===== */}{" "}
            <div className="mt-8 flex items-center gap-6">
              {" "}
              <button
                onClick={scrollToAbout}
                className=" text-sm font-semibold text-neutral-900 dark:text-neutral-100 underline underline-offset-8 hover:text-indigo-600 dark:hover:text-indigo-400 transition "
              >
                {" "}
                Explore work{" "}
              </button>{" "}
              <a
                href="/cv-giovan-orlen.pdf"
                className=" text-sm font-semibold text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition "
              >
                {" "}
                Download CV{" "}
              </a>{" "}
            </div>{" "}
            {/* ===== SOCIAL ===== */}{" "}
            <div className="mt-10 flex gap-5 text-neutral-500">
              {" "}
              <a
                href="https://github.com/"
                aria-label="GitHub"
                className="hover:text-neutral-900 dark:hover:text-white transition"
              >
                {" "}
                <FaGithub size={22} />{" "}
              </a>{" "}
              <a
                href="https://linkedin.com/"
                aria-label="LinkedIn"
                className="hover:text-neutral-900 dark:hover:text-white transition"
              >
                {" "}
                <FaLinkedin size={22} />{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* ===== RIGHT : VISUAL ===== */}{" "}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
              }}
              className="
      group relative
      w-60 h-80 md:w-72 md:h-96
      rounded-[28px]
      overflow-hidden
      will-change-transform
      [transform-style:preserve-3d]
    "
            >
              {/* ===== ANIMATED GRADIENT BACKGROUND ===== */}
              <div
                className="
        absolute inset-0
        bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.45),transparent_60%),
            radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.35),transparent_55%)]
        dark:bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_60%),
            radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.25),transparent_55%)]
        transition-all duration-700
        group-hover:scale-110
      "
              />

              {/* ===== GLASS LAYER ===== */}
              <div
                className="
        absolute inset-[1px]
        rounded-[26px]
        backdrop-blur-xl
        bg-white/70 dark:bg-neutral-900/70
      "
              />

              {/* ===== IMAGE WRAPPER (DEPTH) ===== */}
              <div
                className="
        absolute inset-3
        rounded-2xl
        overflow-hidden
        shadow-xl
        transition-transform duration-700 ease-out
        group-hover:translate-y-[-6px]
      "
              >
                <Image
                  src="/profile2.jpeg"
                  alt="Giovan Orlen"
                  fill
                  priority
                  className="
          object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-[1.07]
        "
                />
              </div>

              {/* ===== LIGHT SWEEP ===== */}
              <span
                className="
        pointer-events-none
        absolute -left-1/2 top-0
        h-full w-1/2
        bg-gradient-to-r
        from-transparent
        via-white/40
        to-transparent
        opacity-0
        group-hover:opacity-100
        translate-x-0
        group-hover:translate-x-[220%]
        transition-all duration-700 ease-out
      "
              />

              {/* ===== OUTER GLOW ===== */}
              <div
                className="
        pointer-events-none
        absolute inset-0
        rounded-[28px]
        shadow-[0_40px_120px_-40px_rgba(99,102,241,0.55)]
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-700
      "
              />
            </motion.div>
          </div>
        </div>{" "}
        {/* ===== SCROLL HINT ===== */}{" "}
        <motion.div
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className=" absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase text-neutral-400 cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-200 transition "
        >
          {" "}
          Scroll{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
