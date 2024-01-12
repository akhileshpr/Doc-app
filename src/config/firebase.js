// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from"firebase/firestore"

// import { getDatabase } from 'firebase/database';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Orh9E4Jp91sJlTbyXmtIFahm7tE30go",
  authDomain: "doc-app-aa8d3.firebaseapp.com",
  projectId: "doc-app-aa8d3",
  storageBucket: "doc-app-aa8d3.appspot.com",
  messagingSenderId: "315330473219",
  appId: "1:315330473219:web:a79a894c59b5e0fc6c0d36",
  measurementId: "G-T1XL8WDQZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
// const analytics = getAnalytics(app);
// return getDatabase(app)