import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "The Dress Code Policy",
    a: "We favor 'Desert Chic'. Think polished leather, sharp hats, and denim. No athletic wear or flip-flops allowed after 8 PM. Dress as if the evening matters."
  },
  {
    q: "Ticket Reservations",
    a: "Advance booking is highly encouraged. Nightly performances often reach capacity by sunset. Walk-ins are subject to a variable cover charge based on the evening's act."
  },
  {
    q: "Age Requirements",
    a: "The Midnight Spur is strictly 21+ after 8:00 PM. Identification is required at all times. During daytime BBQ events, we welcome pioneers of all ages."
  },
  {
    q: "VIP Booth Commitments",
    a: "Reservations require a food and beverage minimum spend which varies by performance and booth size. All VIP bookings include expedited entry and a dedicated server."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-32 bg-background relative">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-black text-foreground uppercase italic mb-8">
            The <span className="text-primary">Fine Print</span>
          </h2>
          <p className="text-muted-foreground text-xl font-light">Everything you need to know before the first note hits.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-6">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 bg-card px-8 rounded-none overflow-hidden transition-all hover:border-primary/50">
              <AccordionTrigger className="text-left font-display text-2xl uppercase italic hover:no-underline py-8">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8 font-light border-t border-border/20 pt-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;