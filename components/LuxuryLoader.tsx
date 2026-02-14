'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LuxuryLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Exactly 3000ms (3 seconds) as specified
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -100,
            transition: {
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96] // Cubic-bezier for premium feel
            }
          }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
          <div className="relative">
            {/* Logo with Sophisticated Entry */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="relative"
            >
              {/* PBS Israel Logo */}
              <div className="relative w-64 h-32">
                <Image
                  src="/images/logo.jpg"
                  alt="PBS Israel"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Sophisticated Shimmer Effect */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{
                  x: ["100%", "200%"],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.3
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                style={{
                  filter: "blur(15px)",
                  mixBlendMode: "overlay"
                }}
              />
            </motion.div>

            {/* Elegant Loading Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex justify-center"
            >
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut"
                    }}
                    className="w-2 h-2 bg-[#003366] rounded-full"
                  />
                ))}
              </div>
            </motion.div>

            {/* Subtle Brand Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-center text-sm text-[#64748b] tracking-[0.2em] uppercase font-light"
            >
              Engineering Excellence
            </motion.p>
          </div>

          {/* Grain Texture Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
