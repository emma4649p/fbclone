import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup

const firebaseConfig = {
  apiKey: "AIzaSyC9AyNYJcNhAA1uTSN-v2bI32QwzRWws8s",
  authDomain: "liz-f-b-clone.firebaseapp.com",
  projectId: "liz-f-b-clone",
  storageBucket: "liz-f-b-clone.appspot.com",
  messagingSenderId: "520901811173",
  appId: "1:520901811173:web:5efd723cd63d24bfe6ed0c",
  measurementId: "G-MBH78G0NP6"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }