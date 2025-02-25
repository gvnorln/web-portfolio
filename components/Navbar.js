'use client';
import { useState, useCallback, useMemo } from 'react';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
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

const DarkModeButton = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all"
    aria-label="Toggle Dark Mode"
  >
    {darkMode ? <FiSun className="w-6 h-6 text-amber-400" /> : <FiMoon className="w-6 h-6 text-gray-600 dark:text-gray-300" />}
  </button>
);

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const menuItems = useMemo(
    () =>
      navLinks.map((link) => (
        <div key={link.name}>
          <Link
            href={link.href}
            className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            {link.name}
          </Link>
        </div>
      )),
    [toggleMenu]
  );

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-transparent backdrop-blur-md shadow-lg z-50 border-b border-white/10 dark:border-gray-800/50 transition-all">
    <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative text-gray-700 dark:text-gray-300 group text-sm font-medium transition-all px-4 py-2"
          >
            <span className="relative z-10">{link.name}</span>
            <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 rounded-lg" />
          </Link>
        ))}
      </div>

      {/* Mobile Controls */}
      <div className="md:hidden">
        <button className="p-2 text-gray-700 dark:text-gray-300" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-white dark:bg-gray-900 shadow-lg z-50">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Menu</h2>
              <button className="p-2 text-gray-700 dark:text-gray-300" onClick={toggleMenu} aria-label="Close Menu">
                <FiX className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">{menuItems}</div>
          </div>
        </div>
      )}
    </nav>
  );
}