let currentFontSize = 100 // default font size as percentage

const increaseFont = () => {
    currentFontSize += 10
    document.documentElement.style.fontSize = `${currentFontSize}%`
}

const decreaseFont = () => {
    currentFontSize = Math.max(50, currentFontSize - 10) // prevent too small
    document.documentElement.style.fontSize = `${currentFontSize}%`
}

const enableHighContrast = () => {
    document.body.classList.remove('monochrome', 'yellow-black')
    document.body.classList.toggle('high-contrast')
}

const enableMonochrome = () => {
    document.body.classList.remove('high-contrast', 'yellow-black')
    document.body.classList.toggle('monochrome')
}

const yellowBlackContrast = () => {
    document.body.classList.remove('high-contrast', 'monochrome')
    document.body.classList.toggle('yellow-black')
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