import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div dir="rtl">
      <Header />
      <Hero />
      
      {/* אודות - טקסט פשוט */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              לפני יותר מחמישים שנה, פיתוח הטכנולוגיה הקריסטלית על ידי צוות מדענים ב-Xypex Chemical Corporation חולל מהפכה באופן שבו בטון מוגן מנוזלים חודרניים.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              המפתח לטכנולוגיית איטום הבטון של Xypex הוא הגישה החדשנית שלה לטיפול בבטון ברמה המיקרוסקופית. באמצעות מחויבות למצוינות ומחקר ובדיקות מתמשכים, טכנולוגיית Xypex Crystalline התפתחה למשפחת מוצרי איטום שפותרת בעיות מים בבנייה ומגינה לצמיתות על מבני בטון בסביבות מאתגרות בכל האקלים ברחבי העולם.
            </p>
          </div>
        </div>
      </section>

      {/* תמונה full-width */}
      <section className="w-full">
        <img 
          src="https://www.xypex.com/wp-content/uploads/2021/08/7a9c0b48b7ebe00eaedd74a15fa9faa6.jpg" 
          alt="Xypex Projects"
          className="w-full h-[500px] object-cover"
        />
      </section>

      {/* Xypex מייצר ערך מיידי */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Xypex מייצר ערך מיידי
            </h2>
            
            <div className="space-y-6">
              {[
                'אינו דורש מזג אוויר יבש ליישום',
                'Xypex אינו דורש הכנת משטח יקרה או פילוס לפני היישום',
                'Xypex אינו דורש איטום, חפיפה וגימור של תפרים בפינות, בקצוות או בין ממברנות',
                'תיקון מהיר על משטחים רטובים - Xypex אינו דורש משטח יבש; למעשה, משטח רטוב הוא הכרחי',
                'לא ניתן לנקב, לקרוע או להתפרק בתפרים',
                'אינו דורש הגנה במהלך חזרת אדמה או במהלך הנחת פלדה, רשת תיל או חומרים אחרים',
                'ניתן ליישום משני צידי משטח הבטון - הצד השלילי או החיובי (לחץ מים)'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Xypex מספק ערך לטווח ארוך */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Xypex מספק ערך לטווח ארוך
            </h2>
            
            <div className="space-y-6">
              {[
                'יישום חד-פעמי קבוע, Xypex מתחדש ומתרפא עצמית בכל פעם שמים נוכחים',
                'מוריד את עלות מחזור החיים של הפרויקט',
                'מוריד עלויות תחזוקה ושיקום',
                'מאריך את חיי השירות של המבנה עד פי שלושה'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Xypex הוא בר-קיימא */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Xypex הוא בר-קיימא
            </h2>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
              {[
                'מאריך את חיי השירות',
                'ללא VOC',
                'מפחית זמן בנייה',
                'מפחית תחזוקה',
                'ניתן למיחזור ב-100%',
                'מפחית נוכחות אנושית באתר',
                'הסמכת LEED'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* תמונה + טקסט */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Xypex, הארכת חיי השירות של בטון
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  כחומר בנייה, אין ספק שבטון הוא ללא תחרות, וזו הסיבה שחלק גדול מהסביבה הבנויה שלנו, הרחק לעתיד, ימשיך להיות תלוי בבטון למבניו ותשתיותיו.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  עם זאת, כחומר בנייה, בטון מתמודד עם שני אתגרים עיקריים: הבטחה שבטון שומר על הביצועים שלו לאורך זמן וטביעת הרגל הפחמנית הגבוהה שמגיעה איתו.
                </p>
              </div>
              <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* פרויקטים נבחרים - גלריה */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                פרויקטים נבחרים
              </h2>
              <p className="text-xl text-gray-600">
                מוצרי ושירותי Xypex זמינים ביותר מ-100 מדינות
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Vietcombank Tower',
                  location: 'וייטנאם',
                  category: 'מבני תשתית כלליים'
                },
                {
                  title: '409 and 499 Illinois',
                  location: 'ארה"ב',
                  category: 'מבני תשתית כלליים'
                },
                {
                  title: 'The Rihand Dam',
                  location: 'הודו',
                  category: 'סכרים והשקיה'
                },
                {
                  title: 'ION Orchard',
                  location: 'סינגפור',
                  category: 'מבני תשתית כלליים'
                },
                {
                  title: 'Studio City',
                  location: 'מקאו',
                  category: 'מבני תשתית כלליים'
                },
                {
                  title: 'United States Air Force Academy',
                  location: 'ארה"ב',
                  category: 'מבני תשתית כלליים'
                }
              ].map((project, i) => (
                <a 
                  key={i}
                  href="/projects"
                  className="group block bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] bg-gray-300 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 group-hover:scale-105 transition-transform duration-500"></div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">
                      {project.location}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/projects" 
                className="inline-block border-2 border-gray-900 text-gray-900 px-12 py-4 text-lg font-bold hover:bg-gray-900 hover:text-white transition-colors"
              >
                צפה בארכיון הפרויקטים
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA פשוט */}
      <section className="py-32 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              מוכנים להתחיל?
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              צור קשר עם נציג Xypex המקומי שלך
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-16 py-5 text-xl font-bold hover:bg-blue-700 transition-colors"
            >
              צור קשר
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}