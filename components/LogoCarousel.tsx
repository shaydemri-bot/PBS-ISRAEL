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
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#f59e0b] mb-3">
            שותפים אסטרטגיים
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#003366]">
            מובילי התשתיות בישראל
          </h2>
        </motion.div>

        {/* Static Wall of Partners - All Logos Visible at Once - ENLARGED */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center justify-center p-10 bg-white rounded-lg border-2 border-slate-200 hover:border-[#003366] hover:shadow-2xl transition-all duration-300 group"
              style={{ minHeight: 200 }}
            >
              {/* Extra Large Logo Display - FULL COLOR, h-32 = 128px (was h-28) */}
              <div className="relative w-full h-32 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
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
        <div className="text-center mt-12">
          <motion.a
            href="/projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#003366] text-[#003366] font-bold transition-all hover:bg-[#003366] hover:text-white"
          >
            <span>צפה בפרויקטים המשותפים</span>
            <span>←</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
