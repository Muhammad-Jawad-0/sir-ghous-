import {auth , signInWithEmailAndPassword,onAuthStateChanged} from './firebase.js'

onAuthStateChanged(auth, (user) => {
    if(user) {
      location.replace('./profile.html')
    }
  });


const login = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;



    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
  }

      let loginBtn = document.getElementById('loginBtn');
      loginBtn.addEventListener('click' , login)