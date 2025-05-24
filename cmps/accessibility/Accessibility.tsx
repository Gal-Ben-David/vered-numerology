'use client'
import './Accessibility.css'
import { AccessibilityIcon } from '@/data/icons'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const AccessibilityMenuCmp = dynamic(() => import('./AccessibilityMenu'), {
    ssr: false,
    loading: () => <div>טוען תפריט נגישות...</div>,
})

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

            <AccessibilityMenuCmp isOpen={openAccessibilityMenu} />
        </>
    )
}