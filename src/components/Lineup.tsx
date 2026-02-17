import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const lineup = [
  {
    id: 1,
    artist: "The Dusty Spur",
    date: "TONIGHT",
    genre: "Outlaw Country",
    image: "/images/concert-1.jpg",
    time: "9:00 PM",
    soldOut: false,
  },
  {
    id: 2,
    artist: "Midnight Ramblers",
    date: "FRIDAY",
    genre: "Americana Rock",
    image: "/images/performer-portrait.jpg",
    time: "10:00 PM",
    soldOut: false,
  },
  {
    id: 3,
    artist: "Sierra Moon & Band",
    date: "SATURDAY",
    genre: "Modern Folk",
    image: "/images/dance-floor.jpg",
    time: "8:30 PM",
    soldOut: true,
  },
];

const Lineup = () => {
  return (
    <section id="lineup" className="py-32 bg-card relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-display font-black text-foreground uppercase italic mb-6">
              Nightly <span className="text-primary">Legends</span>
            </h2>
            <p className="text-muted-foreground text-xl font-light">
              Our curated stage hosts the finest touring acts and local legends. 
              The sound of the high desert, live in the heart of Austin.
            </p>
          </div>
          <Button variant="link" className="text-primary p-0 h-auto text-lg font-bold uppercase tracking-widest hover:text-accent transition-colors">
            Full Schedule →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {lineup.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background border-border overflow-hidden group hover:border-primary transition-all duration-500 shadow-2xl rounded-none">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.artist}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className={`${event.soldOut ? 'bg-destructive' : 'bg-primary'} uppercase font-bold tracking-[0.2em] rounded-none py-1.5 px-3 border-none`}>
                      {event.soldOut ? 'Sold Out' : event.date}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-1">{event.genre}</p>
                    <h3 className="text-3xl font-display font-bold text-foreground uppercase italic leading-tight">
                      {event.artist}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center text-sm text-muted-foreground mb-8">
                    <Calendar size={16} className="mr-2 text-primary" />
                    <span className="font-bold tracking-widest">{event.time}</span>
                  </div>
                  <Button 
                    className="w-full rounded-none h-14 text-sm font-bold uppercase tracking-widest" 
                    variant={event.soldOut ? "secondary" : "default"}
                    disabled={event.soldOut}
                  >
                    {event.soldOut ? 'Check Resale' : 'Get Tickets'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lineup;