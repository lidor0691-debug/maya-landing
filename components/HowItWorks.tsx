const steps = [
  {
    num: '01',
    title: 'מגדירים את מאיה לפי העסק שלך',
    body: 'שאלות נפוצות, מחירים, שעות, קביעת תור, סוגי פניות.',
    icon: (
      <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'מאיה מתחילה לענות במקומך',
    body: 'לשיחות, לוואטסאפ, לבקשות מידע, לקביעות ולפולואפ.',
    icon: (
      <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'אתה מקבל פחות בלגן ויותר לידים סגורים',
    body: 'פחות פספוסים. יותר סדר. יותר כסף שנשאר אצלך.',
    icon: (
      <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-muted py-24">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-3">3 שלבים</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
            פשוט. מהיר. בלי כאב ראש.
          </h2>
          <p className="text-gray-500 text-lg">בלי התקנות מסובכות. בלי ללמוד מערכת חדשה. בלי לשבור את הראש.</p>
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
              <div>
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
