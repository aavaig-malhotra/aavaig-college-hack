import firebase from 'firebase';
import 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBA-tkg_QQPHZez-OvJbYw2iYXf3KYOPCI',
  authDomain: 'verifigo-4e296.firebaseapp.com',
  projectId: 'verifigo-4e296',
  storageBucket: 'verifigo-4e296.appspot.com',
  messagingSenderId: '1064700887747',
  appId: '1:1064700887747:web:4c61b78acffbe44e759876',
  measurementId: 'G-DXLESFN9C5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export const storage = firebase.storage();

export default firebaseApp;
