// Import the functions you need from the SDKs yowu need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDaS3jPuHJKayIqBCbytkkKTro6NDMZU0",
    authDomain: "ashop-d554c.firebaseapp.com",
    projectId: "ashop-d554c",
    storageBucket: "ashop-d554c.appspot.com",
    messagingSenderId: "431532703112",
    appId: "1:431532703112:web:d5802628f3296e3bf24e3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth };