'use client'
import { DateIcon } from '@/data/icons'
import './Calculator.css'
import { useState } from 'react'
import { CalculatorForm } from './CalculatorForm'
import { PathNumberCard } from '../path-number-card/PathNumberCard'

declare global {
    interface Window {
        plausible?: (eventName: string, options?: { props: Record<string, any> }) => void;
    }
}

export default function Calculator() {
    const [date, setDate] = useState<{ day: string; month: string; year: string }>({
        day: '',
        month: '',
        year: '',
    })
    const [pathNumber, setPathNumber] = useState<number | null>(null)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        if (errorMessage) setErrorMessage('')
        setDate(prev => ({ ...prev, [name]: value }))
    }

    const sumDigits = (num: number): number => {
        const sum = num
            .toString()
            .split('')
            .reduce((acc, curr) => acc + (+curr), 0)

        return sum >= 10 ? sumDigits(sum) : sum
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (date.year.length < 4) {
            setErrorMessage('*שנה צריכה לכלול 4 ספרות')
            return
        }
        if (+date.month <= 0 || +date.month > 12) {
            setErrorMessage('*חודש צריך להיות בין 1 ל-12 ')
            return
        }
        if (+date.day <= 0 || +date.day > 31) {
            setErrorMessage('*יום צריך להיות בין 1 ל-31 ')
            return
        }
        const dayCalc = sumDigits(+date.day)
        const monthCalc = sumDigits(+date.month)
        const yearCalc = sumDigits(+date.year)

        const pathNumber = sumDigits(dayCalc + monthCalc + yearCalc)

        if (window.plausible) {
            window.plausible('CalculatorUsed')
        }

        setPathNumber(pathNumber)
    }

    const clearForm = () => {
        setDate({
            day: '',
            month: '',
            year: '',
        })
        setPathNumber(null)
        setErrorMessage('')
    }

    return (
        <section className="calculator full main-layout rtl" id="calculator">
            <h2>מחשבון שביל גורל</h2>

            <p className="calculator-description">
                תאריך הלידה מהווה מרכיב מרכזי במפה הנומרולוגית,
                ומשקף את מספר נתיב החיים – תדר קבוע שמבטא את הכישורים, הדחפים והכיוון המרכזי של האדם לאורך חייו.
            </p>

            <div className="date">
                <div className="calculator-icon-container">
                    <DateIcon />
                </div>
                <p className="p-regular">הכניסו תאריך לידה וגלו את מספר נתיב החיים שמלווה אתכם</p>
            </div>

            <CalculatorForm
                onSubmit={onSubmit}
                clearForm={clearForm}
                date={date} pathNumber={pathNumber}
                handleChange={handleChange}
                errorMessage={errorMessage} />

            {pathNumber && <PathNumberCard pathNumber={pathNumber} />}
        </section>
    )
}