import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'תנאי שימוש | מאיה',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-2xl mx-auto px-6 py-20">

        <Link
          href="/"
          className="inline-block text-brand-500 hover:text-brand-400 text-sm font-medium mb-12 transition-colors"
        >
          &larr; חזרה לאתר
        </Link>

        <h1 className="text-4xl font-black text-white mb-4">תנאי שימוש</h1>
        <p className="text-gray-500 text-sm mb-12">עודכן לאחרונה: 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">

          <p>
            ברוכים הבאים לאתר של &quot;מאיה&quot;.
          </p>
          <p>
            השימוש באתר ובשירותים המוצעים בו מהווה הסכמה לתנאים המפורטים להלן. אם אינך מסכים לתנאים אלו, אנא הימנע משימוש באתר.
          </p>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">1. מהות השירות</h2>
            <p>
              מאיה היא מערכת מבוססת AI המסייעת לעסקים בניהול פניות, שיחות ולידים דרך טלפון, וואטסאפ ואמצעים דיגיטליים נוספים.
            </p>
            <p className="mt-3">
              המערכת נועדה לשפר זמינות ותגובה לפניות, אך אינה מהווה תחליף מלא לניהול עסקי או שיקול דעת אנושי.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">2. אחריות ותוצאות</h2>
            <p>
              אנו עושים מאמצים לספק שירות איכותי, אך אין התחייבות לתוצאות עסקיות מסוימות כגון הגדלת מכירות, סגירת לידים או רווחים.
            </p>
            <p className="mt-3">
              הצלחת השימוש במערכת תלויה בגורמים רבים שאינם בשליטתנו.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">3. זמינות השירות</h2>
            <p>
              השירות ניתן כפי שהוא (AS IS).
            </p>
            <p className="mt-3">
              ייתכנו הפרעות זמניות, עדכונים, תחזוקה או תקלות שאינן בשליטתנו, ולא תינתן אחריות לנזקים עקיפים הנובעים מכך.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">4. שימוש הוגן</h2>
            <p>
              המשתמש מתחייב שלא להשתמש בשירות לצרכים בלתי חוקיים, פוגעניים, מטעהים או כאלה העלולים להזיק למערכת או לצדדים שלישיים.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">5. קניין רוחני</h2>
            <p>
              כל הזכויות באתר, בתוכן, בעיצוב ובמערכת שייכות לבעלי האתר.
            </p>
            <p className="mt-3">
              אין להעתיק, לשכפל או להשתמש בתוכן ללא אישור מראש ובכתב.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">6. הגבלת אחריות</h2>
            <p>
              בשום מקרה לא נהיה אחראים לנזק ישיר או עקיף, אובדן רווחים, אובדן נתונים או כל נזק אחר הנובע משימוש או חוסר יכולת שימוש בשירות.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">7. שינויים בתנאים</h2>
            <p>
              אנו רשאים לעדכן תנאים אלו מעת לעת.
            </p>
            <p className="mt-3">
              המשך שימוש באתר לאחר עדכון מהווה הסכמה לתנאים החדשים.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">8. יצירת קשר</h2>
            <p>
              לשאלות ניתן לפנות דרך האתר או באמצעות פרטי הקשר המופיעים בו.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
