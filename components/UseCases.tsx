const industries = [
  {
    title: 'קליניקות ורופאים',
    body: 'לקוח מחפש תור בשעה 23:00. לא מחכה למחר. מאיה קובעת, מאשרת ושולחת תזכורת.',
  },
  {
    title: 'סוכנויות ביטוח',
    body: 'ליד חם שלא קיבל מענה בזמן שווה כסף שהלך. מאיה מגיבה מיד ומחממת עד שאתה פנוי.',
  },
  {
    title: 'נדל"ן ותיווך',
    body: 'פנייה על נכס מגיעה בכל שעה. מאיה אוספת פרטים, מסננת ומעבירה לך רק מה שרלוונטי.',
  },
  {
    title: 'שירותי יופי וקוסמטיקה',
    body: 'שאלת מחיר שלא נענית בזמן נגמרת אצל מתחרה. מאיה עונה, בודקת זמינות ומזמינה.',
  },
  {
    title: 'קבלנים ונותני שירות',
    body: 'אתה על גג או מתחת לכיור. מאיה עונה לשאלות, קובעת ביקור ושולחת אישור.',
  },
  {
    title: 'כל עסק עם הרבה פניות',
    body: 'אם אנשים פונים אליך ואתה לא תמיד יכול לענות מיד, מאיה היא בדיוק בשבילך.',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="section-muted py-24">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-3">למי זה מתאים</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
            לא משנה מה אתה מוכר.
            <br />
            אם אנשים פונים אליך, זה רלוונטי.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            מאיה עובדת בכל עסק שיש בו פניות נכנסות שלא תמיד נענות בזמן.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => (
            <div key={ind.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-black text-gray-900 mb-2">{ind.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{ind.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
