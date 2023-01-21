const numberButtons = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const resultado = document.querySelector(".resultado");
const operators = document.querySelectorAll(".operator");
const backspace = document.querySelector("#delete");
const equal = document.querySelector("#equal");

function clearInput() {
  resultado.innerText = "";
}

function deleteInput() {
  if (resultado.innerText)
    resultado.innerText = resultado.innerText.slice(0, -1);
}

function result() {
  resultado.innerText = eval(resultado.innerHTML);
}

let lastString;

numberButtons.forEach((number) =>
  number.addEventListener("click", () => {
    const numero = number.getAttribute("id");
    resultado.innerText += `${numero}`;
    lastString = +number.innerText;
  })
);

operators.forEach((item) => {
  item.addEventListener("click", () => {
    const operator = item.getAttribute("id");
    if (typeof lastString !== "number") {
      resultado.innerText = "Inválido";
    } else {
      switch (operator) {
        case "plus":
          resultado.innerText += "+";
          lastString = resultado.innerText;
          break;
        case "less":
          resultado.innerText += "-";
          lastString = resultado.innerText;
          break;
        case "multiple":
          resultado.innerText += "*";
          lastString = resultado.innerText;
          break;
        case "divide":
          resultado.innerText += "/";
          lastString = resultado.innerText;
          break;
      }
    }
  });
});

clear.addEventListener("click", clearInput);

backspace.addEventListener("click", deleteInput);

equal.addEventListener("click", result);
