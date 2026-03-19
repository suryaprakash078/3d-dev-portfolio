import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto z-10"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
        >
          AI/ML Student & Developer
        </motion.p>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          SURYA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">PRAKASH</span> KT
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          Specializing in Artificial Intelligence and Machine Learning. 
          Passionate about building smart solutions and interactive digital experiences.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <a
            href="https://github.com/suryaprakash078"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-all hover:shadow-glow hover:scale-105 active:scale-95"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/suryaprakash"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-glass text-foreground rounded-full font-medium hover:bg-white/10 transition-all border border-white/20 hover:scale-105 active:scale-95"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="mailto:surya@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-glass text-foreground rounded-full font-medium hover:bg-white/10 transition-all border border-white/20 hover:scale-105 active:scale-95"
          >
            <Mail className="w-5 h-5" />
            Contact
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/60 cursor-pointer"
        onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
