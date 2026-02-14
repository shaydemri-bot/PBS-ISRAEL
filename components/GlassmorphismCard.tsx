/**
 * 🏛️ Architect - Glassmorphism Card Component
 * Standard card pattern with perfect legibility
 */

import { ReactNode } from 'react';

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function GlassmorphismCard({
  children,
  className = '',
  padding = 'lg',
}: GlassmorphismCardProps) {
  const paddingClasses = {
    sm: 'p-6 md:p-8',
    md: 'p-8 md:p-10',
    lg: 'p-10 md:p-12',
    xl: 'p-12 md:p-16',
  };

  return (
    <div
      className={`
        backdrop-blur-xl bg-white/95
        rounded-2xl
        ${paddingClasses[padding]}
        shadow-2xl
        border border-white/50
        ${className}
      `}
    >
      {children}
    </div>
  );
}
