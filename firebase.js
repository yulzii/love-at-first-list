import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyCJc8dgch6CLHCbBI1dvKJkF93uSBwdi3o",
    authDomain: "artificially-intelligent-a8fd9.firebaseapp.com", 
    projectId: "artificially-intelligent-a8fd9",
    storageBucket: "artificially-intelligent-a8fd9.appspot.com",
    messagingSenderId: "117291152518",
    appId: "1:117291152518:web:288cd51bf7d69870f08d07",
    measurementId: "G-7Y5N9YZ4D1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const database = firebaseApp.firestore();

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
      console.error(err);
      alert(err.message);
    }
    
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(database, "users"), {
        uid: user.uid,
        name, 
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  const logout = () => {
    signOut(auth);
  }

  export {
    auth, 
    database,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
  };