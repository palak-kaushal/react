
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZ-6KHhN0IybhVhJ0qrfZCbwdn4cwuyDc",
  authDomain: "kaushal-4b70d.firebaseapp.com",
  projectId: "kaushal-4b70d",
  storageBucket: "kaushal-4b70d.firebasestorage.app",
  messagingSenderId: "560756123967",
  appId: "1:560756123967:web:2b37bf8e97fa4bdb838b8a",
  databaseURL:"https://kaushal-4b70d-default-rtdb.firebaseio.com"
};


 export const app = initializeApp(firebaseConfig);