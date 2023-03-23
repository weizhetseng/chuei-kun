
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


export const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_FIREBASE_apiKey}`,
    authDomain: `${import.meta.env.VITE_FIREBASE_authDomain}`,
    projectId: `${import.meta.env.VITE_FIREBASE_projectId}`,
    storageBucket: `${import.meta.env.VITE_FIREBASE_storageBucket}`,
    messagingSenderId: `${import.meta.env.VITE_FIREBASE_messagingSenderId}`,
    appId: `${import.meta.env.VITE_FIREBASE_appId}`,
    measurementId: `${import.meta.env.VITE_FIREBASE_measurementId}`
};


// init firebase
const app = initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore(app)
export default db