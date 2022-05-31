export function fingerprint_touch() {
    "use strict";
    let bolTouchEnabled: boolean, bolOut: boolean | null;

    bolTouchEnabled = false;
    bolOut = null;

    try {
        if (document.createEvent("TouchEvent")) {
            bolTouchEnabled = true;
        }
        bolOut = bolTouchEnabled;
        return bolOut;
    } catch (ignore) {
		bolOut = bolTouchEnabled
        return bolOut;
    }
}