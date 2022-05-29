export function getLanguage() {
    let lang = window.navigator.language
    switch (lang.split('-')[0]) {
        case 'en':
            return 'English'
            break
        case 'ru':
            return 'Russian'
            break
        default:
            return 'English'
    }
}