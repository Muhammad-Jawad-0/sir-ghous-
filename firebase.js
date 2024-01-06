import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'
import { getAuth , signInWithEmailAndPassword ,createUserWithEmailAndPassword,onAuthStateChanged ,signOut,sendEmailVerification , RecaptchaVerifier ,signInWithPhoneNumber ,GoogleAuthProvider ,signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
import { doc, setDoc ,getFirestore,getDoc,addDoc,collection,onSnapshot,serverTimestamp ,query,orderBy } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'
import { getStorage , ref,uploadBytesResumable,getDownloadURL  } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js'



// Your web app's Firebase configuration  ,createUserWithEmailAndPassword, signInWithEmailAndPassword
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9DpKylw69WnH3FzE2i-jFLAGXYn59RkA",
    authDomain: "fir-practicewith-sirghous.firebaseapp.com",
    projectId: "fir-practicewith-sirghous",
    storageBucket: "fir-practicewith-sirghous.appspot.com",
    messagingSenderId: "37584515653",
    appId: "1:37584515653:web:900ccb2b6b13e874f1a92c",
    measurementId: "G-64SWN7XF1N"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider()
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged ,
    signOut,
    sendEmailVerification ,
    RecaptchaVerifier ,
    signInWithPhoneNumber,
    GoogleAuthProvider ,
    signInWithPopup,
    googleProvider,
    doc,
    setDoc,
    db,
    getDoc ,
    addDoc,
    collection,
    onSnapshot ,
    serverTimestamp,
    query,
    orderBy,
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL ,
    storage
  }