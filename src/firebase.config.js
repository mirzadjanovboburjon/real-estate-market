import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4LPJiUntm_GMxKySLFknxKmzG8tPlmLM",
  authDomain: "marketplace-app-a1051.firebaseapp.com",
  projectId: "marketplace-app-a1051",
  storageBucket: "marketplace-app-a1051.appspot.com",
  messagingSenderId: "819439640136",
  appId: "1:819439640136:web:e9e1ceb84d348107cd027d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
