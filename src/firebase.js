// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyB3f5srQnQNhkMGnc-ivMGbxcd08CZfB08",
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "clone-a0dfa.firebaseapp.com",
  projectId: "clone-a0dfa",
  storageBucket: "clone-a0dfa.appspot.com",
  messagingSenderId: "537758246439",
  appId: "1:537758246439:web:48f6fc8a564d0ad98d5002",
  measurementId: "G-58YSS02DTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app