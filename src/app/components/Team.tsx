import React from 'react';
import { SectionLabel } from './SectionLabel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Team() {
  const team = [
    {
      name: 'Mark Deutschmann',
      title: 'Co-Founder',
      role: 'Performance Analyst',
      quote: 'Revenue growth requires precision, not guesswork.',
      image: '/mark-deutschmann.png'
    },
    {
      name: 'Otto Ives',
      title: 'Co-Founder',
      role: 'SEO Strategist',
      quote: 'Visibility is earned through technical excellence.',
      image: '/otto-ives.png'
    }
  ];

  return (
    <section className="w-full py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <SectionLabel>Team</SectionLabel>
          <h2 className="text-5xl font-semibold text-primary">Your growth partners.</h2>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 justify-center">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="flex-shrink-0 w-[350px] bg-white border border-border rounded-2xl p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <ImageWithFallback 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
                />
                <p className="text-lg italic text-[#666666] mb-4 text-center">"{member.quote}"</p>
                <h3 className="font-semibold text-primary text-center">{member.name}</h3>
                <p className="text-sm text-[#666666] text-center">{member.title}</p>
                <p className="text-sm text-[#666666] text-center">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}