// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmirZIrHzIfbkh0pGL3avIL3rGX9sX_-A",
  authDomain: "netflix-clone-785f6.firebaseapp.com",
  projectId: "netflix-clone-785f6",
  storageBucket: "netflix-clone-785f6.appspot.com",
  messagingSenderId: "654101974696",
  appId: "1:654101974696:web:cb76fee929ac93c5007c9d",
  measurementId: "G-08YH7RC0GT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
