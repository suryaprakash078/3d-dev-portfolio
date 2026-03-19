import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Cpu, Database, Layout, Sparkles, MessageCircle, Mic, UserCheck } from 'lucide-react';

const projects = [
  {
    title: 'JARVIS 2.0',
    role: 'Voice Assistant',
    desc: 'Smart voice-activated personal assistant designed to simplify daily computing tasks through natural language interaction. Built mainly in Python, it integrates different libraries for system tasks and information processing.',
    tech: ['Python', 'Speech Recognition', 'NLP', 'OS Library'],
    icon: Mic,
    color: '#14B8A6',
    link: 'https://github.com/suryaprakash078',
  },
  {
    title: 'Chatbot with Face Recognition',
    role: 'AI Security Solution',
    desc: 'Interactive chatbot system integrated with security features such as facial recognition as its main authentication and safety layer.',
    tech: ['Python', 'OpenCV', 'Deep Learning', 'PyQt'],
    icon: UserCheck,
    color: '#22D3EE',
    link: 'https://github.com/suryaprakash078',
  },
  {
    title: 'Edugrowth AI',
    role: 'Educational Tech',
    desc: 'Website platform for students to revolutionize their education using AI-generated videos, aimed at improving skills and providing hands-on experience.',
    tech: ['React', 'AI Video Generation', 'Educational UX'],
    icon: Sparkles,
    color: '#F472B6',
    link: 'https://github.com/suryaprakash078',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-[#020617]/50 border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 flex flex-col gap-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              My Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>
          
          <a
            href="https://github.com/suryaprakash078"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-glass text-foreground rounded-full font-medium hover:bg-white/10 transition-all border border-white/20 hover:scale-105 active:scale-95 text-sm uppercase tracking-widest"
          >
            <Github className="w-5 h-5" />
            View All Repos
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 bg-glass rounded-[2rem] border border-white/5 relative group hover:border-primary/40 transition-all flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-all -rotate-12 translate-x-4 -translate-y-4">
                <proj.icon className="w-32 h-32" />
              </div>
              
              <div className="flex flex-col gap-6 relative z-10 h-full">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: proj.color }}
                >
                  <proj.icon className="w-6 h-6" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{proj.title}</h3>
                  <div className="text-xs text-accent font-bold tracking-widest uppercase opacity-70">{proj.role}</div>
                </div>
                
                <p className="text-secondary-foreground leading-relaxed text-sm flex-1">{proj.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-white/5 rounded-md border border-white/10 uppercase tracking-widest font-bold">
                      {t}
                    </span>
                  ))}
                </div>
                
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                >
                  Source Code
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto z-10 text-center flex flex-col gap-12">
        <div className="flex flex-col gap-4 items-center">
          <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Let's <span className="text-glow text-accent">Collaborate</span></h2>
          <p className="text-xl text-secondary-foreground max-w-xl mx-auto leading-relaxed mt-4">
            Looking for a dedicated AI/ML developer or student for internships or projects? I'm just a message away.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <a
            href="mailto:surya@gmail.com"
            className="flex flex-col items-center gap-4 p-8 bg-glass rounded-[2rem] border border-white/5 flex-1 group hover:border-primary/50 transition-all hover:scale-105 active:scale-95"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <Mic className="w-8 h-8 rotate-12" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold tracking-widest uppercase opacity-60">Email Me</span>
              <span className="text-xl font-bold tracking-tight">surya@gmail.com</span>
            </div>
          </a>
          
          <a
            href="https://github.com/suryaprakash078"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-8 bg-glass rounded-[2rem] border border-white/5 flex-1 group hover:border-accent/50 transition-all hover:scale-105 active:scale-95"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
              <Github className="w-8 h-8 -rotate-12" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold tracking-widest uppercase opacity-60">Follow Me</span>
              <span className="text-xl font-bold tracking-tight">suryaprakash078</span>
            </div>
          </a>
        </div>
        
        <footer className="mt-24 pt-12 border-t border-white/5 text-secondary-foreground/40 text-sm">
          <p>© 2024 SURYA PRAKASH KT. Crafted with React & Three.js</p>
        </footer>
      </div>
    </section>
  );
}
