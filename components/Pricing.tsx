const plans = [
  {
    name: 'Starter',
    description: 'מיועד לעסקים שרוצים התחלה חכמה ופשוטה',
    setup: 'החל מ-1,500 ש"ח הקמה',
    monthly: 'החל מ-400 ש"ח לחודש',
    highlight: false,
    cta: 'מתחיל עם Starter',
    features: [
      'מענה לשיחות שלא נענו',
      'צ\'אט וואטסאפ אוטומטי',
      'לכידת לידים',
      'תזכורות תורים',
      'פאנל ניהול בסיסי',
      'הגדרה מלאה לפי הצוות שלך',
    ],
  },
  {
    name: 'Growth',
    description: 'מיועד לעסקים שרוצים יותר שליטה, אוטומציות ותוצאות',
    setup: 'החל מ-2,500 ש"ח הקמה',
    monthly: 'החל מ-800 ש"ח לחודש',
    highlight: true,
    badge: 'הכי פופולרי',
    cta: 'מתחיל עם Growth',
    features: [
      'הכל ב-Starter',
      'זרימות פולואפ מותאמות',
      'קביעת פגישות אוטומטית ליומן',
      'דוחות שבועיים',
      'הודעות פרואקטיביות ללקוחות',
      'תמיכה מועדפת',
    ],
  },
  {
    name: 'Pro',
    description: 'מיועד לעסקים שרוצים מערכת מלאה ומותאמת אישית',
    setup: 'החל מ-5,000 ש"ח הקמה',
    monthly: 'החל מ-1,500 ש"ח לחודש',
    highlight: false,
    cta: 'דברו איתנו על Pro',
    features: [
      'הכל ב-Growth',
      'אינטגרציה ל-CRM',
      'זרימות מורכבות',
      'התאמות מיוחדות לפי העסק',
      'דשבורד מתקדם',
      'מענה ותמיכה מורחבים',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-light py-24">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-3">מחירים</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
            השקעה שמחזירה את עצמה כבר בחודש הראשון
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            לפעמים כבר מהלקוח הראשון שלא הלך למתחרה.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col gap-6 relative ${
                plan.highlight
                  ? 'bg-gray-900 border-brand-500 shadow-2xl shadow-brand-500/20 scale-105'
                  : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className={`text-2xl font-black mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className={`rounded-xl p-4 ${plan.highlight ? 'bg-white/10' : 'bg-gray-50'}`}>
                <div className={`text-lg font-black mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.monthly}
                </div>
                <div className={`text-sm font-medium ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.setup}
                </div>
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/972524620550?text=היי,%20ראיתי%20את%20המערכת%20של%20מאיה%20ורוצה%20לבדוק%20איך%20זה%20יכול%20לעבוד%20אצלי"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center rounded-xl py-3.5 font-bold text-base transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          המחיר הסופי נקבע לפי מה שבאמת צריך בעסק שלך. לא לפי חבילה מנופחת.
        </p>
      </div>
    </section>
  )
}
