// Import the functions you need from the SDKs you need
import { defaults } from "autoprefixer";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwcpwet5JWXs2XuhKpeESz6_5j1yv0osQ",
    authDomain: "auth-router-context-13da1.firebaseapp.com",
    projectId: "auth-router-context-13da1",
    storageBucket: "auth-router-context-13da1.appspot.com",
    messagingSenderId: "602984521248",
    appId: "1:602984521248:web:0bf76aa32474fc5319e645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
