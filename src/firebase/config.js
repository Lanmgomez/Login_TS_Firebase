
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMyWoLvZfHxWpHte4TsJRyg-DorZR6o08",
  authDomain: "login-pessoal-with-recaptcha.firebaseapp.com",
  projectId: "login-pessoal-with-recaptcha",
  storageBucket: "login-pessoal-with-recaptcha.appspot.com",
  messagingSenderId: "676721135094",
  appId: "1:676721135094:web:0579cdd173c29c2b2b4bd7",
  measurementId: "G-Z4M4NFE0PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };