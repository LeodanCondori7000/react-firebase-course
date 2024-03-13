// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHKiTze_oSJRp8cAOzDZ-NQiwIGErcvjo",
  authDomain: "fir-course-1604e.firebaseapp.com",
  projectId: "fir-course-1604e",
  storageBucket: "fir-course-1604e.appspot.com",
  messagingSenderId: "13296179362",
  appId: "1:13296179362:web:5c1af7fdcd402390ce1ffb",
  measurementId: "G-NR5H2PLRS9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
