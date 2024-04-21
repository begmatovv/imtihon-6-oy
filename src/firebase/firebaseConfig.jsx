// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2QM3m9aI82kwJF5IEltN5pDB3MRmRjxE",
  authDomain: "examination-bao.firebaseapp.com",
  projectId: "examination-bao",
  storageBucket: "examination-bao.appspot.com",
  messagingSenderId: "964899810215",
  appId: "1:964899810215:web:72001959d0af7f20e96482",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
