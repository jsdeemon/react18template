import React, {FC, useEffect, useState} from 'react'
//components
import SendNotification from './components/SendNotification'
import UserInfo from './components/UserInfo'
// utils
import {messageNotificationPermissionSetup} from './utils/notification'
// styles
import './index.css'


const App = () => {

let loc: any = null;
let show = document.visibilityState !== "visible";


useEffect(() => {
  // asking for permission to send notifications
  messageNotificationPermissionSetup(Notification)
}, [])

// loc = navigator.geolocation.getCurrentPosition(success, error, options)

useEffect(() => {

  // if (loc) {
  //   setLocation(loc);
  // }

  //  (loc != null) ? setLocation(loc) : setLocation(null)
  // console.log(location)
}, [])


  return (
    <div>
 <UserInfo />
   <SendNotification />
<>



{/* { location &&
<>
<p>Latitude: {location.Latitude}</p>
<p>Longitude: {location.Longitude}</p>
</>
} */}

</>
    </div>
  );
}

export default App;
