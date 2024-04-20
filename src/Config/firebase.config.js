// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTlRGw6CDACcncDY6GFezFwFsBzMx79BM",
  authDomain: "cloud-bistro.firebaseapp.com",
  projectId: "cloud-bistro",
  storageBucket: "cloud-bistro.appspot.com",
  messagingSenderId: "443749923761",
  appId: "1:443749923761:web:1136bdea59d73bdc76db90"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);