import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | מאיה',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-2xl mx-auto px-6 py-20">

        <Link
          href="/"
          className="inline-block text-brand-500 hover:text-brand-400 text-sm font-medium mb-12 transition-colors"
        >
          &larr; חזרה לאתר
        </Link>

        <h1 className="text-4xl font-black text-white mb-4">מדיניות פרטיות</h1>
        <p className="text-gray-500 text-sm mb-12">עודכן לאחרונה: 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">

          <p>
            אנו מכבדים את פרטיות המשתמשים ומתחייבים לשמור עליה.
          </p>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">1. איסוף מידע</h2>
            <p>
              בעת שימוש באתר או יצירת קשר, ייתכן וייאסף מידע כגון שם, מספר טלפון, פרטי עסק ותוכן הודעות.
            </p>
            <p className="mt-3">
              המידע נמסר ביוזמת המשתמש בלבד.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">2. שימוש במידע</h2>
            <p className="mb-3">המידע משמש לצורך:</p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2"><span className="text-brand-500 flex-shrink-0">–</span>יצירת קשר ומתן מענה לפניות</li>
              <li className="flex gap-2"><span className="text-brand-500 flex-shrink-0">–</span>הדגמת השירות והתאמתו לעסק</li>
              <li className="flex gap-2"><span className="text-brand-500 flex-shrink-0">–</span>שיפור השירותים והמערכת</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">3. אחסון ואבטחת מידע</h2>
            <p>
              המידע נשמר באמצעים סבירים ומאובטחים, וננקטים צעדים להגנה עליו מפני גישה בלתי מורשית.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">4. שיתוף מידע</h2>
            <p>
              איננו מוכרים מידע אישי לצדדים שלישיים.
            </p>
            <p className="mt-3">
              ייתכן שיתוף מידע עם ספקים טכנולוגיים לצורך תפעול השירות (כגון מערכות הודעות, CRM או שירותי ענן), ובהתאם לצורך בלבד.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">5. שימוש בפלטפורמות חיצוניות</h2>
            <p>
              השירות עשוי לעשות שימוש בפלטפורמות כגון WhatsApp, Google Calendar או מערכות צד שלישי אחרות.
            </p>
            <p className="mt-3">
              השימוש בפלטפורמות אלו כפוף גם למדיניות הפרטיות שלהן.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">6. Cookies וכלי מדידה</h2>
            <p>
              ייתכן והאתר עושה שימוש בכלי מדידה בסיסיים לצורך שיפור חוויית המשתמש והבנת השימוש באתר.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">7. הסכמה</h2>
            <p>
              השימוש באתר מהווה הסכמה למדיניות פרטיות זו.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">8. יצירת קשר</h2>
            <p>
              לשאלות בנושא פרטיות ניתן לפנות דרך האתר.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
