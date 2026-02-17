import React from 'react';
import { motion } from 'framer-motion';

const lessons = [
  { day: "MON", time: "6:30 PM", style: "Two-Step Basics", level: "Beginner", instructor: "Cody R." },
  { day: "TUE", time: "7:00 PM", style: "West Coast Swing", level: "Intermediate", instructor: "Sarah L." },
  { day: "WED", time: "6:30 PM", style: "Line Dancing", level: "All Levels", instructor: "Jessica M." },
  { day: "THU", time: "7:00 PM", style: "Two-Step Mastery", level: "Advanced", instructor: "Cody R." },
];

const DanceLessons = () => {
  return (
    <section id="dance" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-black text-foreground uppercase italic mb-8 leading-[0.9]">
            The <span className="text-primary">Stirrup</span> School
          </h2>
          <p className="text-muted-foreground text-xl font-light max-w-2xl leading-relaxed">
            Don't just watch the dust settle. Join our nightly floor rotations and learn 
            the definitive Texas Two-Step from Austin's elite instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {lessons.map((lesson, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 border border-border/50 bg-card hover:border-primary transition-all duration-700 rounded-none flex flex-col h-[320px] shadow-xl hover:shadow-primary/5"
            >
              <div className="flex justify-between items-start mb-10">
                 <span className="text-sm font-black text-primary tracking-[0.4em]">{lesson.day}</span>
                 <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-[0.2em]">{lesson.time}</span>
              </div>
              
              <h3 className="text-3xl font-display font-bold uppercase italic text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                {lesson.style}
              </h3>
              
              <div className="mt-auto pt-6 flex flex-col gap-2 border-t border-border/30">
                <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  <span>Level</span>
                  <span className="text-foreground">{lesson.level}</span>
                </div>
                <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  <span>Instructor</span>
                  <span className="text-foreground">{lesson.instructor}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 border-2 border-primary/20 bg-card/50 flex flex-col md:flex-row items-center justify-between gap-10 shadow-inner rounded-none"
        >
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl font-display font-bold uppercase italic mb-3">Private Ensemble Sessions</h4>
            <p className="text-muted-foreground font-light text-lg">Curated instruction for corporate groups, wedding parties, and private events. Master the floor in a private setting.</p>
          </div>
          <button className="whitespace-nowrap bg-primary text-primary-foreground px-12 py-5 rounded-none font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-lg shadow-primary/20">
            BOOK PRIVATE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DanceLessons;