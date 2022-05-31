export function fingerprint_connection() {
    let strOnError: any, strConnection: any, strOut: any;

    strOnError = "N/A";
    strConnection = null;
    strOut = null;

    try {
		// only on android
        strConnection = navigator.connection.type;
        strOut = strConnection;
    } catch (err) {
		// return N/A if navigator.connection object does not apply to this device
        return strOnError;
    }
    return strOut;
}