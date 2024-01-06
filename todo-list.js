import {addDoc ,collection,db,onSnapshot,serverTimestamp,query,orderBy } from "./firebase.js";

const addTodo = async() => {
let todo = document.getElementById('todo');
console.log(todo.value)
// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "todos"), {
    value: todo.value,
    timeStamp : serverTimestamp(),
    status : 'pending'
});
todo.value = ""
console.log("Document written with ID: ", docRef.id);
}

let addTodoBtn = document.getElementById('addTodoBtn');
addTodoBtn && addTodoBtn.addEventListener('click', addTodo)


let getAllTodoItems = async () => {
    const ref = query(collection(db, "todos") , orderBy('timeStamp' , 'desc'));
    const todoList = document.getElementById('todoList')
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
  todoList.innerHTML = ''
  querySnapshot.forEach((doc) => {
    // console.log(doc.data().timeStamp.toDate())
    //   todoList.push(doc.data());
      todoList.innerHTML += `<li class="list-group-item">${doc.data().value}</li>`
  });
});
}

getAllTodoItems()