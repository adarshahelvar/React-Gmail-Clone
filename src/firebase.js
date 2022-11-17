// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAc9dBd4RiziTMSjAPbBf0TWR2y2KWvwvA",
    authDomain: "react--clone-64669.firebaseapp.com",
    projectId: "react--clone-64669",
    storageBucket: "react--clone-64669.appspot.com",
    messagingSenderId: "981129406982",
    appId: "1:981129406982:web:be50e8b4f9d06580b13187"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }