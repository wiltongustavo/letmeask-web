import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyDgOrRhqzHUH43AVCfR6eBG0cqQbSt_TVo",
    authDomain: "letmeask-projeto-e3041.firebaseapp.com",
    databaseURL: "https://letmeask-projeto-e3041-default-rtdb.firebaseio.com",
    projectId: "letmeask-projeto-e3041",
    storageBucket: "letmeask-projeto-e3041.appspot.com",
    messagingSenderId: "315010949301",
    appId: "1:315010949301:web:2a4059c3813061efa55efc"
  };

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const database = firebase.database();