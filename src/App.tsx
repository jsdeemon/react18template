import React, {FC, useEffect, useState} from 'react'
//components
import SendNotification from './components/SendNotification'
import UserInfo from './components/UserInfo'
// utils
import {messageNotificationPermissionSetup} from './utils/notification'
import { getFingerprint } from './utils/fingerprint/createFingerprint'


// styles
import './index.css'

import { lat } from './utils/location'


const App = () => {

//let loc: any = null;
let show = document.visibilityState !== "visible";

const [latitude, setLatitude] = useState<any>('')
const [longitude, setLongitude] = useState<any>('')
const [fingerprint, setFingerprint] = useState<any>('')

function getPosition() {
  lat(function (latitude: any, longitude:any) {
     // alert("lat: " + latitude + ", lon: " + longitude);
setLatitude(latitude)
setLongitude(longitude)
  });
}

console.log(getFingerprint())

 // Initialize the agent at application startup.
//  const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
//  .then(FingerprintJS => FingerprintJS.load())

// // Get the visitor identifier when you need it.
// fpPromise
//  .then(fp => fp.get())
//  .then(result => {
//    // This is the visitor identifier:
//    const visitorId = result.visitorId
//    console.log(visitorId)
//  })


useEffect(() => {
  // asking for permission to send notifications
  messageNotificationPermissionSetup(Notification)
  getPosition()
  setFingerprint(getFingerprint())
 
}, [])


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 text-center">
          <p>Fingerprint: {fingerprint}</p>
       {latitude && <p>Latitude: {latitude}</p> }  
   {longitude && <p>Longitude: {longitude}</p> }  
 <UserInfo />
        </div>
        <div className="col-md-6">
        <SendNotification />
        </div>
      </div>
  
    </div>
  );
}

export default App;
