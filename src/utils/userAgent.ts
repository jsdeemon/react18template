export function getOs() {
    let arr: any = window.navigator.userAgent.split(' ')
    if (arr.includes('Linux')) {
        return 'Linux'
    }
    if (arr.includes('Windows')) {
        return 'Windows'
    }

    return 'Os was not identified'

}

export function getBrowser() {
    let browser = window.navigator.userAgent.split(' ')

    if (browser[6][0] === 'F') {
        return 'Mozilla Firefox'
    }
    if (browser[8][0] === 'C') {
        return 'Google Chrome'
    }

    return 'Browser was not identified'

}

// export const detectBrowser = (navigator.userAgent: any) = {
//     let result: string = 'Other'
//     if (navigator.userAgent.indexOf('YaBrowser') !== -1 ) {
//       result = 'Yandex Browser';
//     } else if (navigator.userAgent.indexOf('Firefox') !== -1 ) {
//       result = 'Mozilla Firefox';
//     } else if (navigator.userAgent.indexOf('MSIE') !== -1 ) {
//       result = 'Internet Exploder';
//     } else if (navigator.userAgent.indexOf('Edge') !== -1 ) {
//       result = 'Microsoft Edge';
//     } else if (navigator.userAgent.indexOf('Safari') !== -1 ) {
//       result = 'Safari';
//     } else if (navigator.userAgent.indexOf('Opera') !== -1 ) {
//       result = 'Opera';
//     } else if (navigator.userAgent.indexOf('Chrome') !== -1 ) {
//       result = 'Google Chrome';
//     }
//     return result;
//   }