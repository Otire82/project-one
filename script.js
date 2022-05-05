const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

/*Formulaire contact*/ 

const form = document.querySelector("form");
const inputTodo = document.querySelector("#todoInput");
const inputTodo2 = document.querySelector("#todoInput2");
const todolist = document.querySelector("#myUl");


form.onsubmit = function (event) {

  event.preventDefault();
  const newTodo = document.createElement("li");
  const newTodo2 =document.createElement("p");
  
  newTodo.innerHTML = inputTodo.value;
  todolist.appendChild(newTodo);
  newTodo2.innerHTML = inputTodo2.value;
  todolist.appendChild(newTodo2);
  

  inputTodo.value = "";
  inputTodo2.value = "";
};    

