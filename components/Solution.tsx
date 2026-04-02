export default function Solution() {
  return (
    <section className="section-light py-24">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-3">הפתרון</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-6">
            הכירו את מאיה.
            <br />
            <span className="text-brand-600">מישהו שעונה במקומך כשאתה לא זמין.</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            מאיה לא אמורה להרשים.
            <br />
            היא אמורה לעבוד.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {[
            {
              icon: (
                <svg className="w-7 h-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              title: 'עונה לשיחות שלא נענו',
              body: 'כשאתה עסוק, מאיה ממשיכה את השיחה במקום להשאיר את הלקוח באוויר.',
            },
            {
              icon: (
                <svg className="w-7 h-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              ),
              title: 'מגיבה לוואטסאפ תוך שניות',
              body: 'גם אם ההודעה הגיעה בערב, בזמן פגישה, או באמצע יום עמוס.',
            },
            {
              icon: (
                <svg className="w-7 h-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
              title: 'קובעת תורים וממשיכה שיחה',
              body: 'לא רק משאירה פרטים. באמת מקדמת את השיחה.',
            },
            {
              icon: (
                <svg className="w-7 h-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              ),
              title: 'עושה סדר בלידים',
              body: 'מי חם, מי מחכה, ומי צריך טיפול עכשיו.',
            },
            {
              icon: (
                <svg className="w-7 h-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ),
              title: 'שולחת פולואפ אוטומטי',
              body: 'כדי שלידים לא ייעלמו בגלל דחייה קטנה.',
            },
            {
              icon: (
                <svg className="w-7 h-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'נותנת לך תמונה ברורה',
              body: 'מה נכנס, מה נסגר, ועל מה צריך לעבור.',
            },
          ].map((feat) => (
            <div key={feat.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                {feat.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feat.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
          <p className="text-2xl font-black mb-2">מאיה לא ישנה, לא שוכחת, ולא דוחה למחר.</p>
          <p className="text-gray-400 text-lg">היא פשוט עובדת.</p>
        </div>
      </div>
    </section>
  )
}
