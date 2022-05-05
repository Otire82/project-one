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
  newTodo2.innerHTML = inputTodo.value;
  todolist.appendChild(newTodo2);
  

  inputTodo.value = "";
  inputTodo2.value = "";
};    


/*
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){}

      for (let i = 0; i < input.length; i++){        
        if(input.value === "")
        {
        alert('Veuillez remplir les champs manquants'); 
         }
      }
});

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById(".input").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Veuillez remplir les champs manquants!");
  } 
  else {
    document.getElementById("myUL").appendChild(li)
  };
  document.getElementById(".input").value = "";

  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }} */
