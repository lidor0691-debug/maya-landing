const notForYou = [
  'אם אין לך פניות בכלל, זה לא רלוונטי.',
  'אם אתה כבר עונה לכל שיחה תוך שניות, כנראה שאתה לא צריך את זה.',
  'אם אתה מפספס לקוחות בגלל זמינות, זה בדיוק המקום שבו זה נכנס.',
]

export default function RiskReversal() {
  return (
    <section className="section-muted py-24">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-2 gap-8 items-stretch">

          {/* Not for everyone block */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col">
            <p className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-4">כנות</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-6">
              זה לא מתאים לכל אחד.
            </h2>
            <ul className="space-y-4 flex-1">
              {notForYou.map((line, i) => (
                <li key={i} className="flex gap-3 items-start text-gray-600 leading-snug">
                  <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                    i === notForYou.length - 1
                      ? 'bg-brand-500 text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {i === notForYou.length - 1 ? (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </span>
                  <span className={i === notForYou.length - 1 ? 'text-gray-900 font-semibold' : ''}>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guarantee block */}
          <div className="bg-gray-900 rounded-2xl border border-white/10 p-8 flex flex-col text-center items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <h3 className="text-2xl font-black text-white mb-3">14 ימי ניסיון. בלי סיכון.</h3>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              תן למאיה שבועיים לעבוד בשבילך. אם לא תראה ערך אמיתי, תקבל את כל הכסף חזרה. בלי שאלות.
            </p>

            <div className="w-full space-y-3 mb-8">
              {[
                'בלי התחייבות שנתית',
                'ביטול בכל עת',
                'החזר מלא אם לא מרוצה',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-300 text-sm bg-white/5 rounded-xl px-4 py-3">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/972524620550?text=היי,%20ראיתי%20את%20המערכת%20של%20מאיה%20ורוצה%20לבדוק%20איך%20זה%20יכול%20לעבוד%20אצלי"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              בדוק אם זה מתאים לך
              <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
