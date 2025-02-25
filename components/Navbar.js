'use client';
import { useState, useEffect, useCallback } from 'react';
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
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setHidden(window.scrollY > lastScrollY);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ x: 0 }}
      animate={{ x: hidden ? '100%' : 0 }}
      transition={{ duration: 0 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-auto px-8 py-3 bg-white/30 dark:bg-gray-900/50 backdrop-blur-3xl shadow-lg rounded-full z-50 border border-gray-200 dark:border-gray-700 flex items-center space-x-6 
      md:top-4 md:left-1/2 md:-translate-x-1/2 md:px-4"
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative text-gray-700 dark:text-gray-300 group text-sm font-medium transition-all"
          >
            <span className="relative z-10">{link.name}</span>
            <motion.div
              className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full group-hover:left-0"
              layoutId="underline"
            />
          </Link>
        ))}
      </div>

      <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Mobile Controls */}
      <div className="md:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 pr-9 text-gray-700 dark:text-gray-300"
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
          className="absolute top-16 left-4 w-64 bg-white dark:bg-gray-900 rounded-lg shadow-xl"
        >
          <div className="flex flex-col p-6 space-y-4">
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
