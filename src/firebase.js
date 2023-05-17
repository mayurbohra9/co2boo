
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHznhkg8zSjSnicRXjXpOCN_xFnatH4Po",
  authDomain: "co2boo-1c607.firebaseapp.com",
  // databaseURL: "https://co2boo-1c607-default-rtdb.firebaseio.com/",
  projectId: "co2boo-1c607",
  storageBucket: "co2boo-1c607.appspot.com",
  messagingSenderId: "525683213281",
  appId: "1:525683213281:web:d28ec70af86cf0222148a0",
  measurementId: "G-252NMCX70B"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};