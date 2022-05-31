declare global {
	interface Navigator {
        savePreferences?: any;
        taintEnabled?: any;
        accentColorName?: any;
		__ice_version?: any;
    }

    interface Window {
		ScriptEngine?: any;
		opera?: any;
		chrome?: any;
		atob?: any;
		createPopup?: any;
		attachEvent?: any;
		InstallTrigger?: any;
		XDomainRequest?: any;

	}

	interface Document {
		layers?: any;
		classes?: any;
	}
}

export function fingerprint_truebrowser() {
    "use strict";
    let strBrowser: any, strUserAgent: any, strOut: any;

    strBrowser = "Unknown";
    strUserAgent = null;
    strOut = null;

    strUserAgent = navigator.userAgent.toLowerCase();

	/* Checks for different browsers, cannot use Try/Catch block */
	if (document.all && document.getElementById && navigator.savePreferences && (strUserAgent.indexOf("Netfront") < 0) && navigator.appName !== "Blazer") {
		strBrowser = "Escape 5";
	} else if (navigator.vendor === "KDE") {
		strBrowser = "Konqueror";
	} else if (document.childNodes && !document.all && !navigator.taintEnabled && !navigator.accentColorName) {
		strBrowser = "Safari";
	} else if (document.childNodes && !document.all && !navigator.taintEnabled && navigator.accentColorName) {
		strBrowser = "OmniWeb 4.5+";
	} else if (navigator.__ice_version) {
		strBrowser = "ICEBrowser";
	} else if (window.ScriptEngine && window.ScriptEngine().indexOf("InScript") + 1 && document.createElement) {
		strBrowser = "iCab 3+";
	} else if (window.ScriptEngine && window.ScriptEngine().indexOf("InScript") + 1) {
		strBrowser = "iCab 2-";
	} else if (strUserAgent.indexOf("hotjava") + 1 && (navigator.accentColorName) === "undefined") {
		strBrowser = "HotJava";
	} else if (document.layers && !document.classes) {
		strBrowser = "Omniweb 4.2-";
	} else if (document.layers && !navigator.mimeTypes["*"]) {
		strBrowser = "Escape 4";
	} else if (document.layers) {
		strBrowser = "Netscape 4";
	} else if (window.opera && document.getElementsByClassName) {
		strBrowser = "Opera 9.5+";
	} else if (window.opera && window.getComputedStyle) {
		strBrowser = "Opera 8";
	} else if (window.opera && document.childNodes) {
		strBrowser = "Opera 7";
	} else if (window.opera) {
		strBrowser = "Opera " + window.opera.version();
	} else if (navigator.appName.indexOf("WebTV") + 1) {
		strBrowser = "WebTV";
	} else if (strUserAgent.indexOf("netgem") + 1) {
		strBrowser = "Netgem NetBox";
	} else if (strUserAgent.indexOf("opentv") + 1) {
		strBrowser = "OpenTV";
	} else if (strUserAgent.indexOf("ipanel") + 1) {
		strBrowser = "iPanel MicroBrowser";
	} else if (document.getElementById && !document.childNodes) {
		strBrowser = "Clue browser";
	} else if (navigator.product && navigator.product.indexOf("Hv") === 0) {
		strBrowser = "Tkhtml Hv3+";
	} else if (typeof window.InstallTrigger !== 'undefined') {
		strBrowser = "Firefox";
	} else if (window.atob) {
		strBrowser = "Internet Explorer 10+";
	} else if (window.XDomainRequest && window.performance) {
		strBrowser = "Internet Explorer 9";
	} else if (window.XDomainRequest) {
		strBrowser = "Internet Explorer 8";
	} else if (document.documentElement && document.documentElement.style.maxHeight !== "undefined") {
		strBrowser = "Internet Explorer 7";//xxxxx
	} else if (document.compatMode && document.all) {
		strBrowser = "Internet Explorer 6";//xxxxx
	} else if (window.createPopup) {
		strBrowser = "Internet Explorer 5.5";
	} else if (window.attachEvent) {
		strBrowser = "Internet Explorer 5";
	} else if (document.all && navigator.appName !== "Microsoft Pocket Internet Explorer") {
		strBrowser = "Internet Explorer 4";
	} else if ((strUserAgent.indexOf("msie") + 1) && window.ActiveXObject) {
		strBrowser = "Pocket Internet Explorer";
	} else if (document.getElementById && ((strUserAgent.indexOf("netfront") + 1) || navigator.appName === "Blazer" || navigator.product === "Gecko" || (navigator.appName.indexOf("PSP") + 1) || (navigator.appName.indexOf("PLAYSTATION 3") + 1))) {
		strBrowser = "NetFront 3+";
	} else if (navigator.product === "Gecko" && !navigator.savePreferences) {
		strBrowser = "Gecko engine (Mozilla, Netscape 6+ etc.)";
	} else if (window.chrome) {
		strBrowser = "Chrome";
    }
	strOut = strBrowser;
	return strOut;
}