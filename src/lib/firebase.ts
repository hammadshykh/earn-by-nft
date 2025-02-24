import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
 apiKey: "AIzaSyARDq2ZtI0lRd6wMjIDTwuLDU4lajhKfks",
 authDomain: "nft-web-and-dashboard.firebaseapp.com",
 projectId: "nft-web-and-dashboard",
 storageBucket: "nft-web-and-dashboard.firebasestorage.app",
 messagingSenderId: "956382000946",
 appId: "1:956382000946:web:8b9d67df5d713927f7c92b",
};

// Initialize Firebase services
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
