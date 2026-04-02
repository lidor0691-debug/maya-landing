const problems = [
  {
    title: 'לקוח כתב לך בוואטסאפ. לא ענית בזמן.',
    body: 'אצלך זה עוד הודעה. אצלו זה כבר סימן לעבור הלאה.',
  },
  {
    title: 'מישהו התקשר. היית באמצע משהו.',
    body: 'לא חזרת אליו בזמן. הוא כבר התקדם.',
  },
  {
    title: 'לקוח ביקש לקבוע תור. אמרת שתענה אחר כך.',
    body: 'אחר כך כבר לא היה רלוונטי.',
  },
  {
    title: 'השארת ליד פתוח ליום למחרת.',
    body: 'מבחינתך זה לטפל בזה מחר. מבחינתו זה עסק שלא זמין.',
  },
]

export default function Problem() {
  return (
    <section className="section-muted py-24">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-3">הבעיה האמיתית</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
            כמה לקוחות פספסת השבוע בלי לשים לב?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            לא כי אתה לא טוב במה שאתה עושה.
            <br />
            כי אין לך זמן להיות זמין כל היום.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
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
