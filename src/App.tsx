import React, {FC, useEffect, useState} from 'react'
//components
import SendNotification from './components/SendNotification'
import UserInfo from './components/UserInfo'
// utils
import {messageNotificationPermissionSetup} from './utils/notification'
// styles
import './index.css'

import { lat } from './utils/location'


const App = () => {

//let loc: any = null;
let show = document.visibilityState !== "visible";

const [latitude, setLatitude] = useState<any>('')
const [longitude, setLongitude] = useState<any>('')

function getPosition() {
  lat(function (latitude: any, longitude:any) {
     // alert("lat: " + latitude + ", lon: " + longitude);
setLatitude(latitude)
setLongitude(longitude)
  });
}

useEffect(() => {
  // asking for permission to send notifications
  messageNotificationPermissionSetup(Notification)
  getPosition()
 
}, [])


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 text-center">
        <p>Latitude: {latitude}</p> 
    <p>Longitude: {longitude}</p> 
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
