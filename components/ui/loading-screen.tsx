'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Premium Cinematic Splash Screen - CORE BRAND EXPERIENCE
 * PBS Israel + Xypex Global logos side-by-side with smooth fade-in
 * Duration: 3 seconds (DO NOT REDUCE - this is intentional!)
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
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)',
          }}
        >
          {/* Animated gradient overlay - Smooth ambient motion */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          {/* Dual Logo Container - Side by Side */}
          <div className="relative z-10 px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
            >
              {/* PBS Israel Logo - Text Style */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider leading-none">
                  PBS
                  <span className="block text-xl md:text-2xl lg:text-3xl font-light text-slate-300 mt-2 tracking-[0.2em]">
                    ISRAEL
                  </span>
                </h1>
              </motion.div>

              {/* Divider - Vertical on desktop, horizontal on mobile */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-amber-400 to-transparent"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="md:hidden h-px w-48 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
              />

              {/* Xypex Global Logo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider leading-none">
                  XYPEX
                  <span className="block text-xl md:text-2xl lg:text-3xl font-light text-slate-300 mt-2 tracking-[0.2em]">
                    GLOBAL
                  </span>
                </h1>
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-center mt-12"
            >
              <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase">
                Crystalline Waterproofing Technology
              </p>
            </motion.div>

            {/* Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-0.5 w-64 md:w-96 mx-auto mt-8 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
            />
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
