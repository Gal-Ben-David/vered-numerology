let currentFontSize = 100

const increaseFont = () => {
    currentFontSize += 10
    document.documentElement.style.fontSize = `${currentFontSize}%`

    const el = document.querySelector('.li-0') as HTMLElement
    el.style.fontWeight = (currentFontSize > 100) ? 'bold' : 'normal'
}

const decreaseFont = () => {
    currentFontSize = Math.max(100, currentFontSize - 10)
    document.documentElement.style.fontSize = `${currentFontSize}%`

    const el = document.querySelector('.li-0') as HTMLElement
    if (currentFontSize === 100) el.style.fontWeight = 'normal'
}

const enableHighContrast = () => {
    const isAlreadyActive = document.body.classList.contains('yellow-black')
    document.body.classList.remove('monochrome', 'yellow-black')

    document.body.classList.toggle('high-contrast')
    if (isAlreadyActive) return
    else document.body.classList.toggle('contrast-theme')
}

const enableMonochrome = () => {
    document.body.classList.remove('high-contrast', 'yellow-black', 'contrast-theme')
    document.body.classList.toggle('monochrome')
}

const yellowBlackContrast = () => {
    const isAlreadyActive = document.body.classList.contains('high-contrast')
    document.body.classList.remove('high-contrast', 'monochrome')

    document.body.classList.toggle('yellow-black')
    if (isAlreadyActive) return
    else document.body.classList.toggle('contrast-theme')
}

const setReadableFont = () => {
    document.body.classList.toggle('readable-font')
}

const resetAccessibilitySettings = () => {
    document.body.classList.remove('readable-font', 'contrast-theme', 'yellow-black', 'high-contrast', 'monochrome')
    document.documentElement.style.fontSize = '100%'
}

export const accessibilityService = {
    increaseFont,
    decreaseFont,
    enableHighContrast,
    enableMonochrome,
    yellowBlackContrast,
    setReadableFont,
    resetAccessibilitySettings
}