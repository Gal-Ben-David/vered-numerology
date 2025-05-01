import { useState } from "react";
import './LongTxt.css'

type LongTxt = { children: string, length: number, showButton: boolean, className: string }

export function LongTxt({ children, length = 100, showButton = true, className = '' }: LongTxt) {
    const [isShowLong, setIsShowLong] = useState(false)

    function onToggleIsShowLong() {
        setIsShowLong(isShowLong => !isShowLong)
    }

    const isLongText = children.length > length
    const textToShow = (isShowLong || !isLongText) ? children : (children.substring(0, length)) + '...'
    return (
        <section className="long-txt">
            <p className={`txt ${className}`}>{textToShow}</p>
            {isLongText &&
                <div>
                    {showButton && <button className="show-txt-btn bold" onClick={(ev) => { ev.stopPropagation(); onToggleIsShowLong() }}>
                        {isShowLong ? 'הצג פחות' : 'קרא עוד'}
                    </button>}
                </div>
            }
        </section>
    );
}