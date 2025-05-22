import './page.css'


export default function AccessibilityPage() {

    return (
        <section className="accessibility rtl" style={{ maxWidth: 700, margin: '40px auto', padding: '0 20px', }}>
            <h1>הצהרת נגישות</h1>

            <p>ברוכים הבאים לכרטיס הדיגיטלי של ורד בן דוד.</p>

            <p>
                אנו מחויבים להנגיש את האתר ככל הניתן לכלל המשתמשים, תוך הקפדה על שימוש בתגיות HTML תקניות, מתן טקסט חלופי לתמונות (<code>alt</code>),
                אפשרות ניווט עם מקלדת, וניגודיות צבעים נאותה.
            </p>

            <p>
                הקליניקה הפרטית ממוקמת בתוך בית פרטי, והכניסה אליה כוללת מספר מדרגות, ולכן נגישות פיזית מוגבלת.
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