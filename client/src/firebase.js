// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-boiler-61194.firebaseapp.com",
  projectId: "mern-boiler-61194",
  storageBucket: "mern-boiler-61194.appspot.com",
  messagingSenderId: "597282677127",
  appId: "1:597282677127:web:86ddea46e18b8f5576b322"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);