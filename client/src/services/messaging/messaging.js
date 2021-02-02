
import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
  // Config here!
  apiKey: "AIzaSyBnU3j-MZkbIAFyOodVhcMzthFbruuDUlI",
  authDomain: "framework-quasar.firebaseapp.com",
  projectId: "framework-quasar",
  storageBucket: "framework-quasar.appspot.com",
  messagingSenderId: "586541369428",
  appId: "1:586541369428:web:e37c0836d4833acdb005c1",
  measurementId: "G-L4YS6V292Q"
}

firebase.initializeApp(config);

// const token = String('');

const messaging = firebase.messaging();
// messaging.usePublicVapidKey('AAAAiJCXCFQ:APA91bFSVGbS5QC-IteNxxwBlss1Xvf9Wio_HkU3DXQFPizQnbiD0MxhuCvRfYPE_b0p2x0WWQNRqPuoMVl84i887LSng83WpcF13hrQP6jDZMRWn-t8wgoNOudApG2Ox_aM-_g0BBYU');
// messaging.getToken({vapidKey: "AAAAiJCXCFQ:APA91bFSVGbS5QC-IteNxxwBlss1Xvf9Wio_HkU3DXQFPizQnbiD0MxhuCvRfYPE_b0p2x0WWQNRqPuoMVl84i887LSng83WpcF13hrQP6jDZMRWn-t8wgoNOudApG2Ox_aM-_g0BBYU"});
messaging.getToken({vapidKey: "BCyOnHzMBmyO7eRcYN7BbHMCIAM66PIoc0n6mqipfCfqK9L2-LgpJ5kE3liFWZrQK0Gm_K6WueeicsyNxh4jRCs"});

messaging.getToken().then((currentToken) => {
  if (currentToken) {
      console.log(currentToken);
      // token.value = currentToken;
  } else {
      // Show permission request.
      console.log('No Instance ID token available. Request permission to generate one.');
  }
});

messaging.onMessage((payload) => {
  console.log(payload);
  const title = 'Title';
  const options = {
      body: payload.data.message,
      icon: '/firebase-logo.png',
  };
  const notification = new Notification(title, options);
  return notification;
});

export {
  // token,
  messaging,
};