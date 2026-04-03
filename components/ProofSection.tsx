const waMessages = [
  { from: 'client', text: 'היי, רציתי לדעת כמה עולה טיפול?' },
  { from: 'maya',   text: 'היי! המחירים משתנים לפי הטיפול, אבל בדרך כלל זה נע בין ₪250 ל-₪450. איזה טיפול מעניין אותך?' },
  { from: 'client', text: 'ניקוי פנים' },
  { from: 'maya',   text: 'בטח 🙌 ניקוי פנים עומד על ₪280. יש לנו תור פנוי ביום רביעי ב-18:00. מתאים?' },
  { from: 'client', text: 'כן, מושלם' },
  { from: 'maya',   text: 'מעולה, סגור! שמרתי לך את התור. אשלח תזכורת יום לפני.' },
]

const leads = [
  { name: 'דנה כהן',    status: 'נקבע תור',    source: 'וואטסאפ', date: 'היום',    dot: 'bg-green-400' },
  { name: 'אבי לוי',    status: 'ממתין לאישור', source: 'שיחה נכנסת', date: 'אתמול', dot: 'bg-yellow-400' },
  { name: 'מיכל אבוד',  status: 'פולואפ נשלח',  source: 'וואטסאפ', date: 'אתמול',  dot: 'bg-blue-400' },
  { name: 'יוסי מזרחי', status: 'נסגר',          source: 'שיחה נכנסת', date: 'שלשום', dot: 'bg-brand-500' },
]

const flowSteps = ['פנייה', 'תגובה', 'קביעת תור', 'סגירה']

export default function ProofSection() {
  return (
    <section className="section-light py-24">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-3">איך זה נראה בפועל</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
            לא הסברים. תראה בעצמך.
          </h2>
          <p className="text-gray-500 text-lg">שלושה דמואים שמסבירים יותר מכל טקסט.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* DEMO 1 — WhatsApp Chat */}
          <div className="flex flex-col">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col flex-1">
              {/* Header */}
              <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">מאיה</p>
                  <p className="text-green-200 text-xs">מחובר</p>
                </div>
              </div>

              {/* Messages */}
              <div className="bg-[#ECE5DD] flex-1 px-4 py-4 space-y-3">
                {waMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === 'client' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-snug shadow-sm ${
                        msg.from === 'client'
                          ? 'bg-[#DCF8C6] text-gray-800 rounded-br-sm'
                          : 'bg-white text-gray-800 rounded-bl-sm'
                      }`}
                    >
                      {msg.from === 'maya' && (
                        <p className="text-[10px] font-bold text-[#075E54] mb-0.5">מאיה</p>
                      )}
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input bar */}
              <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2 border-t border-gray-200">
                <div className="flex-1 bg-white rounded-full px-4 py-2 text-gray-400 text-xs">
                  הקלד הודעה...
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 text-xs mt-3 font-medium">להמחשה בלבד</p>
          </div>

          {/* DEMO 2 — CRM Dashboard */}
          <div className="flex flex-col">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col flex-1">
              {/* Header */}
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <p className="font-black text-gray-900 text-sm">לידים פעילים</p>
                  <p className="text-gray-400 text-xs mt-0.5">עודכן כרגע</p>
                </div>
                <span className="bg-brand-50 text-brand-600 text-xs font-bold px-2.5 py-1 rounded-full">{leads.length} פעילים</span>
              </div>

              {/* Lead rows */}
              <div className="flex-1 divide-y divide-gray-50">
                {leads.map((lead) => (
                  <div key={lead.name} className="px-5 py-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${lead.dot}`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">{lead.name}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{lead.source} · {lead.date}</p>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
                      {lead.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-gray-100 bg-gray-50">
                <p className="text-gray-400 text-xs text-center">מאיה מעדכנת אוטומטית</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-xs mt-3 font-medium">דמו מערכת</p>
          </div>

          {/* DEMO 3 — Lead Flow */}
          <div className="flex flex-col">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col flex-1">
              <div className="px-5 py-4 border-b border-gray-100">
                <p className="font-black text-gray-900 text-sm">זרימת ליד</p>
                <p className="text-gray-400 text-xs mt-0.5">מפנייה ועד סגירה</p>
              </div>

              <div className="flex-1 flex flex-col justify-center px-6 py-8 gap-2">
                {flowSteps.map((step, i) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`w-full rounded-xl px-4 py-3.5 flex items-center gap-3 ${
                      i === flowSteps.length - 1
                        ? 'bg-brand-500 text-white'
                        : 'bg-gray-50 border border-gray-100 text-gray-700'
                    }`}>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 ${
                        i === flowSteps.length - 1
                          ? 'bg-white/20 text-white'
                          : 'bg-white border border-gray-200 text-gray-500'
                      }`}>
                        {i + 1}
                      </span>
                      <span className="font-semibold text-sm">{step}</span>
                      {i === flowSteps.length - 1 && (
                        <svg className="w-4 h-4 mr-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="w-px h-5 bg-gray-200 my-0.5" />
                    )}
                  </div>
                ))}

                <div className="mt-6 bg-green-50 border border-green-100 rounded-xl p-4 text-center">
                  <p className="text-green-700 font-bold text-sm">ממוצע: מפנייה לסגירה תוך פחות מ-3 דקות</p>
                  <p className="text-green-500 text-xs mt-1">בזמן שאתה עסוק</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 text-xs mt-3 font-medium">סימולציה של זרימת ליד</p>
          </div>

        </div>
      </div>
    </section>
  )
}
