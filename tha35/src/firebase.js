import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBmRFuFU1TqZwh9M-F4iS7OwQFdX4BzYXM",
    authDomain: "instagram-c6105.firebaseapp.com",
    projectId: "instagram-c6105",
    storageBucket: "instagram-c6105.appspot.com",
    messagingSenderId: "581415033831",
    appId: "1:581415033831:web:85d652b9b55b1ed497bb42",
    measurementId: "G-0MC8M6CQNV"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
export {db,auth,storage};
