// const firebaseConfig = {
//   // Config here!
//   apiKey: "AIzaSyBnU3j-MZkbIAFyOodVhcMzthFbruuDUlI",
//   authDomain: "framework-quasar.firebaseapp.com",
//   projectId: "framework-quasar",
//   storageBucket: "framework-quasar.appspot.com",
//   messagingSenderId: "586541369428",
//   appId: "1:586541369428:web:e37c0836d4833acdb005c1",
//   measurementId: "G-L4YS6V292Q"
// }


// firebase.initializeApp(firebaseConfig);
// console.log(firebaseConfig);

// const messaging = firebase.messaging();


// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   return self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });


const firebaseConfig = {
    // Config here!
    apiKey: "AIzaSyBnU3j-MZkbIAFyOodVhcMzthFbruuDUlI",
    authDomain: "framework-quasar.firebaseapp.com",
    projectId: "framework-quasar",
    storageBucket: "framework-quasar.appspot.com",
    messagingSenderId: "586541369428",
    appId: "1:586541369428:web:e37c0836d4833acdb005c1",
    measurementId: "G-L4YS6V292Q"
  }
  
  console.log('firebase-sw ----------')
  
  firebase.initializeApp(firebaseConfig)
  
  const messaging = firebase.messaging()
  
  messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload)
  
    const notificationData = payload.data
    if (notificationData.type !== 'notification') return
    const notificationTitle = notificationData.title
    const notificationOptions = JSON.parse(notificationData.notificationPayload)
  
    if (navigator.setAppBadge) {
      navigator.setAppBadge(notificationData.notificationCount.messages + notificationData.notificationCount.notifications)
    }
    return self.registration.showNotification(notificationTitle, notificationOptions)
  })
 
