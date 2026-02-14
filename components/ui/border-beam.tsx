'use client';

import { motion } from 'framer-motion';

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

/**
 * Border Beam Component
 * Animated glowing border effect for ARCHITECT theme
 * Inspired by Magic UI
 */
export function BorderBeam({
  className = '',
  size = 200,
  duration = 10,
  borderWidth = 2,
  colorFrom = '#f59e0b',
  colorTo = '#fbbf24',
  delay = 0,
}: BorderBeamProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
          maskImage: `radial-gradient(circle ${size}px at var(--x) var(--y), black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle ${size}px at var(--x) var(--y), black, transparent)`,
        }}
        animate={{
          '--x': ['0%', '100%', '0%'],
          '--y': ['0%', '100%', '0%'],
        } as any}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Inner border to hide overflow */}
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          padding: `${borderWidth}px`,
          background: 'transparent',
          WebkitMask: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
    </div>
  );
}
