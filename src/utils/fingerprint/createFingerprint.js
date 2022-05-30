import { fingerprint_browser } from './browser_finger'
import { fingerprint_canvas } from './canvas_finger'
import { fingerprint_display } from './display_finger';
import { fingerprint_fonts } from './fonts_finger';
import { fingerprint_os } from './os_finger';
import { fingerprint_language } from './language_finger';
import { fingerprint_timezone } from './timezone_finger';
import { fingerprint_formfields } from './formfields_finger'

export function getFingerprint() {
    //set variable hash as 0
    const browser = fingerprint_browser()
    const canvas = fingerprint_canvas()
    const display = fingerprint_display()
    const fonts = fingerprint_fonts()
    const os = fingerprint_os()
    const language = fingerprint_language()
    const timezone = fingerprint_timezone()
    const formfields = fingerprint_formfields()

    const string = browser + canvas + display + fonts + os + language + timezone + formfields
    let hash = 0;
    // if the length of the string is 0, return 0
    if (string.length == 0) return hash;
    for (let i = 0 ;i<string.length ; i++)
    {
    let ch = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + ch;
    hash = hash & hash;
    }
    return hash;
    }