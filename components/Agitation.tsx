export default function Agitation() {
  return (
    <section className="section-dark py-24">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="text-brand-500 font-bold text-sm uppercase tracking-widest mb-3">למה זה קורה שוב ושוב</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
            זה לא כי אתה לא מקצועי.
            <br />
            <span className="text-gray-400">זה כי אין לך זמן להיות זמין כל היום.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            אתה עובד, מדבר עם לקוחות, מטפל בעסק, רודף אחרי משימות.
            <br />
            בדיוק שם לידים נופלים בין הכיסאות.
          </p>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto mb-14">
          {[
            {
              label: 'אתה לא יכול לענות לכל שיחה',
              sub: '',
            },
            {
              label: 'אתה לא יכול להיות בוואטסאפ כל היום',
              sub: '',
            },
            {
              label: 'אתה לא יכול לחזור לכל אחד מיד',
              sub: '',
            },
            {
              label: 'אבל הלקוח עדיין מצפה לתגובה עכשיו',
              sub: '',
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">{item.label}</p>
                {item.sub ? <p className="text-gray-400 text-sm mt-1">{item.sub}</p> : null}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-black text-white leading-snug">
            הבעיה היא לא שאתה עסוק.
            <br />
            <span className="text-brand-500">הבעיה היא שאין לך מישהו שתופס את הטלפון כשאתה לא יכול.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
