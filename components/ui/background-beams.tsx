'use client';

import { motion } from 'framer-motion';

/**
 * Background Beams Component
 * Animated light beams effect for ARCHITECT theme
 * Inspired by Aceternity UI
 */
export function BackgroundBeams() {
  const beams = [
    { x: '20%', delay: 0, duration: 8 },
    { x: '40%', delay: 1, duration: 10 },
    { x: '60%', delay: 2, duration: 9 },
    { x: '80%', delay: 1.5, duration: 11 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <filter id="beam-blur">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {beams.map((beam, index) => (
          <motion.line
            key={index}
            x1={beam.x}
            y1="-20%"
            x2={beam.x}
            y2="120%"
            stroke="url(#beam-gradient)"
            strokeWidth="2"
            filter="url(#beam-blur)"
            className="text-accent"
            initial={{ opacity: 0, y1: '-50%', y2: '50%' }}
            animate={{
              opacity: [0, 0.8, 0],
              y1: ['-50%', '-20%', '10%'],
              y2: ['50%', '80%', '120%'],
            }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
