import React from 'react';
import { motion } from 'motion/react';

const transition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] };

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
