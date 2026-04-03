const problems = [
  {
    title: 'שיחות שלא נענות',
    body: 'כל שיחה שלא נענית היא לקוח שפתח גוגל ומחפש מישהו אחר. זה קורה כל יום, כמה פעמים.',
  },
  {
    title: 'תגובות איטיות',
    body: 'הודעה שמחכה שעתיים לתשובה מאבדת את הלקוח. לא כי המחיר גבוה. כי מישהו אחר ענה קודם.',
  },
  {
    title: 'עומס שפוגע בסגירות',
    body: 'כשאתה עסוק, לידים לא מקבלים את תשומת הלב שהם צריכים. הם מתקררים. ואז הולכים.',
  },
  {
    title: 'לידים נופלים בין הכיסאות',
    body: 'הודעה ב-22:00. פנייה בסוף שבוע. שאלה באמצע פגישה. אלה לא פחות חשובים משאר הלידים.',
  },
]

export default function Problem() {
  return (
    <section className="section-muted py-24">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-3">מה קורה בלי זה</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
            כמה לקוחות פספסת השבוע בלי לשים לב?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            לא כי אתה לא טוב במה שאתה עושה.
            כי אין לך זמן להיות זמין כל היום.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-gray-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-red-50 border border-red-100 rounded-2xl p-8 text-center">
          <p className="text-2xl sm:text-3xl font-black text-red-700">
            כמה לידים הלכו לך לאיבוד החודש?
          </p>
          <p className="text-red-500 mt-3 font-medium">לא בגלל תחרות. כי לא ענו בזמן.</p>
        </div>
      </div>
    </section>
  )
}
