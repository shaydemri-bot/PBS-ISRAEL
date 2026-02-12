export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* עמודה 1 - אודות */}
          <div>
            <h3 className="font-bold text-lg mb-4">PBS Israel</h3>
            <p className="text-gray-300 text-sm">
              מערכות אוטומציה תעשייתיות מתקדמות
            </p>
          </div>

          {/* עמודה 2 - קישורים */}
          <div>
            <h3 className="font-bold text-lg mb-4">קישורים מהירים</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>בית</li>
              <li>פרויקטים</li>
              <li>קטלוגים</li>
              <li>צור קשר</li>
            </ul>
          </div>

          {/* עמודה 3 - יצירת קשר */}
          <div>
            <h3 className="font-bold text-lg mb-4">צור קשר</h3>
            <p className="text-gray-300 text-sm">
              טלפון: 03-1234567<br />
              אימייל: info@pbs-israel.com
            </p>
          </div>
        </div>

        {/* זכויות יוצרים */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© 2026 PBS Israel. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}