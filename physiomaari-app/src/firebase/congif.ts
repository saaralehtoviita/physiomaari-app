import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGb0qXUlsbVVRAIhOHLDQLJ_BsjtsCxZ8",
  authDomain: "physiomaari-backend.firebaseapp.com",
  projectId: "physiomaari-backend",
  storageBucket: "physiomaari-backend.firebasestorage.app",
  messagingSenderId: "328730240735",
  appId: "1:328730240735:web:1acd2fa8fbbf494250ab6a",
  measurementId: "G-98J5V607R5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
