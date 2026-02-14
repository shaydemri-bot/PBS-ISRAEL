'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Strategic Partners Wall - Static Display
 * All 8 Israeli Infrastructure Leaders Visible at Once
 * FULL COLOR, LARGE SIZE - Professional "Wall of Partners"
 */

const companies = [
  {
    name: 'ELECTRA INFRASTRUCTURE',
    nameHe: 'אלקטרה תשתיות',
    logo: '/images/logo/electrainf.png',
  },
  {
    name: 'DENYA CEBUS',
    nameHe: 'דניה סיבוס',
    logo: '/images/logo/Denya.png',
  },
  {
    name: 'ETZ HASHAKED',
    nameHe: 'עץ השקד',
    logo: '/images/logo/etzhashaked.png',
  },
  {
    name: 'STRUCTURA',
    nameHe: 'סטרקטורה',
    logo: '/images/logo/structura.png',
  },
  {
    name: 'CEMENTCAL',
    nameHe: 'צמנטכל',
    logo: '/images/logo/צמנטכל.Png',
  },
  {
    name: 'GABBAY GROUP',
    nameHe: 'קבוצת גבאי',
    logo: '/images/logo/קבוצתגבאי.png',
  },
  {
    name: 'ARIEL GABBAY',
    nameHe: 'אריאל גבאי',
    logo: '/images/logo/arielgabay.png',
  },
  {
    name: 'GEODENYA',
    nameHe: 'גיאודניה',
    logo: '/images/logo/geodenya.png',
  },
];

export default function LogoCarousel() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            השותפים שלנו
          </h2>
        </motion.div>

        {/* Static Wall of Partners - Compact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.3 }}
              className="flex items-center justify-center p-5 bg-white rounded-lg border border-slate-200 hover:border-[#003366] hover:shadow-xl transition-all duration-300 group"
              style={{ minHeight: 100 }}
            >
              {/* Compact Logo Display */}
              <div className="relative w-full h-16 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                <Image
                  src={company.logo}
                  alt={`${company.nameHe} - ${company.name}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  priority={index < 4}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: View Projects Button */}
        <div className="text-center mt-6">
          <motion.a
            href="/projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 border border-[#003366] text-[#003366] text-xs font-bold transition-all hover:bg-[#003366] hover:text-white"
          >
            <span>צפה בפרויקטים המשותפים</span>
            <span>←</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
