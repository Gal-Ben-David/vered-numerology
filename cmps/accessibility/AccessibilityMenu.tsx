
import { accessibilityOptions } from '@/data/accessibility-options'

export default function AccessibilityMenu({ isOpen }: { isOpen: boolean }) {
    return (
        <div className={`accessibility-menu rtl ${isOpen ? 'show-menu' : ''}`}>
            <h2>כלי נגישות</h2>
            <ul className="accessibility-options">
                {
                    accessibilityOptions.map((option, i) =>
                        <li key={i} onClick={option.callback}>
                            <p>{option.title}</p>
                            <hr />
                        </li>
                    )}
                <a href="/accessibility" style={{ textDecoration: 'underline' }}>הצהרת נגישות</a>
            </ul>
        </div>
    )
}