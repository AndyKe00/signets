import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import * as firebaseui from 'firebaseui';
import firebaseConfig from './config-secret';

// Initialiser firebase
if (firebase.apps.length === 0)
{
  firebase.initializeApp(firebaseConfig);
}

// Inistialiser Furebase Auth
export const instanceFirebaseAuth = firebase.auth();

// Initialiser firestore
export const instanceFirestore = firebase.firestore();

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(instanceFirebaseAuth);
