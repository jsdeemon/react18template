# RaactJS 18 template (webpack + typescript) + features
### Features:
- browser info gathering (language, OS, browserName, Region, City, etc.)
- getting user location
- sending push notifications to users from frontend 
### Usage:
```javascript 
getFingerprint() // generatng web browser fingerprint
messageNotificationPermissionSetup(Notification) // Notification functionality setup
showNotification(title, icon, body, delay) // shows notifivation for users with delay
getLanguage() // returns language
getOs() // returns OS 
getRegion() // returns region, for example, Asia, Africa, etc.
getCity() // Returns capital city
```