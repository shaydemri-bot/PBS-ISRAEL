'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  delay?: number;
}

/**
 * Bento Grid Layout System
 * Responsive grid: 1 column (mobile) → 2 columns (tablet) → 4 columns (desktop)
 */
export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10',
        'auto-rows-[minmax(300px,auto)]',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Bento Card Component
 * Theme-aware card with entrance animations
 *
 * ARCHITECT: Glassmorphism with backdrop blur
 * ENGINEER: Thick borders (4px), high contrast
 * MINIMALIST: Ultra-thin borders (0.5px), no shadows
 */
export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  delay = 0,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(
        // Base layout
        'relative overflow-hidden rounded-3xl p-8 md:p-10',
        // Responsive spanning
        colSpan === 2 && 'md:col-span-2',
        colSpan === 3 && 'lg:col-span-3',
        colSpan === 4 && 'lg:col-span-4',
        rowSpan === 2 && 'md:row-span-2',
        // ARCHITECT Theme (dark): Glassmorphism
        'dark:bg-glass-bg dark:backdrop-blur-xl dark:border-glass-border',
        'dark:shadow-2xl dark:shadow-black/20',
        // ENGINEER Theme: Thick borders, solid background
        'engineer:bg-white engineer:border-4 engineer:border-accent/20',
        'engineer:shadow-lg engineer:shadow-accent/10',
        // MINIMALIST Theme: Ultra-thin borders, minimal styling
        'minimalist:bg-white minimalist:border minimalist:border-black/10',
        'minimalist:shadow-sm',
        // Common
        'border transition-all duration-300',
        'hover:shadow-2xl hover:border-accent/30',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
