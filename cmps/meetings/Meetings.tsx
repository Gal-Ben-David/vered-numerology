import './Meetings.css'

export function Meetings() {
    return (
        <section className="meetings cover full main-layout rtl">
            <h2>פגישות אישיות</h2>
            <div className="meeting-description">
                <p>אני מזמינה אתכם לתאם איתי פתיחת מפה נומרולוגית רחבה — בה נגלה יחד את מפת הדרכים האישית שלכם ונביא בהירות
                    <span className="bold">  והבנה לעיתוי ולמקום שבו אתם נמצאים כעת.</span>
                </p>
                <p>במהלך שיחת הייעוץ נעבוד על יצירת סדר ובהירות במחשבות וברגשות, להרגיע סערות פנימיות ולהתחבר למקום השקט והיציב בתוככם.</p>
                <p>דרך הבנת המסרים שמביא היקום, נזהה את השיעורים, האתגרים והפתרונות שמבקשים להתגלות.</p>
                <p className="bold">נגלה באיזו שנה אישית אתם נמצאים, מתי שנת המשוב שלכם, ואילו ניתוקים אנרגטיים חשוב לבצע — כדי לצעוד קדימה בבהירות, בעוצמה ובאמונה.</p>
            </div>

            <a className="btn btn-schedule btn-schedule-meeting">
                <span>לקביעת פגישה</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" /></svg>
                </span>
            </a>
        </section>
    )
}