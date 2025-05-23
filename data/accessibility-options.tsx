import { Accessibility } from "@/interfaces/interfaces"
import {
    increaseFont,
    decreaseFont,
    enableHighContrast,
    enableMonochrome,
    yellowBlackContrast,
    setReadableFont
} from '@/services/accessibility.service'

export const accessibilityOptions: Accessibility[] = [
    {
        title: 'הגדלת גופן',
        icon: '',
        callback: increaseFont
    },
    {
        title: 'הקטנת גופן',
        icon: '',
        callback: decreaseFont
    },
    {
        title: 'ניגודיות גבוהה',
        icon: '',
        callback: enableHighContrast
    },
    {
        title: 'מונוכרום',
        icon: '',
        callback: enableMonochrome
    },
    {
        title: 'שחור צהוב',
        icon: '',
        callback: yellowBlackContrast
    },
    {
        title: 'גופן קריא',
        icon: '',
        callback: setReadableFont
    },
]