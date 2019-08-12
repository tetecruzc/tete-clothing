import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAUI2sU0AVaZkLk0zSD-lDC6Xbp_xAk7cQ",
  authDomain: "tete-clothing-db.firebaseapp.com",
  databaseURL: "https://tete-clothing-db.firebaseio.com",
  projectId: "tete-clothing-db",
  storageBucket: "tete-clothing-db.appspot.com",
  messagingSenderId: "679471512646",
  appId: "1:679471512646:web:2ba94559199b6642"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;