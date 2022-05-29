export const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
 export function success(pos: any): any {
    let crd = pos.coords;
  
    console.log('Your current location:');
    console.log(`latitude: ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`Plus-minus ${crd.accuracy} meters.`);
    return crd;
  };
  
  export function error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  export function getRegion() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[0]
  }

  export function getCity() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[1]
  }