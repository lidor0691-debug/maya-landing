const benefits = [
  {
    title: 'לקוחות שקבעו באמת מגיעים',
    body: 'פחות בלבול, פחות פספוסים, פחות הודעות של "שכחתי".',
  },
  {
    title: 'פניות לא נעלמות באמצע הדרך',
    body: 'הלקוח לא נשאר בלי תגובה וממשיך הלאה.',
  },
  {
    title: 'העסק ממשיך לעבוד גם כשאתה לא זמין',
    body: 'גם בזמן פגישה, גם בערב, גם כשאין לך כוח לטלפון.',
  },
  {
    title: 'אתה לא טובע בלידים פתוחים',
    body: 'פחות לרדוף. יותר לדעת בדיוק מה קורה.',
  },
]

export default function Benefits() {
  return (
    <section className="section-dark py-24">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-brand-500 font-bold text-sm uppercase tracking-widest mb-3">לפני ואחרי</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            מה קורה בפועל אחרי שמאיה נכנסת
          </h2>
          <p className="text-gray-400 text-lg">פחות בלגן. יותר סדר. יותר שיחות שהופכות לכסף.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors">
              <h3 className="text-xl font-black text-white mb-3">{b.title}</h3>
              <p className="text-gray-400 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { text: 'אין צורך בעוזרת אדמין' },
            { text: 'אין הגדרה מסובכת' },
            { text: 'מתחיל לעבוד תוך 24 שעות' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-4 border border-white/10">
              <span className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                ✓
              </span>
              <span className="text-gray-300 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
