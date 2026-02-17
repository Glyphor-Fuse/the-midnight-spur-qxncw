import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 pt-32 pb-16 relative">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          <div className="md:col-span-2">
            <h2 className="text-5xl font-display font-black text-foreground uppercase italic mb-8">
              Midnight <span className="text-primary">Spur</span>
            </h2>
            <p className="text-muted-foreground text-xl font-light max-w-md mb-10 leading-relaxed">
              Austin's definitive music and dance experience. A temple of sound, spirits, and the eternal Texas spirit.
            </p>
            <div className="flex space-x-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-none border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-foreground hover:border-primary transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Inquiries</h4>
            <ul className="space-y-6 text-muted-foreground text-lg">
              <li className="flex items-start">
                <MapPin size={20} className="mr-4 text-primary shrink-0 mt-1" />
                <span className="font-light">606 E 7th St,<br />Austin, TX 78701</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-4 text-primary shrink-0" />
                <span className="font-light">(512) 555-7787</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-4 text-primary shrink-0" />
                <span className="font-light">concierge@midnightspur.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Doors</h4>
            <ul className="space-y-4 text-muted-foreground font-light text-lg">
              <li className="flex justify-between border-b border-border/30 pb-2">
                <span>Weekdays</span>
                <span className="text-foreground font-bold">4PM - 12AM</span>
              </li>
              <li className="flex justify-between border-b border-border/30 pb-2">
                <span>Fri - Sat</span>
                <span className="text-foreground font-bold">4PM - 2AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-foreground font-bold">11AM - 10PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-16 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-muted-foreground font-bold tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} THE MIDNIGHT SPUR AUSTIN
          </p>
          <div className="flex space-x-10 text-xs text-muted-foreground font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Media Kit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;