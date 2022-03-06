
// import { firebase, initializeApp } from 'firebase/compat/app';
import firebase from "firebase/compat/app";
//  Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC6ZMsded4xIt0MEYwZCu7GAbmH0zDdBo",
    authDomain: "movieup-1b557.firebaseapp.com",
    projectId: "movieup-1b557",
    storageBucket: "movieup-1b557.appspot.com",
    messagingSenderId: "976786035605",
    appId: "1:976786035605:web:8673bf5f81ac28ec0b9c9c",
    measurementId: "G-RHFWJGNYJY"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
