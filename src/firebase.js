import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDTs0ZHZkB2Ic3I3VsBcJP5e5jAWDU36As",
    authDomain: "cjstore-689c5.firebaseapp.com",
    projectId: "cjstore-689c5",
    storageBucket: "cjstore-689c5.appspot.com",
    messagingSenderId: "279574929856",
    appId: "1:279574929856:web:30e7fd586feb00f2716825",
    measurementId: "G-6PT99T3P8S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};