import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();


firestore.collection('users').doc('mLDWEBYPc29lYzlTNkfv').collection('cartItems').doc('RoMhEmxlYnX0ZOVAiWed');

// Get documents and collections
firestore.doc('/users/mLDWEBYPc29lYzlTNkfv/cartItems/RoMhEmxlYnX0ZOVAiWed');
firestore.collection('/users/mLDWEBYPc29lYzlTNkfv/cartItems');