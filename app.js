import {auth , onAuthStateChanged , signOut , db , getDoc ,doc ,addDoc ,collection,onSnapshot} from './firebase.js' //sendEmailVerification

let name = document.getElementById('name');
let email = document.getElementById('email');
let louder = document.getElementById('louder');
let main = document.getElementById('main');


onAuthStateChanged(auth, (user) => {
// //   // sendEmailVerification(auth.currentUser)
// //   // .then(() => {
// //   //   console.log('send email')
// //   //   // Email verification sent!
// //   //   // ...
// //   // });

  if(!user) {
    location.replace('./register.html')
  }
  louder.style.display = "none"
  main.style.display = "flex"
  if (user) {
    console.log(user)
    name.innerHTML = user.phoneNumber
    name.innerHTML = user.email.slice(0, user.email.indexOf('@'))
    email.innerHTML = user.email;

  } else {
console.log('not Login ')
  }
});

const logout = () => {
  signOut(auth).then(() => {
    console.log(res , '>>>Logout')
    window.location = "./index.html"
    // Sign-out successful.
  }).catch((error) => {
    console.log(error.message , '>>>>Error')
    // An error happened.
  });
}
let logoutCall = document.getElementById('logoutBtn')

  if(logoutCall) {
    logoutCall.addEventListener('click', logout)
  }

// for todo-List practice  


  // const addTodo = async() => {
  //   let todo = document.getElementById('todo');
  //   console.log(todo.value)
  //   // Add a new document with a generated id.
  //   const docRef = await addDoc(collection(db, "todos"), {
  //       value: todo.value,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   }
    
  //   let addTodoBtn = document.getElementById('addTodoBtn');
  //   addTodoBtn && addTodoBtn.addEventListener('click', addTodo)
    
    
  //   let getAllTodoItems = async () => {
  //       const ref = collection(db, "todos");
  //       const todoList = document.getElementById('todoList')
  //       const unsubscribe = onSnapshot(ref, (querySnapshot) => {
  //     todoList.innerHTML = ''
  //     querySnapshot.forEach((doc) => {
  //         // todoList.push(doc.data());
  //         todoList.innerHTML += `<li class="list-group-item">${doc.data().value}</li>`
  //     });
  //   });
  //   }
    
  //   getAllTodoItems()