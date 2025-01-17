import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOJ5fNAHsbye9cSIRk0BwVru3z9geTqnk",
    authDomain: "linkedin-clone-yt-50084.firebaseapp.com",
    projectId: "linkedin-clone-yt-50084",
    storageBucket: "linkedin-clone-yt-50084.firebasestorage.app",
    messagingSenderId: "376353743947",
    appId: "1:376353743947:web:d4e9ed412d774a6aa8d9ce"
};  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };