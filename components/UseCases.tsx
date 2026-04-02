const cases = [
  {
    industry: 'סטודיו / קליניקה',
    pain: 'לקוח רוצה לקבוע בערב. לא מחכה למחר.',
    result: 'מאיה קובעת תורים אוטומטית, שולחת אישורים ותזכורות. היומן מלא, בלי לרדוף אחרי אף אחד.',
    quote: '"הפסקתי לבדוק וואטסאפ 20 פעם ביום. מאיה פשוט מסדרת את זה."',
    who: 'ענת, סטודיו לפילאטיס',
  },
  {
    industry: 'סוכן ביטוח / פיננסים',
    pain: 'ליד חם שלא קיבל מענה בזמן שווה כסף שהלך.',
    result: 'מאיה מגיבה תוך שניות, אוספת פרטים ומחממת את הליד עד שאתה פנוי לדבר.',
    quote: '"קמתי בבוקר עם שלושה לידים שמאיה כבר התחילה לטפל בהם. זה לא רגיל."',
    who: 'יוסי, סוכן ביטוח',
  },
  {
    industry: 'מספרה / קוסמטיקה',
    pain: 'שאלת מחיר שלא נענית בזמן נגמרת אצל מישהו אחר.',
    result: 'מאיה בודקת את היומן, מזמינה ומאשרת, בלי שתרימי עיניים מהלקוחה שלפניך.',
    quote: '"היומן מלא. אני לא עושה כלום בשביל זה. זה פשוט קורה."',
    who: 'שירה, סלון עיצוב שיער',
  },
  {
    industry: 'קבלן / נותן שירות',
    pain: 'אם לא ענית מהר, הם כבר עברו לבא בתור.',
    result: 'מאיה עונה על שאלות, קובעת ביקור ושולחת אישור, בזמן שאתה עובד.',
    quote: '"אני לא מפספס יותר לקוחות. מאיה מסדרת מי חיכה ומי דחוף."',
    who: 'רמי, קבלן שיפוצים',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="section-light py-24">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-3">לכל סוג עסק</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
            לא משנה מה אתה מוכר.
            <br />
            אם אנשים פונים אליך, זה רלוונטי.
          </h2>
          <p className="text-gray-500 text-lg">אם אתה עסק שמפסיד לקוחות כשאתה לא זמין, מאיה היא בדיוק בשבילך.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.industry} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col gap-5">
              <h3 className="font-black text-gray-900 text-lg">{c.industry}</h3>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-gray-600 text-sm">{c.pain}</p>
                </div>

                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-gray-700 text-sm font-medium">{c.result}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-100 mt-auto">
                <p className="text-gray-700 text-sm italic mb-2">{c.quote}</p>
                <p className="text-gray-400 text-xs font-semibold">{c.who}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
