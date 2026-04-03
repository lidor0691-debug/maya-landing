export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 py-10">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white font-black text-xl tracking-tight">
            מאיה<span className="text-brand-500">.</span>
          </span>

          <div className="flex gap-6">
            <a href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">מדיניות פרטיות</a>
            <a href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">תנאי שימוש</a>
            <a href="https://wa.me/972524620550?text=היי,%20ראיתי%20את%20המערכת%20של%20מאיה%20ורוצה%20לבדוק%20איך%20זה%20יכול%20לעבוד%20אצלי" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">שלח הודעה</a>
          </div>

          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Maya AI. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}
