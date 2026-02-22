// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHGrbXDB9hAwXrNhOonjEnUlX7Rh4QL1Q",
  authDomain: "react-6345b.firebaseapp.com",
  projectId: "react-6345b",
  storageBucket: "react-6345b.firebasestorage.app",
  messagingSenderId: "829895775126",
  appId: "1:829895775126:web:8d6f25fc9426b8ffadc3b7",
  measurementId: "G-2F4QV9VVGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);