'use client'
import './Accessibility.css'
import { accessibilityOptions } from '@/data/accessibility-options'
import { AccessibilityIcon } from '@/data/icons'
import { useState } from 'react'


export function Accessibility() {
    const [openAccessibilityMenu, setOpenAccessibilityMenu] = useState(false)

    const toggleMenu = () => {
        setOpenAccessibilityMenu(prev => !prev)
    }

    return (
        <>
            <div className="accessibility-wrapper" onClick={toggleMenu}>
                <AccessibilityIcon />
            </div>

            {openAccessibilityMenu &&
                <div className="accessibility-menu rtl">
                    <h2>כלי נגישות</h2>
                    <ul className="accessibility-options">
                        {
                            accessibilityOptions.map(option =>
                                <>
                                    <li>{option.title}</li>
                                    <hr />
                                </>
                            )
                        }
                    </ul>
                </div>}
        </>
    )
}