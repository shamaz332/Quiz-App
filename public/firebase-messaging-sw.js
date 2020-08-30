importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyCMNjO4BbO5BnT2TfjxAMCJAazaT0-M4iw",
    authDomain: "quizy-983a3.firebaseapp.com",
    databaseURL: "https://quizy-983a3.firebaseio.com",
    projectId: "quizy-983a3",
    storageBucket: "quizy-983a3.appspot.com",
    messagingSenderId: "201474915525",
    appId: "1:201474915525:web:b62681e187dce7344744ac"
  };


  firebase.initializeApp(firebaseConfig);
firebase.messaging();
