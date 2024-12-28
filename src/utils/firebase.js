// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMMkA7wOhnKKXYu5UMpIcj2qH76diXnGg",
  authDomain: "netflixgpt-e7520.firebaseapp.com",
  projectId: "netflixgpt-e7520",
  storageBucket: "netflixgpt-e7520.firebasestorage.app",
  messagingSenderId: "211055833720",
  appId: "1:211055833720:web:06bcf6eeaeaf15ce73b38d",
  measurementId: "G-TJWLYVX3SG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);