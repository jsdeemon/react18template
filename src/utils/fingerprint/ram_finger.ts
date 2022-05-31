declare global {
    interface Navigator {
        deviceMemory?: any;
    }
}
/* 
works on Google Chrome, doesnt work on Firefox
*/
export function fingerprint_ram() {
    let ram: number, strOnError: string;

    strOnError = "Error";
    ram = 0
 
    try {
        if (navigator.deviceMemory)
        ram = navigator.deviceMemory
    } catch (err) {
        return strOnError
    }
   
    return ram 
}