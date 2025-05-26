
import { accessibilityOptions } from '@/data/accessibility-options'
import Image from "next/image";

export default function AccessibilityMenu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (value: boolean) => void }) {
    return (
        <div className={`accessibility-menu rtl ${isOpen ? 'show-menu' : ''}`}>
            <h2>כלי נגישות</h2>
            <ul className="accessibility-options">
                {accessibilityOptions.map((option, i) =>
                    <li key={i} onClick={option.callback}>
                        <div className="option">
                            <div className="accessibility-icon-wrapper">
                                <Image
                                    src={option.icon}
                                    alt=""
                                    width={15}
                                    height={15}
                                    className="accessibility-icon"
                                    loading="lazy"
                                />
                            </div>
                            <p className={`li-${i}`}>{option.title}</p>
                        </div>
                    </li>)}

                <li onClick={() => setIsOpen(false)}>
                    <div className="option">
                        <div className="accessibility-icon-wrapper">
                            <Image
                                src="/icons/close-icon.svg"
                                alt="סגירת תפריט נגישות"
                                width={15}
                                height={15}
                                className="accessibility-icon"
                                loading="lazy"
                            />
                        </div>
                        <p>סגירה</p>
                    </div>
                </li>

                <li>
                    <a href="/accessibility" style={{ textDecoration: 'underline' }}>הצהרת נגישות</a>

                </li>
            </ul>
        </div>
    )
}