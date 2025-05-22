import './CalculatorForm.css'

type CalculatorFormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    date: {
        day: string
        month: string
        year: string
    }
    pathNumber: number | null
    clearForm: () => void
    errorMessage: string
}

export function CalculatorForm({ onSubmit, handleChange, date, pathNumber, clearForm, errorMessage }: CalculatorFormProps) {

    return (
        <form className="date-calculator-form" onSubmit={onSubmit}>
            <div className="date-inputs">
                <label className="date-input">
                    <span className="bold">יום</span>
                    <input className="day-input"
                        name="day"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="DD"
                        onChange={handleChange}
                        value={date.day}
                        maxLength={2}
                        autoComplete="off"
                        required />
                </label>

                <label className="date-input">
                    <span className="bold">חודש</span>
                    <input className="month-input"
                        name="month"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="MM"
                        onChange={handleChange}
                        value={date.month}
                        maxLength={2}
                        autoComplete="off"
                        required />
                </label>

                <label className="date-input">
                    <span className="bold">שנה</span>
                    <input className="year-input"
                        name="year"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="YYYY"
                        onChange={handleChange}
                        value={date.year}
                        maxLength={4}
                        autoComplete="off"
                        required />
                </label>
            </div>

            {errorMessage && <p>{errorMessage}</p>}

            <div className="form-buttons">
                <button className="btn bold btn-form btn-calculator">חישוב</button>
                <button className={`btn bold btn-clear btn-calculator ${(date.day || date.month || date.year) ? 'btn-active' : ''}`} onClick={clearForm}>איפוס</button>
            </div>
        </form>
    )
}