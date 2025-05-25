let currentFontSize = 100

const increaseFont = () => {
    currentFontSize += 10
    document.documentElement.style.fontSize = `${currentFontSize}%`
}

const decreaseFont = () => {
    currentFontSize = Math.max(50, currentFontSize - 10)
    document.documentElement.style.fontSize = `${currentFontSize}%`
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

export const accessibilityService = {
    increaseFont,
    decreaseFont,
    enableHighContrast,
    enableMonochrome,
    yellowBlackContrast,
    setReadableFont
}