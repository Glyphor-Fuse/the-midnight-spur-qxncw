import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const menuItems = {
  whiskey: [
    { name: "Single Barrel Select", desc: "Private bottling Austin bourbon, aged 8 years.", price: "$18" },
    { name: "The Midnight Mule", desc: "Vodka, prickly pear, ginger beer, mint.", price: "$15" },
    { name: "Sloe Gin Fizz", desc: "Classic sloe gin, lemon, soda, egg white.", price: "$14" },
    { name: "Smoked Old Fashioned", desc: "Woodford Reserve, maple syrup, cedar smoke.", price: "$16" },
  ],
  bites: [
    { name: "Wagyu Sliders", desc: "Brioche, onion jam, blue cheese crumbles.", price: "$20" },
    { name: "Venison Carpaccio", desc: "Truffle oil, capers, shaved parmesan.", price: "$22" },
    { name: "Lobster Mac", desc: "Gruyère, smoked paprika, Maine lobster.", price: "$24" },
    { name: "Lone Star Frites", desc: "Rosemary salt, roasted garlic aioli.", price: "$12" },
  ]
};

const Menu = () => {
  return (
    <section id="menu" className="py-32 bg-card relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-black text-foreground uppercase italic mb-8">
            The <span className="text-primary">Provision</span>
          </h2>
          <p className="text-muted-foreground text-xl font-light">
            A refined menu of high-country provisions and artisan spirits. 
            Crafted for the discerning palate of the modern pioneer.
          </p>
        </div>

        <Tabs defaultValue="whiskey" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-background h-20 p-2 rounded-none mb-20 border border-border">
            <TabsTrigger value="whiskey" className="rounded-none text-xl font-display uppercase italic data-[state=active]:bg-primary data-[state=active]:text-foreground">Fine Spirits</TabsTrigger>
            <TabsTrigger value="bites" className="rounded-none text-xl font-display uppercase italic data-[state=active]:bg-primary data-[state=active]:text-foreground">Small Plates</TabsTrigger>
          </TabsList>
          
          {Object.entries(menuItems).map(([key, items]) => (
            <TabsContent key={key} value={key} className="space-y-12 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                {items.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-start border-b border-border/30 pb-8 group"
                  >
                    <div className="max-w-[75%]">
                      <h4 className="text-2xl font-display font-bold uppercase italic text-foreground mb-2 group-hover:text-primary transition-colors">{item.name}</h4>
                      <p className="text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                    </div>
                    <span className="text-xl font-display font-black text-primary italic pt-1">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-32 flex justify-center">
          <Button size="lg" className="bg-background text-foreground border-2 border-primary/40 px-16 h-18 rounded-none font-bold uppercase tracking-[0.3em] hover:bg-primary hover:text-foreground transition-all shadow-xl">
            VIEW FULL CELLAR
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;