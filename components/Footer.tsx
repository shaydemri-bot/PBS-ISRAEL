import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* עמודה 1 - אודות */}
          <div>
            <h3 className="font-black text-xl mb-4">PBS Israel</h3>
            <p className="text-cyan-100 leading-relaxed mb-4">
              נציג Xypex הרשמי בישראל - פתרונות מתקדמים לאיטום וחיזוק בטון
            </p>
            <div className="flex gap-2">
              <img
                src="https://static.wixstatic.com/media/38df06_1d91e07781cf4f88a2f818cfc5746e62~mv2.png/v1/fill/w_256,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/xypex_logo_no_background.png"
                alt="Xypex Logo"
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* עמודה 2 - קישורים */}
          <div>
            <h3 className="font-black text-xl mb-4">קישורים מהירים</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-cyan-100 hover:text-white transition-colors">
                  בית
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-cyan-100 hover:text-white transition-colors">
                  מערכת Xypex
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-cyan-100 hover:text-white transition-colors">
                  פרויקטים
                </Link>
              </li>
              <li>
                <Link href="/catalogs" className="text-cyan-100 hover:text-white transition-colors">
                  קטלוגים
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cyan-100 hover:text-white transition-colors">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* עמודה 3 - יצירת קשר */}
          <div>
            <h3 className="font-black text-xl mb-4">צור קשר</h3>
            <div className="space-y-3 text-cyan-100">
              <p className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>טלפון: 072-2432430</span>
              </p>
              <p className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@pbs-israel.com</span>
              </p>
              <p className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>פתח תקווה, ישראל</span>
              </p>
            </div>
          </div>
        </div>

        {/* זכויות יוצרים */}
        <div className="border-t border-cyan-900/30 pt-8 text-center">
          <p className="text-cyan-200 text-sm">
            © 2026 PBS Israel. כל הזכויות שמורות. | נציג רשמי של Xypex Chemical Corporation
          </p>
        </div>
      </div>
    </footer>
  );
}