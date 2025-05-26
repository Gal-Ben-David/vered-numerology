import './Meetings.css'

export function Meetings() {
    return (
        <section className="meetings cover full main-layout rtl">
            <img
                className="bg-image full"
                src="https://res.cloudinary.com/dvykycdey/image/upload/f_auto,q_auto,w_1440/v1745739241/candle-book-cover_s2jbvl.jpg"
                alt="ספר ונר לאווירה מיסטית"
                loading="lazy"
                aria-hidden="true"
            />

            <h2 className="bold">פגישות אישיות</h2>
            <div className="meeting-description">
                <p>אני מזמינה אתכם לתאם איתי פתיחת מפה נומרולוגית רחבה — בה נגלה יחד את מפת הדרכים האישית שלכם ונביא בהירות
                    והבנה לעיתוי ולמקום שבו אתם נמצאים כעת.
                </p>
                <p>במהלך שיחת הייעוץ נעבוד על יצירת סדר ובהירות במחשבות וברגשות, להרגיע סערות פנימיות ולהתחבר למקום השקט והיציב בתוככם.</p>
                <p>דרך הבנת המסרים שמביא היקום, נזהה את השיעורים, האתגרים והפתרונות שמבקשים להתגלות.</p>
                <p>
                    נגלה באיזו שנה אישית אתם נמצאים, מתי שנת המשוב שלכם, ואילו ניתוקים אנרגטיים חשוב לבצע — כדי לצעוד קדימה בבהירות, בעוצמה ובאמונה.</p>
            </div>

            <a className="btn btn-schedule btn-schedule-meeting bold" href="https://wa.me/972523288279" target="_blank" rel="noopener noreferrer">
                <span>לתיאום פגישה</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4E5130"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" /></svg>
                </span>
            </a>
        </section>
    )
}