import React, { useEffect } from 'react';
import { ThreeBackground } from './ThreeBackground';
import { Hero } from './Hero';
import { About, Experience } from './AboutAndExperience';
import { Projects, Contact } from './ProjectsAndContact';
import { motion, useScroll, useSpring } from 'framer-motion';

export function SuryaPortfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="relative text-foreground min-h-screen">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Sticky Navigation - Glass Style */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 px-6 py-3 bg-glass rounded-full border border-white/10 hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-secondary-foreground">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#experience" className="hover:text-primary transition-colors">Education</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </nav>

      {/* Sections */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
