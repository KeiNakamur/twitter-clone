import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyATPfU2y55ZIjDrShhLpicpFnqSiYBvpdQ",
    authDomain: "twitter-clone-fdea4.firebaseapp.com",
    projectId: "twitter-clone-fdea4",
    storageBucket: "twitter-clone-fdea4.appspot.com",
    messagingSenderId: "945848181541",
    appId: "1:945848181541:web:027e396213a9a2ec1f70cc"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;