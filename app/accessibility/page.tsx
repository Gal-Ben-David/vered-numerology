import './page.css'

export const metadata = {
    title: 'הצהרת נגישות - ורד בן דוד נומרולוגיה קבלית ייעוץ והכוונה',
    description: 'הצהרת נגישות לאתר של ורד בן דוד',
}

export default function AccessibilityPage() {

    return (
        <section className="accessibility-statement rtl" style={{ maxWidth: 700, margin: '40px auto', padding: '0 20px', }}>
            <h1>הצהרת נגישות</h1>

            <p>ברוכים הבאים לכרטיס הדיגיטלי של ורד בן דוד.</p>
            <p>
                האתר נבנה ועוצב תוך התחשבות בעקרונות הנגישות, כולל הקפדה על שימוש בתגיות HTML תקניות, טקסט חלופי לתמונות (alt), התאמות צבעים וקריאות, ואפשרות להגדלת טקסט דרך הדפדפן.
            </p>

            <p>
                הקליניקה הפרטית ממוקמת בתוך בית פרטי, והכניסה אליה כוללת חמש מדרגות, ולכן נגישות פיזית מוגבלת.
            </p>

            <p>
                אם יש צורך בסיוע או סידור מיוחד בקשר לנגישות, נשמח אם תפנו אלינו ונעשה את מירב המאמצים לסייע ולהתאים את השירות.
            </p>

            <h2>פרטי יצירת קשר בנושאי נגישות:</h2>
            <ul>
                <li>דוא"ל: <a href="mailto:vered.benda@gmail.com">vered.benda@gmail.com</a></li>
                <li>טלפון: 052-3288279</li>
            </ul>

            <p className="update-date">תאריך עדכון אחרון: 22 במאי 2025</p>
        </section>
    )
}