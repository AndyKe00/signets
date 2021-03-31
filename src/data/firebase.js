import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import * as firebaseui from 'firebaseui';



const firebaseConfig = {
  apiKey: "AIzaSyBup1E0OZOdHrfamkbyCcd9ksQ5JX8N4fI",
  authDomain: "iwra-react-6b7e6.firebaseapp.com",
  projectId: "iwra-react-6b7e6",
  storageBucket: "iwra-react-6b7e6.appspot.com",
  messagingSenderId: "1080724576346",
  appId: "1:1080724576346:web:1b16c126a2b8a863236063"
};

// Initialiser firebase
if (firebase.apps.length === 0)
{
  firebase.initializeApp(firebaseConfig);
}

// Initialiser firestore
const dbFirestore = firebase.firestore();

// Exporter la reference a Firestore
export default dbFirestore;

// Initialiser FirebaseUI
export const instanceFbUI = new firebaseui.auth.AuthUI(firebase.auth());
