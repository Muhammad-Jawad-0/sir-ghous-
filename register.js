import {auth , createUserWithEmailAndPassword , onAuthStateChanged ,RecaptchaVerifier ,signInWithPhoneNumber,GoogleAuthProvider , googleProvider , signInWithPopup ,doc, setDoc , db} from './firebase.js'

let addUserToFirestore = async (user) => {
  const res = await setDoc(doc(db, "users", user.uid), {
name: user.displayName,
email : user.email,
verify : user.emailVerified,
photo : user.photoURL,
userId : user.uid
});
onAuthStateChanged(auth, (user) => {
    if(user) {
      addUserToFirestore(user)
      location.replace('profile.html')
    }
  });


console.log('res', res)
    }
  // auth.languageCode = 'en';



  // let confirmtion; // phone wale auth k leye ha

        // <!-- ----------------Start Email & Password------------ -->

  const register = () => {
    console.log('click')
    
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
    
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
    addUserToFirestore(user)
          
          // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
        // <!-- ----------------End Email & Password------------ -->
           


        // <!-- ----------------Start PHONE VERIFICATION------------- -->

      //   const phone = document.getElementById('number').value;
      //   window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
      //     const appVerifier = window.recaptchaVerifier;
      //     signInWithPhoneNumber(auth, `+${phone}`, appVerifier)
      //     .then((confirmationResult) => {
      //         console.log(`Sms sent`)
      //         confirmtion = confirmationResult
      //       }).catch((error) => {
      //           console.log(error)
      //       });
      // }

      
      
      // const verify = () => {
        //   let otp = document.getElementById(`code`).value
        //   confirmtion.confirm(otp).then((result) => {
          //       const user = result.user;
          //       console.log('user' , user)
          //       // ...
          //     }).catch((error) => {
            //       console.log(error.message)
            //     });
            
          }
          // let registerBtn = document.getElementById('registerBtn');
          // registerBtn.addEventListener('click' , register)
    
    // let otiVerification = document.getElementById('otiVerification');
    // otiVerification.addEventListener('click' , verify)
    // <!-- ----------------ENd PHONE VERIFICATION------------- -->

    let registerBtn = document.getElementById('registerBtn');
    registerBtn.addEventListener('click' , register)





    // <!-- ----------------Start Sign In With Google------------- -->








// let signInWithGoogle = () => {
//   signInWithPopup(auth, googleProvider)
//   .then((result) => {
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     const user = result.user;
//     console.log(user , '>>>>>>>>>Users')
//     addUserToFirestore(user)
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     const email = error.customData.email;
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     console.log(errorCode)
//     console.log(errorMessage)
//     console.log(email)
//     console.log(credential)
//     console.log(error.message)
//     // ...
//   });
// }

// let SignInWIthGoogleBtn = document.getElementById(`SignInWIthGoogleBtn`);
// SignInWIthGoogleBtn.addEventListener('click' ,signInWithGoogle )

    // <!-- ----------------End Sign In With Google------------- -->


    // -----------Start Sign In With FaceBook

    //facebook ma boht requrement ha is leye usko nh krre 

    // -----------End Sign In With FaceBook

 