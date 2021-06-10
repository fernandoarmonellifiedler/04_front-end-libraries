import firebase from 'firebase';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCxZQW6LRjpc2sf2NdxC_-O_8E3E6IG-BQ',
  authDomain: 'react-firebase-14630.firebaseapp.com',
  projectId: 'react-firebase-14630',
  storageBucket: 'react-firebase-14630.appspot.com',
  messagingSenderId: '726886323463',
  appId: '1:726886323463:web:7d765f479d0b9a6d0021a2',
  measurementId: 'G-JY2P47BE0J',
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();

export {auth};