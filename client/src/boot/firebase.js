import firebase from 'firebase/app'
import '@firebase/messaging'
// import 'firebase/messaging'



const firebaseConfig = {
  apiKey: "AIzaSyBnU3j-MZkbIAFyOodVhcMzthFbruuDUlI",
  authDomain: "framework-quasar.firebaseapp.com",
  projectId: "framework-quasar",
  storageBucket: "framework-quasar.appspot.com",
  messagingSenderId: "586541369428",
  appId: "1:586541369428:web:e37c0836d4833acdb005c1",
  measurementId: "G-L4YS6V292Q"
}


firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()
messaging.onMessage(function (payload) {
  console.log('On message ' + payload)
})

export { messaging }
