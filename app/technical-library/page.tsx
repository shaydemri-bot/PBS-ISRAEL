'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechnicalPDFTable from '@/components/technical/TechnicalPDFTable';
import { motion } from 'framer-motion';

/**
 * Technical Library Page - Production Ready
 * Searchable database of all Xypex technical documentation
 * Architect (Dark Luxury) theme as permanent default
 */
export default function TechnicalLibraryPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1600px] mx-auto">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-16"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] mb-6 text-foreground">
              ספרייה <span className="font-black text-accent">טכנית</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-dark max-w-3xl opacity-80 leading-relaxed">
              גישה מלאה לדפי מפרט טכני (TDS), דפי בטיחות (SDS), שיטות יישום, ומפרטי פרויקטים
              עבור כל מוצרי Xypex. מסמכים מעודכנים לשנת 2024.
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                icon: '📘',
                title: 'דפי מפרט טכני',
                description: 'TDS מפורטים עם נתונים טכניים מלאים',
              },
              {
                icon: '🔒',
                title: 'דפי בטיחות',
                description: 'SDS עדכניים עם הנחיות בטיחות',
              },
              {
                icon: '⚙️',
                title: 'שיטות יישום',
                description: 'הוראות מפורטות ליישום נכון',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-slate opacity-70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* PDF Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <TechnicalPDFTable />
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-16 backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-10 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              זקוקים לעזרה טכנית?
            </h3>
            <p className="text-lg text-slate-dark mb-6 max-w-2xl mx-auto opacity-80">
              צוות המהנדסים שלנו זמין לייעוץ מקצועי, בחירת המוצר המתאים, וליווי טכני מלא
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="tel:+972-52-1234567"
                className="px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover transition-colors"
              >
                052-123-4567 ☎️
              </a>
              <a
                href="mailto:technical@pbs-israel.com"
                className="px-6 py-3 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-colors"
              >
                technical@pbs-israel.com 📧
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
