// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { ref, reactive } from 'vue';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyA-lV8R715Tz89MGVpwoD4LCi_os2ibpF4",
    authDomain: "chatroom-f600b.firebaseapp.com",
    projectId: "chatroom-f600b",
    storageBucket: "chatroom-f600b.appspot.com",
    messagingSenderId: "903201744698",
    appId: "1:903201744698:web:78863124b86acd58d69203",
    measurementId: "G-85EXTNPD50"
};
