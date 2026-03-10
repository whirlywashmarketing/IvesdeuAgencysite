import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 text-cta mb-2 ${className}`}>
      <span className="w-6 h-px bg-cta shrink-0" aria-hidden />
      <span
        className="text-[0.72rem] uppercase tracking-[0.18em] font-medium"
        style={{ letterSpacing: '0.18em' }}
      >
        {children}
      </span>
    </div>
  );
}
