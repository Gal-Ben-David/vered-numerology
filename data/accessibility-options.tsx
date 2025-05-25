import { Accessibility } from "@/interfaces/interfaces"
import { accessibilityService } from "@/services/accessibility.service"

export const accessibilityOptions: Accessibility[] = [
    {
        title: 'הגדלת גופן',
        icon: '/icons/big-font-icon.svg',
        alt: 'הגדלת גופן',
        callback: accessibilityService.increaseFont
    },
    {
        title: 'הקטנת גופן',
        icon: '/icons/small-font-icon.svg',
        alt: 'הקטנת גופן',
        callback: accessibilityService.decreaseFont
    },
    {
        title: 'ניגודיות גבוהה',
        icon: '/icons/high-contrast-icon.svg',
        alt: 'ניגודיות גבוהה',
        callback: accessibilityService.enableHighContrast
    },
    {
        title: 'מונוכרום',
        icon: '/icons/monochrome-icon.svg',
        alt: 'מונוכרום',
        callback: accessibilityService.enableMonochrome
    },
    {
        title: 'שחור צהוב',
        icon: '/icons/yellow-black-contrast-icon.svg',
        alt: 'ניגודיות שחור צהוב',
        callback: accessibilityService.yellowBlackContrast
    },
    {
        title: 'גופן קריא',
        icon: '/icons/readable-font-icon.svg',
        alt: 'גופן קריא',
        callback: accessibilityService.setReadableFont
    },
    {
        title: 'איפוס',
        icon: '/icons/reset-icon.svg',
        alt: 'איפוס הגדרות נגישות',
        callback: accessibilityService.resetAccessibilitySettings
    },
]