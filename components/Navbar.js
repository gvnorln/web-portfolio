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

function DarkModeButton({ darkMode, toggleDarkMode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all"
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
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 w-full flex justify-center items-center px-4 py-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg shadow-lg z-50 border-b border-gray-300 dark:border-gray-700"
    >
            <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Desktop Navigation */}
<div className="hidden md:grid grid-cols-6 gap-4 w-full max-w-2xl">
  {navLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className="relative text-center text-gray-700 dark:text-gray-300 group text-sm font-medium transition-all px-4 py-2"
    >
      <span className="relative z-10">{link.name}</span>
      <motion.div
        className="absolute inset-0 scale-x-0 group-hover:scale-x-75 transition-transform duration-300 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 rounded-lg"
      />
    </Link>
  ))}
</div>




      {/* Mobile Controls */}
      <div className="md:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 text-gray-700 dark:text-gray-300"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-14 left-1/2 transform -translate-x-1/2 w-64 bg-white dark:bg-gray-900 rounded-lg shadow-xl"
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
                  className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}