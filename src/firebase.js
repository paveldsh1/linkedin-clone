import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from '@firebase/auth';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDOJ5fNAHsbye9cSIRk0BwVru3z9geTqnk",
    authDomain: "linkedin-clone-yt-50084.firebaseapp.com",
    projectId: "linkedin-clone-yt-50084",
    storageBucket: "linkedin-clone-yt-50084.firebasestorage.app",
    messagingSenderId: "376353743947",
    appId: "1:376353743947:web:d4e9ed412d774a6aa8d9ce"
};  

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };