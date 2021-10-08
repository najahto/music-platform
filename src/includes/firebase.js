import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAGET3pm-EeNVNLqcyFhioj8l76lKD_qps',
  authDomain: 'music-platform-194cc.firebaseapp.com',
  projectId: 'music-platform-194cc',
  storageBucket: 'music-platform-194cc.appspot.com',
  appId: '1:910744983964:web:9aafb47aaf6ba8f2735059',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');
export {
  auth,
  db,
  usersCollection,
};
