# ReactJS 18 template (webpack + typescript) + features
## This is minimal start template based on ReactJs 18 with some features
### Features:
- browser fingerprinting
- getting user geolocation
- sending push notifications to users
### Usage examples:
```javascript 
getFingerprint() // generatng web browser fingerprint
messageNotificationPermissionSetup(Notification) // Notification functionality setup
showNotification(title, icon, body, delay) // shows notifivation for users with delay
getLanguage() // returns language
getOs() // returns OS 
getRegion() // returns region, for example, Asia, Africa, etc.
getCity() // Returns capital city
```