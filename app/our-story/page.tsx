import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OurStoryPage() {
  return (
    <div dir="rtl">
      <Header />
      
      {/* Hero עם gradient מתקדם */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-[70vh] flex items-center">
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 backdrop-blur-md rounded-full border border-blue-400/20 text-blue-200 text-sm font-medium mb-8 animate-pulse">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              טכנולוגיה קריסטלית מתקדמת
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
              מערכת לאיטום גבישי
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed mb-12 font-light">
              המערכת משתתפת בפרויקטי ענק ביותר מ-100 מדינות כבר 80 שנה
            </p>

            {/* Quick benefits bullets - בסגנון Xypex */}
            <div className="grid md:grid-cols-2 gap-3 max-w-3xl">
              {[
                'עמידה בלחץ הידרוסטטי',
                'איטום סדקים שיער לצמיתות',
                'התחדשות עצמית בנוכחות מים',
                'עמידות כימית גבוהה'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" preserveAspectRatio="none" viewBox="0 0 1440 48" fill="currentColor">
            <path d="M0,48 L1440,48 L1440,24 C1140,8 840,0 540,8 C240,16 120,32 0,24 Z"></path>
          </svg>
        </div>
      </section>

      <main className="bg-white">
        
        {/* Stats Bar - משודרג בסגנון Xypex */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: '80+', label: 'שנות ניסיון', color: 'from-blue-600 to-blue-700' },
                { num: '100+', label: 'מדינות', color: 'from-cyan-600 to-blue-600' },
                { num: '1969', label: 'שנת ייסוד', color: 'from-blue-700 to-indigo-700' },
                { num: '∞', label: 'פעיל לצמיתות', color: 'from-indigo-600 to-purple-600' }
              ].map((stat, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className={`text-6xl md:text-7xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.num}
                  </div>
                  <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* חברת זייפקס */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
                  הטכנולוגיה
                </span>
                <div className="mb-6">
                  <div className="mb-6">
                    <img 
                      src="https://static.wixstatic.com/media/38df06_1d91e07781cf4f88a2f818cfc5746e62~mv2.png/v1/fill/w_256,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/xypex_logo_no_background.png"
                      alt="Xypex Logo"
                      className="h-16 w-auto"
                    />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    חברת Xypex העולמית
                  </h2>
                </div>
              </div>
              
              <div className="grid md:grid-cols-12 gap-12 items-center mb-16">
                <div className="md:col-span-7 space-y-6 text-right">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    חברת Xypex הקנדית פיתחה טכנולוגייה ייחודית לאיטום בטון בשנת <strong className="text-blue-600">1969</strong>. 
                    מאז, מוצרי Xypex לאיטום גבישי הוכיחו עצמם בלמעלה מ-100 מדינות ברחבי העולם.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    המערכת שימשה בפרויקטי ענק: גשרים, סכרים, בריכות, תעלות, כורים גרעיניים, 
                    מתקני טיהור שפכים, מתקני התפלה ועוד.
                  </p>
                </div>
                
                <div className="md:col-span-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl transform rotate-3"></div>
                    <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                      <div className="text-5xl font-bold text-blue-600 mb-2">1969</div>
                      <div className="text-gray-600 mb-4">שנת הקמה</div>
                      <div className="h-1 w-16 bg-gradient-to-l from-blue-600 to-cyan-500 rounded-full mb-6"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        למעלה מחצי מאה של חדשנות בתחום איטום הבטון
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Banner עם תמונת רקע מהאתר המקורי */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                {/* תמונת רקע */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-900/95 to-slate-900/95"></div>
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'url("https://static.wixstatic.com/media/42f70c_611e46ae5e0040e1828b5d1f514e0046~mv2.jpg/v1/fill/w_827,h_620,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/42f70c_611e46ae5e0040e1828b5d1f514e0046~mv2.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                </div>
                
                {/* תוכן */}
                <div className="relative z-10 p-10 md:p-12">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-blue-400/30">
                      <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">ההבדל המהותי</h3>
                      <p className="text-lg text-blue-100 leading-relaxed">
                        חומרי Xypex לאיטום גבישי הינם חומרי איטום על בסיס צמנט. 
                        <strong className="text-white"> ההבדל המרכזי:</strong> הם אוטמים את הבטון <strong className="text-white">מבפנים</strong> ולא כשכבה חיצונית. 
                        איטום בעזרת Xypex מאפשר איטום מלא לכל שטח חתך הבטון.
                      </p>
                    </div>
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

        {/* CTA - מעוצב מחדש */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                מעוניינים ליישם את מערכת Xypex?
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                הצוות המקצועי שלנו ילווה אתכם בכל שלב - מתכנון ראשוני ועד ביצוע מושלם באתר
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-xl hover:scale-105 group"
                >
                  <span>צור קשר</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </a>
                <a 
                  href="/" 
                  className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
                >
                  <span>חזרה לעמוד הבית</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}