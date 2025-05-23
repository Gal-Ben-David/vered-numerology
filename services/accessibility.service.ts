let currentFontSize = 100 // default font size as percentage

export function increaseFont() {
    currentFontSize += 10
    document.documentElement.style.fontSize = `${currentFontSize}%`
}

export function decreaseFont() {
    currentFontSize = Math.max(50, currentFontSize - 10) // prevent too small
    document.documentElement.style.fontSize = `${currentFontSize}%`
}

export function enableHighContrast() {
    document.body.classList.remove('monochrome', 'yellow-black')
    document.body.classList.toggle('high-contrast')
}

export function enableMonochrome() {
    document.body.classList.remove('high-contrast', 'yellow-black')
    document.body.classList.toggle('monochrome')
}

export function yellowBlackContrast() {
    document.body.classList.remove('high-contrast', 'monochrome')
    document.body.classList.toggle('yellow-black')
}

export function setReadableFont() {
    document.body.classList.toggle('readable-font')
}