import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* תמונת רקע */}
      <Image
        src="/images/hero-bg.jpg"
        alt="PBS Israel - איטום גבישי לבטון"
        fill
        className="object-cover"
        priority
        quality={100}
      />
      
      {/* אפקט עדין רק כדי שהטקסט יהיה קריא */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* תוכן */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
          איטום גבישי לבטון
        </h1>
        <p className="text-xl md:text-2xl mb-4 drop-shadow-xl">
          מערכת Xypex (זייפקס) - טכנולוגיה מתקדמת לאיטום בטון מבפנים
        </p>
        <p className="text-lg mb-8 max-w-3xl mx-auto drop-shadow-xl">
          המערכת משתתפת בפרויקטי ענק ביותר מ-100 מדינות כבר 80 שנה
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            href="/projects" 
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition shadow-2xl hover:shadow-xl hover:scale-105"
          >
            הפרויקטים שלנו
          </Link>
          <Link 
            href="/our-story" 
            className="border-2 border-white bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            מערכת זייפקס
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-white bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            צור קשר
          </Link>
        </div>
      </div>
    </section>
  );
}