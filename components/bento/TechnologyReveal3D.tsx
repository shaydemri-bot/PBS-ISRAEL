'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stages = [
  {
    number: '01',
    title: 'חדירה',
    titleEn: 'PENETRATION',
    description: 'הטכנולוגיה הגבישית חודרת עמוק לתוך המבנה הנקבובי של הבטון',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'קריסטליזציה',
    titleEn: 'CRYSTALLIZATION',
    description: 'תגובה כימית עם הלחות והמינרלים יוצרת גבישים בלתי מסיסים',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    title: 'איטום קבוע',
    titleEn: 'PERMANENT SEAL',
    description: 'הגבישים חוסמים את מעברי המים ויוצרים איטום קבוע ובלתי הפיך',
    color: 'from-emerald-500 to-teal-500',
  },
];

/**
 * Technology Reveal 3D Component
 * Interactive 3-stage Xypex crystallization process
 * Click dots to navigate between stages
 */
export default function TechnologyReveal3D() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          טכנולוגיית <span className="text-accent">Xypex</span>
        </h3>
        <p className="text-slate opacity-70">תהליך איטום גבישי מתקדם</p>
      </div>

      {/* Stage Display */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute inset-0"
          >
            {/* Stage Number */}
            <div className="absolute top-0 right-0 opacity-10">
              <span className="text-[12rem] font-black leading-none text-accent">
                {stages[activeStage].number}
              </span>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center">
              {/* English Title */}
              <div className="text-sm font-mono tracking-widest text-accent mb-2">
                {stages[activeStage].titleEn}
              </div>

              {/* Hebrew Title */}
              <h4 className="text-5xl md:text-6xl font-black text-foreground mb-6">
                {stages[activeStage].title}
              </h4>

              {/* Description */}
              <p className="text-xl md:text-2xl text-slate-dark leading-relaxed max-w-md">
                {stages[activeStage].description}
              </p>

              {/* Animated gradient background */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className={`absolute -bottom-10 -left-10 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br ${stages[activeStage].color}`}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {stages.map((stage, index) => (
          <button
            key={index}
            onClick={() => setActiveStage(index)}
            className={`group relative transition-all ${
              activeStage === index ? 'w-16' : 'w-4'
            }`}
            aria-label={`Go to stage ${index + 1}`}
          >
            <div
              className={`h-4 rounded-full transition-all ${
                activeStage === index
                  ? 'bg-accent'
                  : 'bg-glass-border group-hover:bg-accent/50'
              }`}
            />
            {activeStage === index && (
              <motion.div
                layoutId="activeDot"
                className="absolute inset-0 bg-accent/20 rounded-full blur-md"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
