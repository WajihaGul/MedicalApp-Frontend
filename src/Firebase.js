import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBB3zuC25OL4vLsQ3mCbTzo5h2e5ausYt4",
  authDomain: "chat-6d94b.firebaseapp.com",
  projectId: "chat-6d94b",
  storageBucket: "chat-6d94b.appspot.com",
  messagingSenderId: "258616425228",
  appId: "1:258616425228:web:d2d601da4acaec6eb42729",
  measurementId: "G-N15NJE33Z8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};