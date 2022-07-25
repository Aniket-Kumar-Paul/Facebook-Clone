import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHqpKj-B1YaHHFcnHoICnCxJhTXdzeYNM",
    authDomain: "facebook-c69e0.firebaseapp.com",
    projectId: "facebook-c69e0",
    storageBucket: "facebook-c69e0.appspot.com",
    messagingSenderId: "542578511866",
    appId: "1:542578511866:web:5f3b876b868850df4a1e43"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };