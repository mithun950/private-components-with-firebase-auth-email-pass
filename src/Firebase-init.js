// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEM-3ign4weC08lqnxhsPXG_tzIAzeMtA",
  authDomain: "auth-prectice-private-route.firebaseapp.com",
  projectId: "auth-prectice-private-route",
  storageBucket: "auth-prectice-private-route.firebasestorage.app",
  messagingSenderId: "767421485273",
  appId: "1:767421485273:web:90a9dbeff28990f7822ec8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;