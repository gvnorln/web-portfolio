'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useDarkMode } from '../context/DarkModeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (!el) return;

    const navbarOffset = 80;
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      navbarOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    setOpen(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        {/* ===== MOBILE BAR ===== */}
        <div className="md:hidden h-14 px-4 flex items-center justify-between
          backdrop-blur-md bg-white/80 dark:bg-neutral-950/80
          border-b border-neutral-200/60 dark:border-neutral-800
        ">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, '#home')}
            className="text-sm font-bold text-neutral-900 dark:text-neutral-100"
          >
            Giovan
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-neutral-600 dark:text-neutral-300
                hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition"
            >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>

            <button onClick={toggleMenu}>
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* ===== DESKTOP NAV ===== */}
        <div className="hidden md:block pointer-events-none">
          <motion.nav
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="
              pointer-events-auto
              mx-auto mt-4 w-fit
              px-6 py-3
              rounded-full
              backdrop-blur-xl
              bg-white/80 dark:bg-neutral-950/80
              border border-neutral-200/60 dark:border-neutral-800
              shadow-lg
              flex items-center gap-5
            "
          >
            {/* Brand */}
            <a
              href="#home"
              onClick={(e) => handleScroll(e, '#home')}
              className="
                font-bold text-sm pr-4
                border-r border-neutral-200 dark:border-neutral-800
                text-neutral-900 dark:text-neutral-100
              "
            >
              Giovan
            </a>

            {/* Links */}
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="
                    group relative px-4 py-2
                    text-sm font-medium
                    text-neutral-600 dark:text-neutral-400
                    transition-colors duration-300
                    hover:text-neutral-900 dark:hover:text-white
                    overflow-hidden
                  "
                >
                  {/* === GLOW PILL === */}
                  <span
                    className="
                      absolute inset-0 rounded-full
                      bg-indigo-500/10 dark:bg-indigo-400/10
                      opacity-0 group-hover:opacity-100
                      blur-md
                      transition-opacity duration-300
                    "
                  />

                  {/* === LIGHT SWEEP === */}
                  <span
                    className="
                      absolute -left-1/2 top-0 h-full w-1/2
                      bg-gradient-to-r from-transparent via-white/40 to-transparent
                      translate-x-0 group-hover:translate-x-[200%]
                      transition-transform duration-700 ease-out
                    "
                  />

                  {/* Text */}
                  <span className="relative z-10">
                    {link.name}
                  </span>

                  {/* === UNDERLINE BEAM === */}
                  <span
                    className="
                      absolute left-1/2 -bottom-1
                      h-[2px] w-0 -translate-x-1/2
                      bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500
                      rounded-full
                      group-hover:w-3/4
                      transition-all duration-300
                    "
                  />
                </a>
              ))}

              {/* Dark Mode */}
              <button
                onClick={toggleDarkMode}
                className="
                  ml-2 p-2 rounded-full
                  text-neutral-600 dark:text-neutral-300
                  hover:bg-neutral-200/60 dark:hover:bg-neutral-800
                  transition
                "
              >
                {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
              </button>
            </div>
          </motion.nav>
        </div>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={toggleMenu}
            />

            <motion.aside
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="fixed inset-0 z-50 bg-white dark:bg-neutral-950 px-6 py-8"
            >
              <div className="flex justify-between mb-10">
                <span className="font-bold">Menu</span>
                <button onClick={toggleMenu}>
                  <FiX size={22} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="
                      text-2xl font-semibold
                      text-neutral-800 dark:text-neutral-200
                      hover:text-indigo-500 transition
                    "
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
