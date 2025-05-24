import { Accessibility } from "@/interfaces/interfaces"
import { accessibilityService } from '@/services/accessibility.service'

export const accessibilityOptions: Accessibility[] = [
    {
        title: 'הגדלת גופן',
        icon: '',
        callback: accessibilityService.increaseFont
    },
    {
        title: 'הקטנת גופן',
        icon: '',
        callback: accessibilityService.decreaseFont
    },
    {
        title: 'ניגודיות גבוהה',
        icon: '',
        callback: accessibilityService.enableHighContrast
    },
    {
        title: 'מונוכרום',
        icon: '',
        callback: accessibilityService.enableMonochrome
    },
    {
        title: 'שחור צהוב',
        icon: '',
        callback: accessibilityService.yellowBlackContrast
    },
    {
        title: 'גופן קריא',
        icon: '',
        callback: accessibilityService.setReadableFont
    },
]