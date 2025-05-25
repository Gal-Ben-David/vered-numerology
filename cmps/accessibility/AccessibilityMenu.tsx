
import { accessibilityOptions } from '@/data/accessibility-options'

export default function AccessibilityMenu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (value: boolean) => void }) {
    return (
        <div className={`accessibility-menu rtl ${isOpen ? 'show-menu' : ''}`}>
            <h2>כלי נגישות</h2>
            <ul className="accessibility-options">
                {
                    accessibilityOptions.map((option, i) =>
                        <li key={i} onClick={option.callback}>
                            <p className={`li-${i}`}>{option.title}</p>
                            <hr />
                        </li>
                    )}
                <li onClick={() => setIsOpen(false)}>סגירה</li>
                <hr />
                <a href="/accessibility" style={{ textDecoration: 'underline' }}>הצהרת נגישות</a>
            </ul>
        </div>
    )
}