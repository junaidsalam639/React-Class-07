// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection, addDoc , query, where, getDocs , updateDoc , deleteDoc , doc , getDoc} from "firebase/firestore";
import { getStorage , ref, uploadBytes , getDownloadURL, deleteObject } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVsv1MYLThEimC-6EXd4oY7N-960GP-Bw",
  authDomain: "react-85e4f.firebaseapp.com",
  projectId: "react-85e4f",
  storageBucket: "react-85e4f.appspot.com",
  messagingSenderId: "815980757879",
  appId: "1:815980757879:web:3b044e46d938a2bafb1772",
  measurementId: "G-XLDLP79KFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {app , db , query, where, getDocs , getDoc , deleteDoc , doc , updateDoc , storage , collection, addDoc , ref, uploadBytes , getDownloadURL , deleteObject  }
