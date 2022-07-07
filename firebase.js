import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDGlQMlQWKoO_dCLAJHlTE6pEb2KUqIZqU',
  authDomain: 'khana-shana-354816.firebaseapp.com',
  projectId: 'khana-shana-354816',
  storageBucket: 'khana-shana-354816.appspot.com',
  messagingSenderId: '186375884632',
  appId: '1:186375884632:web:18794e97d13fbf94f81f2d',
  measurementId: 'G-Y3783YZC0C',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
