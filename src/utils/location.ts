// var x = document.getElementById("demo");
export function lat(callback: any) {
  navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      callback.call(null, lat, lon);
  }, function (error) {
      console.log("Something went wrong: ", error);
  });
}

export function getLocation() {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(showPosition);
  } else {
   console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position: any) {
  // x.innerHTML = "Latitude: " + position.coords.latitude +
  // "<br>Longitude: " + position.coords.longitude;
 // console.log(position.coords.longitude)
  return position.coords;
}

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