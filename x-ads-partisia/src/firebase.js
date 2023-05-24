import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCXGISjOgmdxwGak5XwdfEu2oR5hm01L2o",
    authDomain: "web3-cookie.firebaseapp.com",
    databaseURL: "https://web3-cookie-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "web3-cookie",
    storageBucket: "web3-cookie.appspot.com",
    messagingSenderId: "363975375269",
    appId: "1:363975375269:web:8a57d4fb3d951c379bd04c",
    measurementId: "G-4H1ET79VFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };