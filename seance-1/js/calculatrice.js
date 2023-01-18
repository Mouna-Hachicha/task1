let x = document.querySelector("#X");
let y = document.querySelector("#Y");
let result=document.querySelector("h3"); 

function add() {
  result.innerHTML = somme(
    Number(x.value),
    Number(y.value)
  );
}
function somme(x, y) {
  return "Somme : " + (x + y);
}

function soustraction() {
    result.innerHTML = sous(
      Number(x.value),
      Number(y.value)
    );
  }
  function sous(x, y) {
    return "Soustraction : " + (x - y);
  }

  function mul() {
    result.innerHTML = multiplication(
      Number(x.value),
      Number(y.value)
    );
  }
  function multiplication(x, y) {
    return "Multiplication : " + (x * y);
  }

  function div() {
    result.innerHTML = division(
      Number(x.value),
      Number(y.value)
    );
  }
  function division(x, y) {
    return "Division : " + (x / y);
  }