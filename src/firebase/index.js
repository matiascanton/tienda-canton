import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCcTten1HJM1IN6dr7M4g_U22_Jp1kWjnI",
    authDomain: "shoestore-canton.firebaseapp.com",
    projectId: "shoestore-canton",
    storageBucket: "gs://shoestore-canton.appspot.com",
    messagingSenderId: "497639477473",
    appId: "1:497639477473:web:e24392a31af31bcc1d27a0",
    measurementId: "G-ZFBJF5RWGV"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}