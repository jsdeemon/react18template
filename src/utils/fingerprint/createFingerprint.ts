import { fingerprint_browser } from './browser_finger'
import { fingerprint_canvas } from './canvas_finger'
import { fingerprint_display } from './display_finger';
import { fingerprint_fonts } from './fonts_finger';
import { fingerprint_fontsmoothing } from './fontsmoothing_finger'
import { fingerprint_os } from './os_finger';
import { fingerprint_language } from './language_finger';
import { fingerprint_timezone } from './timezone_finger';
import { fingerprint_formfields } from './formfields_finger'
import { fingerprint_touch } from './touch_finger'
import { fingerprint_silverlight } from './silverlight_finger'
import { fingerprint_java } from './java_finger'
import { fingerprint_useragent } from './useragent_finger'
import { fingerprint_ram } from './ram_finger'
import { fingerprint_cpu } from './cpu_finger'
import { fingerprint_gpu } from './gpu_finger'
// cybr53 hash function
import { cyrb53 } from './cybr53hash'



export function getFingerprint() {
    //set variable hash as 0
    let hash: any = 0;
    const browser = fingerprint_browser()
    const canvas = fingerprint_canvas()
    const display = fingerprint_display()
    const fonts = fingerprint_fonts()
    const fontsmoothing = fingerprint_fontsmoothing()
    const os = fingerprint_os()
    const language = fingerprint_language()
    const timezone = fingerprint_timezone()
    const formfields = fingerprint_formfields()
    const touch = fingerprint_touch()
    const silverlight = fingerprint_silverlight()
    const java = fingerprint_java()
    const useragent = fingerprint_useragent()
    const ram = fingerprint_ram()
    const cpu = fingerprint_cpu()
    const gpu = fingerprint_gpu()

    const string = browser + canvas + display + fonts + fontsmoothing + os + language + timezone + formfields + touch + silverlight + java + useragent + ram + cpu + gpu
    
    hash = cyrb53(string)
    return hash;

    }