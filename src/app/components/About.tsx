import React from 'react';
import { SectionLabel } from './SectionLabel';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="w-full py-24 font-body">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>About Us</SectionLabel>
        
        <motion.h2 
          className="font-headline text-4xl md:text-5xl text-primary mb-12 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Strategy first. Execution second. Results always.
        </motion.h2>

        <motion.p 
          className="text-lg text-muted-foreground max-w-4xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We partner with ambitious brands to build measurable growth engines. By combining paid media, search visibility, brand positioning, and conversion optimization, we create marketing systems that scale predictably. Every decision is backed by data. Every campaign is built for performance.
        </motion.p>
      </div>
    </section>
  );
}