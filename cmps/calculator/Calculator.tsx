import { DateIcon } from '@/data/icons'
import './Calculator.css'

export function Calculator() {
    return (
        <section className="calculator full main-layout rtl">
            <h2>מחשבון שביל גורל</h2>

            <p className="calculator-description">
                תאריך הלידה מהווה מרכיב מרכזי במפה הנומרולוגית,
                ומשקף את מספר נתיב החיים – תדר קבוע שמבטא את הכישורים, הדחפים והכיוון המרכזי של האדם לאורך חייו.
            </p>

            <div className="date">
                <DateIcon />
                <p>הכניסו את תאריך הלידה וגלו מהו מספר הגורל שמלווה אתכם</p>
            </div>

            <hr />
        </section>
    )
}