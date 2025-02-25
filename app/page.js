"use client"

import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import About from '@/components/About';

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}