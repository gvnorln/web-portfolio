'use client';
import { useState, useCallback } from 'react';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

// Komponen Tombol Dark Mode untuk menghindari duplikasi
function DarkModeButton({ darkMode, toggleDarkMode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
      aria-label="Toggle Dark Mode"
    >
      <motion.div animate={{ rotate: darkMode ? 360 : 0 }} transition={{ duration: 0.5 }}>
        {darkMode ? (
          <FiSun className="w-6 h-6 text-amber-400" />
        ) : (
          <FiMoon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        )}
      </motion.div>
    </motion.button>
  );
}

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm z-50 border-b border-gray-100/30 dark:border-gray-800/50"
    >
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              PORTFOLIO
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-600 dark:text-gray-300 group text-sm font-medium"
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 transition-all group-hover:w-full"
                />
              </Link>
            ))}

            <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-600 dark:text-gray-300"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden absolute w-full left-0 bg-white dark:bg-gray-800 shadow-xl ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="block py-3 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
