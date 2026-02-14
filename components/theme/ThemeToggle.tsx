'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const themes = [
  { value: 'dark', label: 'אדריכל', icon: '🏛️', description: 'Luxury & Premium' },
  { value: 'engineer', label: 'מהנדס', icon: '⚙️', description: 'Technical & Industrial' },
  { value: 'minimalist', label: 'מינימליסט', icon: '◻️', description: 'Swiss & Clean' }
];

/**
 * Theme Toggle Component
 * Fixed position (bottom-left) 3-way switcher for PBS Israel themes
 */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 flex flex-col gap-1.5 md:gap-2"
      dir="rtl"
    >
      {themes.map((t) => (
        <motion.button
          key={t.value}
          onClick={() => setTheme(t.value)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            relative overflow-hidden rounded-lg md:rounded-xl px-3 py-2 md:px-4 md:py-3
            backdrop-blur-xl border transition-all duration-300
            ${theme === t.value
              ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20'
              : 'bg-glass-bg border-glass-border text-foreground hover:border-accent/50'
            }
          `}
          aria-label={`Switch to ${t.label} theme`}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-base md:text-xl">{t.icon}</span>
            <div className="text-right">
              <div className="text-xs md:text-sm font-semibold">{t.label}</div>
              <div className="hidden md:block text-xs opacity-70">{t.description}</div>
            </div>
          </div>

          {theme === t.value && (
            <motion.div
              layoutId="activeTheme"
              className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 -z-10"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      ))}

      {/* Theme indicator dot */}
      <div className="flex justify-center gap-1 mt-1 md:mt-2">
        {themes.map((t) => (
          <div
            key={t.value}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              theme === t.value ? 'bg-accent w-4 md:w-6' : 'bg-glass-border'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
