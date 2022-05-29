export function messageNotificationPermissionSetup(Notification: any) {
    let permission = Notification.permission;

if(permission === "granted"){
 //  showNotification();
} else if(permission === "default"){
   requestAndShowPermission();
} else {
 // alert("Use normal alert");
}
}

function requestAndShowPermission() {
    Notification.requestPermission(function (permission) {
        if (permission === "granted") {
        //    showNotification(title, icon, body)
        }
    });
}

export function showNotification(title: string, icon: string, body: string, timeout: number) {
  //  if(document.visibilityState === "visible") {
  //      return;
  //  }
//    let title = "I love Educative.io";
//    let icon = 'https://homepages.cae.wisc.edu/~ece533/images/zelda.png'; //this is a large image may take more time to show notifiction, replace with small size icon
//    let body = "Message to be displayed";
window.setTimeout(() => {
    let notification = new Notification(title, { body, icon });
    notification.onclick = () => {
        notification.close();
        window.parent.focus();
 }
}, timeout)
  

 
   
}