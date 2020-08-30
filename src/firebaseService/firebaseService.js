import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCMNjO4BbO5BnT2TfjxAMCJAazaT0-M4iw",
    authDomain: "quizy-983a3.firebaseapp.com",
    databaseURL: "https://quizy-983a3.firebaseio.com",
    projectId: "quizy-983a3",
    storageBucket: "quizy-983a3.appspot.com",
    messagingSenderId: "201474915525",
    appId: "1:201474915525:web:b62681e187dce7344744ac"
  };


// auto notification 
function randomNotification() {

    var notifTitle = "Hi there"
    var notif = new Notification(notifTitle);
    setTimeout(randomNotification, 30000);
}
// auto notification  end
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function requestPermission() {
  console.log("Requesting permission...");
  // [START request_permission]
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
        randomNotification();
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log(currentToken);
          } else {
            console.log("no id");
          }
        }) .catch((err)=>
        {
          console.log(err)
        })
       
    }
  });
}
