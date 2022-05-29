import React, {useState, useEffect} from 'react'
import { getCity, getRegion } from '../utils/location'
import { getLanguage } from '../utils/language'
import { getBrowser, getOs } from '../utils/userAgent'



const UserInfo = () => {

const [location, setLocation] = useState<any>({});
const [language, setLanguage] = useState('English');
const [os, setOs] = useState('Unknown');
const [browser, setBrowser] = useState('Unknown');

const [timezone, setTimezone] = useState<string>('');
const [region, setRegion] = useState<string>('');
const [city, setCity] = useState<string>('');

useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
setCity(getCity())
setRegion(getRegion())
 // asking for user GeoLocation
  setLanguage(getLanguage())
setOs(getOs())
setBrowser(getBrowser())
}, [])


  return (
    <div>
        <h2>Visitor info:</h2>
        <p>Your language: {language}</p> 
   <p>Your OS: {os}</p>
   <p>Your Browser: {browser}</p>
   <p>Your timezone: {timezone}</p>
   <p>Your region: {region}</p>
   <p>Your city: {city}</p>
</div>
  )
}

export default UserInfo