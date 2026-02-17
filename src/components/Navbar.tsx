import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Lineup', href: '#lineup' },
    { name: 'Dance', href: '#dance' },
    { name: 'VIP Booths', href: '#booth-beat' },
    { name: 'Menu', href: '#menu' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border py-4 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-display font-black tracking-tighter text-foreground uppercase italic">
            Midnight <span className="text-primary">Spur</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <Button variant="default" className="rounded-none px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            BOOK VIP
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-display text-foreground hover:text-primary transition-colors uppercase italic"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-primary font-bold rounded-none">BOOK VIP</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;