import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt1lAZFBMsMYVSDOzRqJBrj3VNWgijuCg",
    authDomain: "fit-trackr-a4b64.firebaseapp.com",
    projectId: "fit-trackr-a4b64",
    storageBucket: "fit-trackr-a4b64.appspot.com",
    messagingSenderId: "131527476933",
    appId: "1:131527476933:web:bf17e0deb8dc4975dc92ac",
    measurementId: "G-XL0E9RRP7J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;