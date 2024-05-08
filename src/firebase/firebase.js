// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { get } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxWDXuQZ7xOeO4XXcP4oK6Xlp7o2iBF5k",
  authDomain: "taskmanag-er.firebaseapp.com",
  projectId: "taskmanag-er",
  storageBucket: "taskmanag-er.appspot.com",
  messagingSenderId: "548685947508",
  appId: "1:548685947508:web:d4ecd2278dbc1f7f09a721",
  measurementId: "G-KX117SGME3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);