import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBOP8KeXyMvZRM8ncyx3aUPuUfEYC1EmBE",
  authDomain: "kowd-d0133.firebaseapp.com",
  projectId: "kowd-d0133",
  storageBucket: "kowd-d0133.appspot.com",
  messagingSenderId: "782451067441",
  appId: "1:782451067441:web:ed77a7dfe9e9509a07a310"
})

const auth = app.auth();
const firestore  = app.firestore();

export {auth, firestore};
export default app;