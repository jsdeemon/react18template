export function fingerprint_cpu() {
    let cpu: number, strOnError: string;

    strOnError = "Error";
    cpu = 1
 
    try {
        if (navigator.hardwareConcurrency)
          cpu = navigator.hardwareConcurrency
    } catch (err) {
        return strOnError
    }
  
    return cpu 
}