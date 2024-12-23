// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsw_daVSM8194eh2stHlfYOlX7mfzHPo4",
  authDomain: "career-hub-e7114.firebaseapp.com",
  projectId: "career-hub-e7114",
  storageBucket: "career-hub-e7114.firebasestorage.app",
  messagingSenderId: "483839861531",
  appId: "1:483839861531:web:5bdf9d5c0ef3ab30c669be",
  measurementId: "G-HS2H9SJWCM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
