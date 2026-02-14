'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/**
 * Premium Cinematic Splash Screen - CORE BRAND EXPERIENCE
 * PBS Israel + Xypex Global logos with hero-bg.jpg background
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

          {/* Professional Logo Hierarchy - PBS Israel Dominant (Brightest Element) */}
          <div className="relative z-10 px-6 translate-y-24">
            {/* Official Xypex Global Logo - Top Center (Secondary) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-8"
            >
              <div className="text-3xl md:text-4xl font-bold text-white/60 tracking-wider leading-none" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.9)' }}>
                XYPEX
              </div>
              <div className="text-xs md:text-sm font-light text-amber-400/80 tracking-[0.4em] uppercase mt-1" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                GLOBAL
              </div>
            </motion.div>

            {/* PBS Israel - ABSOLUTELY DOMINANT (Brightest Element) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-center mb-12"
            >
              <h1 className="text-9xl md:text-[10rem] lg:text-[14rem] font-black text-white tracking-tight leading-none mb-6" style={{ textShadow: '3px 3px 15px rgba(0,0,0,0.95), 0 0 30px rgba(255,255,255,0.3)' }}>
                PBS
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-amber-400 tracking-[0.3em] uppercase" style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.9), 0 0 20px rgba(251,191,36,0.4)' }}>
                ISRAEL
              </h2>
              <div className="h-1.5 w-[32rem] max-w-7xl mx-auto mt-10 bg-gradient-to-r from-transparent via-amber-400 to-transparent" style={{ filter: 'drop-shadow(0 0 8px rgba(251,191,36,0.6))' }} />
            </motion.div>

            {/* Partnership Badge - Below PBS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="text-lg md:text-xl font-black text-white tracking-[0.4em] uppercase" style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.95)', fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.25em' }}>
                XYPEX PBS ISRAEL
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-center mt-12"
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
