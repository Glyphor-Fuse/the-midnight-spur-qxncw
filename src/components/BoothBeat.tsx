import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const concerts = [
  { id: 1, band: "Dusty Spur", status: "Full", date: "OCT 24", availability: [false, false, false, false, true, false] },
  { id: 2, band: "Silverado", status: "Limited", date: "OCT 25", availability: [true, false, true, false, true, true] },
  { id: 3, band: "Wild West", status: "Available", date: "OCT 26", availability: [true, true, true, true, true, true] },
];

const booths = [
  { id: 0, name: "Longhorn VIP", pos: { x: 20, y: 30 }, capacity: 8 },
  { id: 1, name: "The Stables", pos: { x: 60, y: 30 }, capacity: 6 },
  { id: 2, name: "Desert Rose", pos: { x: 40, y: 55 }, capacity: 4 },
  { id: 3, name: "Sunset Booth", pos: { x: 80, y: 55 }, capacity: 10 },
  { id: 4, name: "Bar Side 1", pos: { x: 25, y: 80 }, capacity: 4 },
  { id: 5, name: "Bar Side 2", pos: { x: 70, y: 80 }, capacity: 4 },
];

const BoothBeat = () => {
  const [activeConcert, setActiveConcert] = useState(concerts[0]);
  const [hoveredBooth, setHoveredBooth] = useState<any>(null);

  return (
    <section id="booth-beat" className="py-32 bg-muted relative overflow-hidden">
      <div className="absolute top-10 left-10 pointer-events-none opacity-[0.03] select-none font-display font-black text-[15rem] leading-none uppercase italic">
        VIP
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-black text-foreground uppercase italic mb-8 leading-[0.9]">
                Booth <span className="text-primary">&</span> Beat
              </h2>
              <p className="text-muted-foreground text-xl font-light mb-12">
                A premium vantage point for the ultimate listener. Choose your date 
                to see real-time availability in our main hall.
              </p>
            </div>

            <div className="space-y-6">
              {concerts.map((c) => (
                <motion.div
                  key={c.id}
                  onClick={() => setActiveConcert(c)}
                  className={`p-8 border rounded-none cursor-pointer transition-all duration-500 ${
                    activeConcert.id === c.id 
                    ? 'border-primary bg-background shadow-[0_0_40px_rgba(69,113,217,0.15)] scale-[1.02]' 
                    : 'border-border/50 bg-card/40 hover:bg-card hover:border-border'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-2">{c.date}</p>
                      <h3 className="text-3xl font-display font-bold uppercase italic text-foreground">{c.band}</h3>
                    </div>
                    <Badge variant={c.status === 'Full' ? 'destructive' : 'outline'} className="uppercase rounded-none px-3 py-1 font-bold tracking-widest border-border">
                      {c.status}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-10 bg-background border border-border rounded-none mt-12 shadow-2xl">
              <h4 className="flex items-center text-xl font-display font-bold mb-6 uppercase tracking-tight italic">
                <Info size={20} className="mr-3 text-primary" /> THE VIP PERKS
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-muted-foreground text-sm">
                <li className="flex items-center"><Check size={16} className="mr-2 text-primary" /> Dedicated Server</li>
                <li className="flex items-center"><Check size={16} className="mr-2 text-primary" /> Prime Sightlines</li>
                <li className="flex items-center"><Check size={16} className="mr-2 text-primary" /> Private Entry</li>
                <li className="flex items-center"><Check size={16} className="mr-2 text-primary" /> Express Bar</li>
              </ul>
              <Button className="w-full mt-10 bg-primary hover:bg-primary/90 rounded-none uppercase font-bold tracking-[0.2em] h-16 shadow-lg shadow-primary/20">
                Reserve Selected Booth
              </Button>
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="relative aspect-square w-full bg-background border-2 border-border p-10 shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--card)_0%,_transparent_100%)] opacity-40" />
              
              <div className="relative h-full w-full flex items-center justify-center border border-border/20">
                <div className="absolute top-0 w-3/4 h-24 bg-card border-b-4 border-primary/40 flex items-center justify-center">
                  <span className="text-sm uppercase font-bold tracking-[0.8em] text-muted-foreground">STAGE</span>
                </div>

                {booths.map((booth, idx) => {
                  const isAvailable = activeConcert.availability[idx];
                  return (
                    <motion.div
                      key={booth.id}
                      onHoverStart={() => isAvailable && setHoveredBooth(booth)}
                      onHoverEnd={() => setHoveredBooth(null)}
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: 1,
                        x: `${booth.pos.x - 50}%`,
                        y: `${booth.pos.y - 50}%`,
                      }}
                      className={`absolute w-16 h-16 rounded-none flex items-center justify-center cursor-pointer transition-all duration-500 border-2 ${
                        isAvailable 
                        ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(69,113,217,0.2)] hover:bg-primary hover:scale-110' 
                        : 'bg-destructive/5 border-destructive/20 grayscale pointer-events-none'
                      }`}
                    >
                      <Users size={24} className={isAvailable ? 'text-primary' : 'text-destructive/20'} />
                      
                      {hoveredBooth?.id === booth.id && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-20 left-1/2 -translate-x-1/2 bg-card border border-primary/50 p-4 shadow-2xl whitespace-nowrap z-50 pointer-events-none"
                        >
                          <p className="text-lg font-display font-bold uppercase italic text-foreground">{booth.name}</p>
                          <div className="flex items-center justify-between gap-4 mt-1">
                            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Seats {booth.capacity}</p>
                            <p className="text-[10px] font-black text-primary uppercase">Available</p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}

                <div className="absolute bottom-6 w-full text-center">
                   <span className="text-xs uppercase font-bold tracking-[0.4em] text-muted-foreground/30">Whiskey Bar & Lounge Area</span>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center text-xs font-bold tracking-widest uppercase">
                <div className="w-4 h-4 bg-primary rounded-none mr-3 shadow-[0_0_10px_rgba(69,113,217,0.4)]" />
                <span className="text-foreground">Available Booth</span>
              </div>
              <div className="flex items-center text-xs font-bold tracking-widest uppercase">
                <div className="w-4 h-4 bg-destructive/20 rounded-none mr-3" />
                <span className="text-muted-foreground">Reserved</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BoothBeat;