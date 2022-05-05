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



var btn = document.querySelector('.btn');

btn.addEventListener('click', function(){

      for (let i = 0; i < input.length; i++){        
        if(input.value === "")
        {
        alert('Veuillez remplir les champs manquants'); 
         }
      }
});