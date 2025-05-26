import { Accessibility } from "@/interfaces/interfaces"
import { accessibilityService } from "@/services/accessibility.service"

export const accessibilityOptions: Accessibility[] = [
    {
        title: 'הגדלת גופן',
        icon: '/icons/big-font-icon.svg',
        callback: accessibilityService.increaseFont
    },
    {
        title: 'הקטנת גופן',
        icon: '/icons/small-font-icon.svg',
        callback: accessibilityService.decreaseFont
    },
    {
        title: 'ניגודיות גבוהה',
        icon: '/icons/high-contrast-icon.svg',
        callback: accessibilityService.enableHighContrast
    },
    {
        title: 'מונוכרום',
        icon: '/icons/monochrome-icon.svg',
        callback: accessibilityService.enableMonochrome
    },
    {
        title: 'שחור צהוב',
        icon: '/icons/yellow-black-contrast-icon.svg',
        callback: accessibilityService.yellowBlackContrast
    },
    {
        title: 'גופן קריא',
        icon: '/icons/readable-font-icon.svg',
        callback: accessibilityService.setReadableFont
    },
    {
        title: 'איפוס',
        icon: '/icons/reset-icon.svg',
        callback: accessibilityService.resetAccessibilitySettings
    },
]