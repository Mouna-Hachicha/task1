let button = document.querySelector("button");

let get = document.getElementById("a");
get.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

      let liste = document.querySelector("ul");

      let input = document.querySelector("input");

      button.addEventListener("click", addTodo);

      function addTodo() {
        if (input.value =='') {alert('please enter the to do item ')}
         else {
        liste.innerHTML += `<li> <input type="checkbox" id="check"> ${input.value} <input type="button" value="Delete" onclick="effacer"> </li>`;
        input.value =''
    }   
      }

      function effacer() {
      
      }

