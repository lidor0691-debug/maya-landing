import { WA_PRIMARY, WA_SECONDARY } from '@/lib/whatsapp'

export default function Hero() {
  return (
    <section className="section-dark pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(249,115,22,0.12),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.06),_transparent_60%)]" />

      <div className="container-narrow relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-brand-400 text-sm font-semibold">זמין 24/7, גם כשאתה לא</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            כמה כסף העסק שלך מפסיד
            <br />
            <span className="text-brand-500">כי אין מי שעונה בזמן?</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            לקוח שלא מקבל מענה לא נשאר לחכות. הוא עובר לעסק הבא.
            מאיה עונה מיד, ממשיכה את השיחה, וקובעת את הצעד הבא גם כשאתה עסוק.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
            <a
              href={WA_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              בדוק אם זה מתאים לעסק שלך
              <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={WA_SECONDARY}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-base font-medium transition-colors underline underline-offset-4"
            >
              יש לי שאלה
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            לוקח פחות מדקה למלא. ללא התחייבות.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm">
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="text-gray-500 text-xs mr-3">הדמיה של שיחה עם מאיה</span>
          </div>
          <div className="relative bg-gray-900 aspect-video flex items-center justify-center">
            <div className="text-center px-8">
              <div className="w-16 h-16 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand-400 mr-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-base mb-1">ככה זה נראה בפועל</p>
              <p className="text-gray-500 text-sm">הדמיה של שיחה שממשיכה במקום שאתה לא עונה.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
