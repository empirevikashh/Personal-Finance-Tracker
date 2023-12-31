// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore,doc,setDoc} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvoqMTwcj1xFQWEBBhqvt_6oqszpkWfqc",
  authDomain: "personal-finance-tracker-21801.firebaseapp.com",
  projectId: "personal-finance-tracker-21801",
  storageBucket: "personal-finance-tracker-21801.appspot.com",
  messagingSenderId: "75163306773",
  appId: "1:75163306773:web:6ab0310facbdf899a2371c",
  measurementId: "G-CGCV3XHTX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export{db,auth,provider,doc,setDoc};