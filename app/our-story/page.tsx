import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OurStoryPage() {
  return (
    <div dir="rtl">
      <Header />
      
      {/* Hero - CHIN Technical Focus */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* CHIN - NO-ZOOM ARCHITECTURE */}
        <Image
          src="/images/chin.jpeg"
          alt="PBS Israel Solutions - Advanced Waterproofing Technology"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />

        {/* Gradient - Bottom 30% Only */}
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent z-[1]"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter leading-tight mb-3 uppercase" style={{ color: '#FFFFFF', filter: 'drop-shadow(0 5px 20px rgba(0,0,0,1))' }}>
            הפתרונות שלנו:<br />איטום ושיקום מתקדם
          </h1>
          <p className="text-base md:text-lg font-bold max-w-xl mx-auto leading-relaxed tracking-tight" style={{ color: '#FFFFFF', filter: 'drop-shadow(0 5px 20px rgba(0,0,0,1))' }}>
            טכנולוגיית קריסטליזציה מתקדמת לתשתיות קריטיות
          </p>
        </div>
      </section>

      <main className="bg-white">
        
        {/* Stats Bar - משודרג בסגנון Xypex */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '80+', label: 'שנות ניסיון', color: 'from-blue-600 to-blue-700' },
                { num: '100+', label: 'מדינות', color: 'from-cyan-600 to-blue-600' },
                { num: '1969', label: 'שנת ייסוד', color: 'from-blue-700 to-indigo-700' },
                { num: '∞', label: 'פעיל לצמיתות', color: 'from-indigo-600 to-purple-600' }
              ].map((stat, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.num}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* חברת זייפקס */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <span className="inline-block px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold mb-4">
                  הטכנולוגיה
                </span>
                <div className="mb-4">
                  <div className="mb-4">
                    <img
                      src="https://static.wixstatic.com/media/38df06_1d91e07781cf4f88a2f818cfc5746e62~mv2.png/v1/fill/w_256,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/xypex_logo_no_background.png"
                      alt="Xypex Logo"
                      className="h-10 w-auto"
                    />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    חברת Xypex העולמית
                  </h2>
                </div>
              </div>
              
              <div className="grid md:grid-cols-12 gap-8 items-center mb-8">
                <div className="md:col-span-7 space-y-4 text-right">
                  <p className="text-base text-gray-700 leading-relaxed">
                    חברת Xypex הקנדית פיתחה טכנולוגייה ייחודית לאיטום בטון בשנת <strong className="text-blue-600">1969</strong>.
                    מאז, מוצרי Xypex לאיטום גבישי הוכיחו עצמם בלמעלה מ-100 מדינות ברחבי העולם.
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    המערכת שימשה בפרויקטי ענק: גשרים, סכרים, בריכות, תעלות, כורים גרעיניים,
                    מתקני טיהור שפכים, מתקני התפלה ועוד.
                  </p>
                </div>

                <div className="md:col-span-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg transform rotate-2"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow-xl border border-gray-100">
                      <div className="text-3xl font-bold text-blue-600 mb-1.5">1969</div>
                      <div className="text-gray-600 text-sm mb-3">שנת הקמה</div>
                      <div className="h-0.5 w-12 bg-gradient-to-l from-blue-600 to-cyan-500 rounded-full mb-4"></div>
                      <p className="text-gray-700 text-xs leading-relaxed">
                        למעלה מחצי מאה של חדשנות בתחום איטום הבטון
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Banner - Minimalist Clarity */}
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                {/* Background Image - BRIGHT & CLEAR */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/WhatsApp Image 2026-01-21 at 11.42.28 (4).jpeg"
                    alt="Xypex Technology Implementation"
                    fill
                    quality={85}
                    className="object-cover brightness-105"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                  {/* Subtle overlay only */}
                  <div className="absolute inset-0 bg-[#003366]/30"></div>
                </div>

                {/* Glassmorphism Content */}
                <div className="relative z-10 p-6 md:p-8">
                  <div className="backdrop-blur-xl bg-white/95 rounded-lg p-6 border border-white/50 shadow-xl">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#003366]/10 rounded-lg flex items-center justify-center border border-[#003366]/20">
                        <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#003366] mb-2">ההבדל המהותי</h3>
                        <p className="text-sm text-[#475569] leading-relaxed">
                          חומרי Xypex לאיטום גבישי הינם חומרי איטום על בסיס צמנט.
                          <strong className="text-[#003366]"> ההבדל המרכזי:</strong> הם אוטמים את הבטון <strong className="text-[#003366]">מבפנים</strong> ולא כשכבה חיצונית.
                          איטום בעזרת Xypex מאפשר איטום מלא לכל שטח חתך הבטון.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO 1 - Technical Engineering Showcase */}
        <section className="py-12 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  הדגמה טכנית של מערכת האיטום הגבישית
                </h2>
                <p className="text-base text-slate-300 max-w-xl mx-auto">
                  טכנולוגיית קריסטליזציה קטליטית לעמידות בטון ארוכת טווח בסביבות אגרסיביות
                </p>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* WATERPROOFING FAILURES - Technical Report Section */}
        <section className="py-12 bg-white relative overflow-hidden">
          {/* Technical Grid Background */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, #003366 0px, #003366 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #003366 0px, #003366 1px, transparent 1px, transparent 20px)',
                backgroundSize: '20px 20px'
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Technical Header */}
              <div className="mb-8 pb-4 border-b-2 border-[#003366]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-8 bg-red-600"></div>
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-red-600">
                    ניתוח הנדסי
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#003366] tracking-tight">
                  כשלים נפוצים במערכות איטום קונבנציונליות
                </h2>
                <p className="text-sm text-slate-600 mt-2 font-mono">
                  דוח טכני // תשתיות קריטיות // 2026
                </p>
              </div>

              {/* Failure Analysis Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    code: 'F-01',
                    title: 'סדקים מהרחבה תרמית',
                    problem: 'מחזורי התרחבות והתכווצות תרמיים יוצרים סדקים בממברנות איטום חיצוניות',
                    impact: 'חדירת מים • קורוזיה • הידרדרות מבנית',
                    color: 'from-red-600 to-orange-600'
                  },
                  {
                    code: 'F-02',
                    title: 'כשל במישקים ובחיבורים',
                    problem: 'נקודות תורפה במפגשי ממברנות, חדירות וחיבורים מכניים',
                    impact: 'דליפות מוקדיות • נזקי מים • עלויות תחזוקה גבוהות',
                    color: 'from-orange-600 to-amber-600'
                  },
                  {
                    code: 'F-03',
                    title: 'לחץ הידרוסטטי עודף',
                    problem: 'איטום חיצוני נכשל תחת לחץ מים תת-קרקעי גבוה (>50m)',
                    impact: 'חדירה מסיבית • הצפה • כשל מערכתי',
                    color: 'from-amber-600 to-yellow-600'
                  },
                  {
                    code: 'F-04',
                    title: 'הידרדרות כימית',
                    problem: 'סביבות אגרסיביות (מי ים, שפכים, כימיקלים) משפילות ממברנות אורגניות',
                    impact: 'התפוררות • אובדן אטימות • החלפה תכופה',
                    color: 'from-yellow-600 to-green-600'
                  }
                ].map((failure, i) => (
                  <div key={i} className="relative group">
                    {/* Technical Card */}
                    <div className="bg-white border-2 border-slate-200 hover:border-red-600 transition-all duration-300 shadow-sm hover:shadow-xl">
                      {/* Header Strip */}
                      <div className={`h-1.5 bg-gradient-to-r ${failure.color}`}></div>

                      {/* Content */}
                      <div className="p-4">
                        {/* Code Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs font-bold tracking-wider bg-red-50 text-red-600 px-2 py-1 border border-red-200">
                            {failure.code}
                          </span>
                          <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold text-[#003366] mb-2 leading-tight">
                          {failure.title}
                        </h3>

                        {/* Problem Description */}
                        <div className="mb-3 pb-3 border-b border-slate-100">
                          <p className="text-xs text-slate-700 leading-relaxed">
                            <strong className="text-[#003366]">בעיה:</strong> {failure.problem}
                          </p>
                        </div>

                        {/* Impact */}
                        <div className="text-xs text-red-700 font-medium">
                          <strong>השלכות:</strong> {failure.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Xypex Solution Box */}
              <div className="relative overflow-hidden rounded-lg border-4 border-[#003366] bg-gradient-to-br from-[#003366] to-[#002244] p-6 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-black text-white">
                      הפתרון ההנדסי: מערכת Xypex הגבישית
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: '🔬', text: 'איטום פנימי קטליטי - לא ממברנה חיצונית' },
                      { icon: '🛡️', text: 'עמידות לתנודות תרמיות ולחצים הידרוסטטיים' },
                      { icon: '♻️', text: 'ריפוי עצמי אוטומטי של סדקים עד 0.5mm' },
                      { icon: '⚗️', text: 'התנגדות כימית מלאה - חלק מהבטון עצמו' }
                    ].map((solution, i) => (
                      <div key={i} className="flex items-start gap-3 text-white/90 text-sm">
                        <span className="text-lg flex-shrink-0">{solution.icon}</span>
                        <span className="leading-tight">{solution.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* התהליך - בסגנון Xypex עם מספרים */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
                  התהליך
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  איטום גבישי בזייפקס
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  טכנולוגיה קריסטלית שהופכת בטון רגיל לבטון אטום לחלוטין
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    num: '01',
                    title: 'קריסטליזציה',
                    desc: 'הכימיקלים נספגים "ונודדים" ובכל אזור שבו קיימת נוכחות של המים, נבנים כגבישים בצורת "סיכות" דקות ובכך סותמים את כל מעברי המים בבטון.',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    )
                  },
                  {
                    num: '02',
                    title: 'אטימות',
                    desc: 'הטיפול והאיטום נותן בנוסף לאיטום גם הגנה גבוהה לברזל הזיון ועמידות בפני כימיקלים וסביבה אגרסיבית ביותר. הבטון מוגן בפני התגבשות מלחים וקורוזיה.',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )
                  },
                  {
                    num: '03',
                    title: 'אוסמוזה',
                    desc: 'התהליך קטליטי - הגבישים ממשיכים להיווצר במשך שנים לאחר יישום הטיפול הראשוני. המערכת מבטיחה אקטיביות ואטימות הבטון גם לאחר שינויים במרוצת השנים.',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    )
                  }
                ].map((step, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                          {step.icon}
                        </div>
                        <div className="text-6xl font-bold text-gray-100 group-hover:text-blue-50 transition">
                          {step.num}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* יתרונות - בסגנון Xypex עם checkmarks ירוקים */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <span className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-6">
                  היתרונות
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  למעלה מ-50 שנה, Xypex נבחר על ידי:
                </h2>
                <p className="text-xl text-gray-600">
                  מהנדסים, אדריכלים וקבלנים ברחבי העולם
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    title: 'עמידה בלחץ הידרוסטטי',
                    desc: 'הבטון אטום בתוך שטח החתך למעבר נוזלים כלשהם אך ממשיך "לנשום" ולהתייבש.'
                  },
                  {
                    title: 'איטום סדקים שיער לצמיתות',
                    desc: 'מאפשר מעבר מולקולות אויר ומונע מעבר מולקולות מים. המערכת אקטיבית גם בנוכחות מים עתידית.'
                  },
                  {
                    title: 'התחדשות עצמית בנוכחות מים',
                    desc: 'גם אחרי שנים רבות הבטון עמיד בתנאי קיצון - לחץ הידרוסטטי גבוה וסביבה אגרסיבית.'
                  },
                  {
                    title: 'עמידות כימית גבוהה',
                    desc: 'עמידות מלאה מול מי ים, חומצות, שפכים וכל סביבה אגרסיבית אחרת.'
                  },
                  {
                    title: 'חיסכון בזמן וכסף',
                    desc: 'אינו מתבלה, הופך להיות חלק בלתי נפרד מהמשטח המטופל - לכל שטח החתך של הבטון.'
                  },
                  {
                    title: 'הארכת חיי השירות של הבטון',
                    desc: 'ניתן ליישום ישירות על הרטיבות ואין צורך בהמתנה לייבוש הבטון.'
                  }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-gray-200">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-green-100 group-hover:bg-green-500 flex items-center justify-center transition-colors">
                        <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional benefits callout */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">בטוח וידידותי לסביבה</h3>
                <p className="text-lg text-blue-50 leading-relaxed">
                  בתום היישום, ניקיון כלי העבודה בעזרת מים בלבד ללא צורך בחומרים מסיסים או חומצות. 
                  אינו דליק, אינו רעיל וחסר ריח.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Clean Design */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image - BRIGHT */}
          <div className="absolute inset-0">
            <Image
              src="/images/WhatsApp Image 2026-02-13 at 22.02.24.jpeg"
              alt="Contact PBS Israel"
              fill
              quality={85}
              className="object-cover brightness-105"
              sizes="100vw"
            />
            {/* Subtle overlay only */}
            <div className="absolute inset-0 bg-[#003366]/40"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Glassmorphism Card */}
              <div className="backdrop-blur-xl bg-white/95 rounded-2xl p-10 md:p-12 shadow-2xl border border-white/50 text-center">
                <h2 className="text-4xl md:text-5xl font-black text-[#003366] mb-6 leading-tight">
                  מעוניינים ליישם את מערכת Xypex?
                </h2>
                <p className="text-xl text-[#475569] mb-10 leading-relaxed font-semibold">
                  הצוות המקצועי שלנו ילווה אתכם בכל שלב - מתכנון ראשוני ועד ביצוע מושלם באתר
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-[#003366] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#004080] transition-all shadow-lg hover:scale-[1.02] group"
                  >
                    <span>צור קשר</span>
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center gap-3 border-2 border-[#003366] text-[#003366] px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#003366] hover:text-white transition-all"
                  >
                    <span>חזרה לעמוד הבית</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}