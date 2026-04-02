export default function RiskReversal() {
  return (
    <section className="section-muted py-20">
      <div className="container-narrow">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 sm:p-14 text-center">
          <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-7">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            14 ימי ניסיון. בלי סיכון.
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            תן למאיה שבועיים לעבוד בשבילך. אם לא תראה לפחות ליד אחד שנסגר שבעבר היה הולך לאיבוד, תקבל את כל הכסף חזרה. ללא שאלות.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: '🚫', text: 'בלי התחייבות שנתית' },
              { icon: '💳', text: 'ביטול בכל עת' },
              { icon: '💰', text: 'החזר מלא אם לא מרוצה' },
            ].map((item) => (
              <div key={item.text} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <span className="text-gray-700 font-semibold text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <a href="https://wa.me/972524620550?text=היי,%20ראיתי%20את%20המערכת%20של%20מאיה%20ורוצה%20לבדוק%20איך%20זה%20יכול%20לעבוד%20אצלי" target="_blank" rel="noopener noreferrer" className="btn-primary">
            קבל הדגמה מותאמת לעסק שלך
            <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
