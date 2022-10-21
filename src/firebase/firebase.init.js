// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDygcQOlI0qhJyi0WjMn0VQrcrmdp3ITZY",
    authDomain: "news-portal-60.firebaseapp.com",
    projectId: "news-portal-60",
    storageBucket: "news-portal-60.appspot.com",
    messagingSenderId: "475732612792",
    appId: "1:475732612792:web:d1cf1c195af57f842a464d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app