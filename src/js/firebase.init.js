// src/js/firebase.init.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Firebase config from .env
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// ✅ Avoid duplicate initialization
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
