// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-4680c.firebaseapp.com",
  projectId: "mern-estate-4680c",
  storageBucket: "mern-estate-4680c.appspot.com",
  messagingSenderId: "794408815039",
  appId: "1:794408815039:web:7698f36f9f647fca6d790a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);