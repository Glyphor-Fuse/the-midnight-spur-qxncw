import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.4em] uppercase bg-primary/20 text-primary border border-primary/30 rounded-none">
            Est. 1974 • Austin, Texas
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black text-foreground uppercase leading-[0.8] tracking-tighter mb-10 italic">
            THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-primary-foreground">MIDNIGHT</span> <br />
            SPUR
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body font-light leading-relaxed">
            Where Desert Chic minimalism meets the soul of the legendary Texas dance hall. 
            Experience nightlife at a different tempo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="rounded-none px-10 h-16 text-base font-bold bg-primary text-primary-foreground hover:scale-105 transition-all group">
              TICKETS & LINEUP
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-none px-10 h-16 text-base border-primary/50 text-foreground hover:bg-primary/10">
              RESERVE A BOOTH
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;