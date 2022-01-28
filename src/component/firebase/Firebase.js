// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy_pHQHjUU5JigJ0M73BuBdzXIf5Fg6HA",
  authDomain: "logindemo-5fef9.firebaseapp.com",
  projectId: "logindemo-5fef9",
  storageBucket: "logindemo-5fef9.appspot.com",
  messagingSenderId: "432893033139",
  appId: "1:432893033139:web:8dc3f5e464ab68f8c40ec6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth