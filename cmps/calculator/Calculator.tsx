'use client'
import { DateIcon } from '@/data/icons'
import './Calculator.css'
import { useState } from 'react'

export function Calculator() {
    const [date, setDate] = useState<number | null>(0)
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

            <form className="date-calculator-form">
                <div className="date-inputs">
                    <label className="date-input">
                        <span>יום</span>
                        <input className="day-input" type="number" inputMode="numeric" pattern="[0-9]*" placeholder="DD" required />
                    </label>
                    <label className="date-input">
                        <span>חודש</span>
                        <input className="month-input" type="number" inputMode="numeric" pattern="[0-9]*" placeholder="MM" required />
                    </label>
                    <label className="date-input">
                        <span>שנה</span>
                        <input className="year-input" type="number" inputMode="numeric" pattern="[0-9]*" placeholder="YYYY" required />
                    </label>
                </div>

                <button className="btn bold btn-calculator">חשב</button>
            </form>
            <hr />
        </section>
    )
}