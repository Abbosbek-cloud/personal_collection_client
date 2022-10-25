// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-TUt_Rm9Gcx73eOPYKhuFjyHUglv-w2w",
  authDomain: "personal-collections-1ab1a.firebaseapp.com",
  projectId: "personal-collections-1ab1a",
  storageBucket: "personal-collections-1ab1a.appspot.com",
  messagingSenderId: "632107099413",
  appId: "1:632107099413:web:3cc72ec161a4841624351c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
