// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkd-v0q4ZUvF2sb0zQ0kAdynDiiqI3Cik",
  authDomain: "netflixgpt-2801e.firebaseapp.com",
  projectId: "netflixgpt-2801e",
  storageBucket: "netflixgpt-2801e.appspot.com",
  messagingSenderId: "210802369357",
  appId: "1:210802369357:web:c1ea162865f73ed3b28d04",
  measurementId: "G-TS6ZNCCQND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
