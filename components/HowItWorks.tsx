const steps = [
  {
    num: '01',
    title: 'לקוח פונה',
    body: 'שיחה שלא נענית, הודעת וואטסאפ, בקשת מידע. בכל ערוץ שהלקוח בחר.',
    icon: (
      <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'מאיה עונה מיד',
    body: 'תוך שניות. לא בוט עם כפתורים. שיחה אמיתית, בשפה של בן אדם, על העסק שלך.',
    icon: (
      <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'נקבעת פגישה או נסגר ליד',
    body: 'מאיה מקדמת את השיחה, קובעת תור, שולחת אישור ועושה פולואפ. אתה נכנס רק לסגור.',
    icon: (
      <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-muted py-24">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-3">איך זה עובד</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
            פשוט. מהיר. בלי כאב ראש.
          </h2>
          <p className="text-gray-500 text-lg">בלי התקנות. בלי ללמוד מערכת חדשה. בלי לשבור את הראש.</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col sm:flex-row gap-6 items-start bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 flex items-center gap-4 sm:flex-col sm:items-center sm:gap-3">
                <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-5xl font-black text-gray-100 sm:text-brand-100">{step.num}</span>
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-black text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-base">{step.body}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden sm:flex absolute right-[50%] translate-x-1/2 mt-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
