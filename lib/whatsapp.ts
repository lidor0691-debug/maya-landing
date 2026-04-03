const phone = '972524620550'
const base = `https://wa.me/${phone}?text=`

const primaryMessage = [
  'היי, ראיתי את מאיה ורוצה לבדוק אם זה מתאים לעסק שלי.',
  '',
  'שם העסק:',
  'תחום:',
  'כמה פניות ביום בערך:',
  'מה קורה היום כשלקוח פונה ולא מקבל מענה:',
].join('\n')

const secondaryMessage = 'היי, ראיתי את מאיה ויש לי שאלה'

export const WA_PRIMARY = base + encodeURIComponent(primaryMessage)
export const WA_SECONDARY = base + encodeURIComponent(secondaryMessage)
