// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ulogUVONqSJRgil-0srsPSZz87YqD8g",
  authDomain: "next-coder-1c280.firebaseapp.com",
  projectId: "next-coder-1c280",
  storageBucket: "next-coder-1c280.firebasestorage.app",
  messagingSenderId: "750841039037",
  appId: "1:750841039037:web:7f00cb2c6453b42c528fd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);