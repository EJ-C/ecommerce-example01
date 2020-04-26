import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCB_jVY-Xum1k8xTO8zSUxXmmJVGeGZLQc",
    authDomain: "ecommerce-ej-db.firebaseapp.com",
    databaseURL: "https://ecommerce-ej-db.firebaseio.com",
    projectId: "ecommerce-ej-db",
    storageBucket: "ecommerce-ej-db.appspot.com",
    messagingSenderId: "185638683676",
    appId: "1:185638683676:web:c70eebccff258dd56e8bd9",
    measurementId: "G-HDZ4Z9FNYC"
};

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
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
