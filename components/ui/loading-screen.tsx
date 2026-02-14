'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/**
 * Premium Cinematic Splash Screen - STRICT HORIZONTAL PAIRS
 * ROW 1: P.B.S ISRAEL (flex-row, gap-3, horizontal)
 * ROW 2: GOBI 42 (flex-row, gap-3, horizontal)
 * Container: flex-col gap-6 to stack the two rows vertically
 * Duration: 3 seconds (DO NOT REDUCE - this is intentional!)
 * Rollback: loading-screen.STABLE_OLD.tsx contains previous version
 */
export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure component is mounted
    setIsMounted(true);

    // Show splash screen for full 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Prevent flash during hydration
  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center w-screen h-screen"
        >
          {/* Shafdan Background Image - CONTAIN Strategy for Full Project Visibility */}
          <div className="absolute inset-0 w-full h-full bg-slate-900">
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: 'url(/images/shafdan.jpeg)',
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(1.15) contrast(1.1) saturate(1.3)',
              }}
            />
            {/* Subtle dark overlay for logo visibility */}
            <div className="absolute inset-0 w-full h-full bg-black/30" />
          </div>

          {/* STRICT LTR HORIZONTAL LAYOUT - FORCE LEFT-TO-RIGHT */}
          <div dir="ltr" className="relative z-10 px-6 translate-y-20 flex flex-col items-center gap-6">
            {/* ROW 1: P.B.S ISRAEL (STRICT HORIZONTAL - NO STACKING) */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex flex-row items-baseline justify-center gap-2">
                <span className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none whitespace-nowrap" style={{ textShadow: '3px 3px 15px rgba(0,0,0,0.95), 0 0 30px rgba(255,255,255,0.3)' }}>
                  P.B.S
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-light text-amber-400 tracking-tight leading-none uppercase whitespace-nowrap" style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.9), 0 0 20px rgba(251,191,36,0.4)' }}>
                  ISRAEL
                </span>
              </div>
            </motion.div>

            {/* ROW 2: GOBI 42 (STRICT HORIZONTAL - NO STACKING) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex flex-row items-baseline justify-center gap-2">
                <span className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none whitespace-nowrap" style={{ textShadow: '3px 3px 15px rgba(0,0,0,0.95), 0 0 30px rgba(255,255,255,0.3)' }}>
                  GOBI
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-light text-amber-400 tracking-tight leading-none whitespace-nowrap" style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.9), 0 0 20px rgba(251,191,36,0.4)' }}>
                  42
                </span>
              </div>
            </motion.div>

            {/* Decorative Line */}
            <div className="h-1.5 w-96 max-w-full mx-auto mt-6 bg-gradient-to-r from-transparent via-amber-400 to-transparent" style={{ filter: 'drop-shadow(0 0 8px rgba(251,191,36,0.6))' }} />

            {/* Partnership Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-6"
            >
              <div className="text-base md:text-lg font-black text-white tracking-[0.25em] uppercase" style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.95)' }}>
                PBS ISRAEL GOBI 42
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-center mt-6"
            >
              <p className="text-slate-300 text-xs md:text-sm tracking-[0.35em] uppercase" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
                טכנולוגיית איטום גבישי
              </p>
            </motion.div>
          </div>

          {/* Pulsing dots loading indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 rounded-full bg-amber-400"
              />
            ))}
          </motion.div>

          {/* Loading percentage (aesthetic only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.5, times: [0, 0.2, 0.8, 1] }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-400 text-sm font-mono tracking-wider"
          >
            Loading...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
