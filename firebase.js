import firebase from 'firebase';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9AyNYJcNhAA1uTSN-v2bI32QwzRWws8s",
  authDomain: "liz-f-b-clone.firebaseapp.com",
  projectId: "liz-f-b-clone",
  storageBucket: "liz-f-b-clone.appspot.com",
  messagingSenderId: "520901811173",
  appId: "1:520901811173:web:5efd723cd63d24bfe6ed0c",
  measurementId: "G-MBH78G0NP6"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage }