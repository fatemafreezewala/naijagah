// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-1aY2naNyQddNJ36yH02-WKSW9dda8xU",
  authDomain: "naijagah-test.firebaseapp.com",
  projectId: "naijagah-test",
  storageBucket: "naijagah-test.appspot.com",
  messagingSenderId: "898486057509",
  appId: "1:898486057509:web:4e842777521e1254ce9dcc",
  measurementId: "G-QLRRD39PZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
export {db}