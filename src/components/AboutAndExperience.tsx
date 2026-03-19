import React from 'react';
import { motion } from 'framer-motion';
import { Book, GraduationCap, Calendar, MapPin, Award, User, Code, Brain } from 'lucide-react';

const skills = [
  { name: 'Python', category: 'Programming Language', icon: Code },
  { name: 'Java', category: 'Programming Language', icon: Code },
  { name: 'C++', category: 'Programming Language', icon: Code },
  { name: 'React Native', category: 'Frameworks', icon: Code },
  { name: 'MySQL', category: 'Databases', icon: Code },
  { name: 'MongoDB', category: 'Databases', icon: Code },
  { name: 'Git', category: 'DevOps', icon: Code },
  { name: 'Figma', category: 'UI/UX design', icon: Code },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative bg-[#020617]/50 border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4 text-primary font-bold tracking-widest uppercase text-sm">
              <User className="w-5 h-5" />
              About Me
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Driven by <span className="text-primary text-glow">Intelligence</span> and Design
            </h2>
            
            <div className="text-lg text-secondary-foreground leading-relaxed font-sans flex flex-col gap-6">
              <p>
                I am a dedicated student pursuing a Bachelor of Science in Artificial Intelligence and Machine Learning at Sri Krishna Arts and Science College. 
                With a strong foundation in both software development and AI principles, I am committed to creating impactful digital solutions.
              </p>
              <p>
                Beyond technical skills, I am a clear communicator, effective team player, and a curious explorer of new technologies.
                My interests range from complex algorithmic problems to the finer details of UI/UX design.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex flex-col gap-1 px-4 py-2 bg-glass rounded-xl border border-white/5">
                <span className="text-primary font-bold text-xl tracking-tight">2025</span>
                <span className="text-xs text-secondary-foreground uppercase tracking-widest">Graduating</span>
              </div>
              <div className="flex flex-col gap-1 px-4 py-2 bg-glass rounded-xl border border-white/5">
                <span className="text-accent font-bold text-xl tracking-tight">7.8</span>
                <span className="text-xs text-secondary-foreground uppercase tracking-widest">CGPA</span>
              </div>
              <div className="flex flex-col gap-1 px-4 py-2 bg-glass rounded-xl border border-white/5">
                <span className="text-white font-bold text-xl tracking-tight">3+</span>
                <span className="text-xs text-secondary-foreground uppercase tracking-widest">Major Projects</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4 text-accent font-bold tracking-widest uppercase text-sm">
              <Brain className="w-5 h-5" />
              Technical Arsenal
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-4 bg-glass rounded-2xl border border-white/10 hover:border-primary/50 transition-all group hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <skill.icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm tracking-tight">{skill.name}</span>
                  </div>
                  <span className="text-[10px] text-secondary-foreground uppercase tracking-wider block opacity-70">
                    {skill.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const education = [
    {
      title: 'Sri Krishna Arts and Science College',
      role: 'Bachelor of Science in Artificial Intelligence and Machine Learning',
      period: '2021 - 2025',
      location: 'Coimbatore, Tamil Nadu',
      desc: 'Focusing on core AI, ML, Data Science, and Software Development. Maintained a CGPA of 7.8.',
      icon: GraduationCap,
    },
    {
      title: 'Siwalik Matriculation Hr. Sec School',
      role: 'Higher Secondary School Certificate (HSC)',
      period: 'Graduated 2023',
      location: 'Pollachi, Tamil Nadu',
      desc: 'Completed HSC with 83.88% score.',
      icon: Book,
    },
  ];

  const achievements = [
    { title: 'Python Programming Certificate', source: 'Tutorial points', icon: Award },
    { title: 'Google Prompting Essential Certificate', source: 'Coursera', icon: Award },
    { title: 'AIML Internship Certificate', source: 'EDU TANTR', icon: Award },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Education & Awards
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Academic Journey</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-8">
            {education.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 bg-glass rounded-3xl border border-white/5 relative group hover:border-primary/30 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-all -rotate-12 translate-x-4 -translate-y-4">
                  <item.icon className="w-24 h-24" />
                </div>
                
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-primary font-bold tracking-widest uppercase">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {item.period}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {item.location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                  <div className="text-accent font-medium">{item.role}</div>
                  <p className="text-secondary-foreground leading-relaxed text-sm opacity-80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-bold tracking-tight flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Achievements
            </h3>
            
            <div className="flex flex-col gap-4">
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-4 bg-glass rounded-2xl border border-white/10 flex flex-col gap-1 hover:bg-white/5 transition-all"
                >
                  <span className="text-sm font-bold tracking-tight">{ach.title}</span>
                  <span className="text-[10px] text-accent uppercase tracking-widest font-medium opacity-80">
                    Verified by {ach.source}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
