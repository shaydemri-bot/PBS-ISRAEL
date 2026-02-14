'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/theme/ThemeToggle';
import HeroClassic from '@/components/HeroClassic';
import LoadingScreen from '@/components/ui/loading-screen';
import LogoCarousel from '@/components/LogoCarousel';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Homepage - Togal.ai Inspired Premium Design
 * Clean, high-end engineering authority
 */
export default function Home() {
  return (
    <>
      {/* Cinematic Splash Screen */}
      <LoadingScreen />

      <div dir="rtl" className="min-h-screen bg-white">
        <Header />
        <ThemeToggle />

        {/* 1. HERO SECTION - Full Screen with Live Swapper */}
        <HeroClassic />

        {/* 2. TRUSTED BY - Infinite Scrolling Logos */}
        <LogoCarousel />

        {/* 3. TECHNOLOGY - Brief Visual Explanation with Background */}
        <section className="relative py-20 md:py-24 px-6 overflow-hidden">
          {/* Shafdan Project Background - Wider View, No Over-Zoom */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 w-full h-full bg-shafdan-mobile md:bg-shafdan-desktop"
              style={{
                backgroundImage: 'url(/images/shafdan.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(1.15) contrast(1.1) saturate(1.3)',
              }}
            />
            {/* Ultra-minimal overlay - Show full project scale (20% only) */}
            <div className="absolute inset-0 bg-white/20" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#f59e0b] mb-3" style={{ textShadow: '0 2px 8px rgba(255,255,255,0.9)' }}>
                טכנולוגיית גבישים קטליטית
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#003366] mb-4 leading-tight" style={{ textShadow: '0 2px 12px rgba(255,255,255,0.95)' }}>
                איטום מבנים מורכבים<br />בטכנולוגיה גבישית
              </h2>
              <p className="text-lg md:text-xl text-[#003366] leading-relaxed max-w-2xl mx-auto font-semibold" style={{ textShadow: '0 1px 8px rgba(255,255,255,0.9)' }}>
                הגנה קבועה לבטון באמצעות חדירה גבישית קטליטית. המערכת אוטמת סדקים עד 0.5 מ"מ באופן אוטונומי, ומספקת איטום לכל החיים ללא ממברנות חיצוניות.
              </p>
            </motion.div>

            {/* Technology Visual - 3 Step Process */}
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: '01',
                  title: 'חדירה',
                  desc: 'גבישי Xypex חודרים עד 90 ס"מ למטריצת הבטון',
                },
                {
                  step: '02',
                  title: 'קריסטליזציה',
                  desc: 'תגובה עם סידן הידרוקסיד ליצירת גבישים בלתי מסיסים',
                },
                {
                  step: '03',
                  title: 'איטום עצמי',
                  desc: 'ריפוי אוטונומי של סדקים בנוכחות מים',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center group"
                >
                  <div className="text-6xl font-black text-[#003366]/20 group-hover:text-[#f59e0b]/40 transition-colors mb-4" style={{ textShadow: '0 2px 8px rgba(255,255,255,0.8)' }}>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-3" style={{ textShadow: '0 1px 6px rgba(255,255,255,0.9)' }}>
                    {item.title}
                  </h3>
                  <p className="text-[#003366] leading-relaxed font-medium" style={{ textShadow: '0 1px 6px rgba(255,255,255,0.85)' }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CORE SOLUTIONS - 3 Clean Columns with Background Images */}
        <section className="py-20 md:py-24 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#f59e0b] mb-3">
                פתרונות ליבה הנדסיים
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#003366] mb-4 leading-tight">
                מערכות מהנדסות<br />לפי יישום
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                פתרונות איטום מותאמים לתשתיות לאומיות, בנייה למגורים ופרויקטים תעשייתיים.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: 'תשתיות לאומיות',
                  desc: 'מנהרות, מערכות רכבת תחתית, טיפול במים',
                  applications: ['מפעל ההתפלה שורק B', 'הקו האדום תל אביב', 'המוביל הארצי'],
                  bgImage: '/images/WhatsApp Image 2026-01-21 at 13.04.40.jpeg',
                  icon: <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>,
                },
                {
                  title: 'בנייה למגורים',
                  desc: 'יסודות, מרתפים, קירות תומכים',
                  applications: ['חניונים תת-קרקעיים', 'מגדלי מגורים', 'בריכות שחייה'],
                  bgImage: '/images/WhatsApp Image 2026-01-21 at 14.47.51.jpeg',
                  icon: <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>,
                },
                {
                  title: 'תעשייה ונמלים',
                  desc: 'מפעלים, מתקני אחסון, נמלים',
                  applications: ['נמל מפרץ חיפה', 'מפעלים כימיים', 'טיפול בשפכים'],
                  bgImage: '/images/WhatsApp Image 2026-02-13 at 22.02.11.jpeg',
                  icon: <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>,
                },
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative overflow-hidden border border-[#003366]/20 hover:border-[#003366]/40 transition-all duration-300 group"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src={solution.bgImage}
                      alt={solution.title}
                      fill
                      className="object-cover brightness-50 group-hover:brightness-60 transition-all duration-500"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/95 via-[#003366]/70 to-[#003366]/40" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-10">
                    <div className="text-white/60 mb-6">{solution.icon}</div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-lg text-white/90 mb-6 pb-6 border-b border-white/20">
                      {solution.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {solution.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                          <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-bold transition-all hover:bg-white hover:text-[#003366]"
                    >
                      <span>צפה בפרויקטים</span>
                      <span>←</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CONTACT SECTION with Background */}
        <section className="relative py-20 md:py-24 px-6 overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/WhatsApp Image 2026-02-13 at 22.02.24.jpeg"
              alt="Contact Background"
              fill
              className="object-cover brightness-50"
              quality={75}
            />
            <div className="absolute inset-0 bg-[#003366]/70" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-4xl mx-auto text-center"
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#f59e0b] mb-3">
              צור קשר
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              מוכנים להתחיל<br />את הפרויקט?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              צוות המומחים שלנו מוכן לספק ייעוץ טכני, פתרונות מותאמים אישית ותמיכה מקצועית לאורך כל הפרויקט.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href="tel:+972-52-1234567"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#f59e0b] text-black font-bold text-lg transition-all hover:bg-[#d48806] shadow-xl"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>052-123-4567</span>
              </a>
              <a
                href="mailto:info@pbs-israel.com"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white text-white font-bold text-lg transition-all hover:bg-white hover:text-[#003366]"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@pbs-israel.com</span>
              </a>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
