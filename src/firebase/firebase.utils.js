import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCKL8hyti04nZi-H5btmcbIAdb7SkfqikA",
  authDomain: "sherona-clothing-db.firebaseapp.com",
  databaseURL: "https://sherona-clothing-db.firebaseio.com",
  projectId: "sherona-clothing-db",
  storageBucket: "sherona-clothing-db.appspot.com",
  messagingSenderId: "557952818681",
  appId: "1:557952818681:web:6fec8f3996c26b0f92b128",
  measurementId: "G-JFY9XPZT4Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
