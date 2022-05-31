export function fingerprint_gpu() {

    let strOnError: any, canvas: any, debugInfo: any, webgl: any, gpu: any;

    canvas = null;
    strOnError = "Error";
    debugInfo = null;
    gpu = 'not detected';

    try {
        canvas = document.createElement("canvas")
        webgl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        debugInfo = webgl.getExtension("webgl_debug_renderer_info")
        gpu = webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    } catch (err) {
        return strOnError
    }
    console.log(gpu)
    return gpu 

}