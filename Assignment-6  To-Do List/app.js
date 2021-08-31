//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);



//Functions
function addTodo(event){
     //Prevent form from submitting
     event.preventDefault();

     //Todo div
     const todoDiv = document.createElement('div');
     todoDiv.classList.add("todo");

     //todo list
     const newTodo = document.createElement("li")
     newTodo.innerHTML = todoInput.value;

     newTodo.classList.add("todo-item");
     todoDiv.appendChild(newTodo);

     //Check mark button
     const completedButton = document.createElement("button");
     completedButton.innerHTML = "<i class= 'fa fa-check'></i>"
     completedButton.classList.add("complete-btn");
     todoDiv.appendChild(completedButton);
    //Trash button
     const trashButton = document.createElement("button");
     trashButton.innerHTML = "<i class= 'fa fa-trash'></i>"
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);


     //Attaching div to ul
     todoList.appendChild(todoDiv);

     //clear todo input value
     todoInput.value = "";
}

function deleteCheck(e){
   const item = e.target;

   //delete todo
   if(item.classList[0]==="trash-btn"){
    const todo = item.parentElement;
    todo.remove();
   }


   // check mark
   if(item.classList[0] === "complete-btn"){
   const todo = item.parentElement;
   todo.classList.toggle("completed");
   }
}