import { WA_PRIMARY, WA_SECONDARY } from '@/lib/whatsapp'

export default function FinalCTA() {
  return (
    <section id="contact" className="section-dark py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.15),_transparent_65%)]" />

      <div className="container-narrow relative text-center">
        <p className="text-brand-500 font-bold text-sm uppercase tracking-widest mb-4">מספיק לאבד לקוחות</p>

        <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
          ברגע שאתה מסיים לקרוא את זה,
          <br />
          <span className="text-brand-500">מישהו מנסה להשיג אותך.</span>
        </h2>

        <p className="text-gray-300 text-xl leading-relaxed max-w-xl mx-auto mb-3">
          השאלה היא אם הוא יקבל מענה או ימשיך הלאה.
        </p>

        <p className="text-gray-500 text-base max-w-lg mx-auto mb-10">
          מאיה יכולה להתחיל לענות ללקוחות שלך כבר בימים הקרובים. כל יום שעובר בלעדיה, לידים הולכים לאיבוד.
        </p>

        <div className="max-w-md mx-auto mb-10 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-gray-300 text-base leading-relaxed">
            אנחנו לא עובדים עם כל עסק.
            <br />
            <span className="text-white font-semibold">רק עם עסקים שיש להם כבר פניות ורוצים להפסיק לאבד אותן.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
          <a
            href={WA_PRIMARY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto text-lg px-10 py-5"
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

        <p className="text-gray-500 text-sm mb-8">לוקח פחות מדקה למלא.</p>

        <div className="flex flex-wrap gap-6 justify-center items-center">
          {[
            '14 ימי ניסיון',
            'בלי התחייבות',
            'לא מרשים? לא ממשיכים.',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-gray-400 text-sm">
              <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
