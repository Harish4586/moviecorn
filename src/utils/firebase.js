// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvL_DbxukHFhER7CNKjZ8_Fu9GIL32RIQ",
  authDomain: "moviecorn-44936.firebaseapp.com",
  projectId: "moviecorn-44936",
  storageBucket: "moviecorn-44936.firebasestorage.app",
  messagingSenderId: "703644294559",
  appId: "1:703644294559:web:e3a42c26ec987d9efe71aa",
  measurementId: "G-X6VN2RT4CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app);

