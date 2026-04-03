const objections = [
  {
    q: 'אם אתה עונה לכל שיחה תוך דקה',
    a: 'כנראה שאתה לא צריך את זה.',
  },
  {
    q: 'אם אין לך כמעט פניות',
    a: 'מאיה לא תפתור בעיה שאין.',
  },
  {
    q: 'אם אתה מחפש צעצוע AI',
    a: 'זה לא הכיוון. זאת מערכת עבודה.',
  },
  {
    q: 'אם נמאס לך לפספס כסף בגלל זמינות',
    a: 'כאן זה נהיה מעניין.',
  },
]

export default function Objections() {
  return (
    <section className="section-muted py-24">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-3">שאלות נפוצות</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
            כמה שאלות ישירות.
            <br />
            כמה תשובות ישירות.
          </h2>
        </div>

        <div className="space-y-4">
          {objections.map((obj) => (
            <details key={obj.q} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer select-none list-none">
                <h3 className="font-bold text-gray-900 text-base">{obj.q}</h3>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 leading-relaxed">{obj.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
