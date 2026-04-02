import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'מאיה | פקידה חכמה שעובדת בשבילך 24/7',
  description: 'מאיה עונה לשיחות שפספסת, מגיבה בוואטסאפ תוך שניות, לוכדת לידים ומזמינה תורים — אוטומטית, בלי שתרים אצבע.',
  keywords: 'AI receptionist, WhatsApp bot, missed calls, Israel, business automation, מזכירה דיגיטלית',
  openGraph: {
    title: 'מאיה | פקידה חכמה שעובדת בשבילך 24/7',
    description: 'מאיה עונה לשיחות שפספסת, מגיבה בוואטסאפ תוך שניות, לוכדת לידים ומזמינה תורים — אוטומטית, בלי שתרים אצבע.',
    type: 'website',
    locale: 'he_IL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <body className="bg-white antialiased">{children}</body>
    </html>
  )
}
