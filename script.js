/*Galerie photo*/

const panels = document.querySelectorAll(".panel");
/* donnée sur chaque élément avec fonction fléchée */
panels.forEach((panel) => {
  /*lors du Clic sur panel déplace la class active sur l'élément suivant*/
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
/* Fonction pour remettre la class sur l'élément de base*/
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
const message = "Merci pour votre message.";

form.onsubmit = function (event) {
/* Creation li et p pour intégrer les 2 données */
  event.preventDefault();
  const newTodo = document.createElement("li");
  const newTodo2 =document.createElement("p");
/* intégration des données */
  newTodo.innerHTML = inputTodo.value;
  todolist.appendChild(newTodo);
  newTodo2.innerHTML = inputTodo2.value;
  todolist.appendChild(newTodo2);
  

  inputTodo.value = "";
  inputTodo2.value = "";
/* message de confirmation prise en compte */
  alert(message);
};    

