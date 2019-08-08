import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAUI2sU0AVaZkLk0zSD-lDC6Xbp_xAk7cQ",
    authDomain: "tete-clothing-db.firebaseapp.com",
    databaseURL: "https://tete-clothing-db.firebaseio.com",
    projectId: "tete-clothing-db",
    storageBucket: "",
    messagingSenderId: "679471512646",
    appId: "1:679471512646:web:2ba94559199b6642"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 