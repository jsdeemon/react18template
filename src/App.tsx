import React, {FC, useEffect, useState} from 'react'
//components
import SendNotification from './components/SendNotification'
import UserInfo from './components/UserInfo'
// utils
import {messageNotificationPermissionSetup} from './utils/notification'
import { getFingerprint } from './utils/fingerprint/createFingerprint'
import { lat } from './utils/location'
// styles
import './index.css'



const App = () => {

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

// console.log(navigator.mediaDevices)

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
