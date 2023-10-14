// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2U9nC4pFULoXm_5FiFjMskbnCN7LS7Dk",
  authDomain: "midjourney-firebase.firebaseapp.com",
  projectId: "midjourney-firebase",
  storageBucket: "midjourney-firebase.appspot.com",
  messagingSenderId: "660843340364",
  appId: "1:660843340364:web:5e34fd24d769c0bf4d8ae9",
  measurementId: "G-6D8ZMFHJR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
 