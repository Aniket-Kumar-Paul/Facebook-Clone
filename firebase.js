import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDHqpKj-B1YaHHFcnHoICnCxJhTXdzeYNM",
    authDomain: "facebook-c69e0.firebaseapp.com",
    projectId: "facebook-c69e0",
    storageBucket: "facebook-c69e0.appspot.com",
    messagingSenderId: "542578511866",
    appId: "1:542578511866:web:5f3b876b868850df4a1e43"
};

const app = !firebase.apps.length ? firebase.initializaApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };