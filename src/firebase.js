// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTu-APij00xy5mq4mvLhdTIE7Krf7Z06s",
  authDomain: "clone-c2bab.firebaseapp.com",
  projectId: "clone-c2bab",
  storageBucket: "clone-c2bab.appspot.com",
  messagingSenderId: "340244039595",
  appId: "1:340244039595:web:aac0bef2d746a32b78b4ee",
  measurementId: "G-VV8GW5HD4Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
