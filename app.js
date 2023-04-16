const buttons = document.querySelector(".buttons");
const display = document.getElementById("display");
const pluseminus = document.getElementById("plusOrMinus");
buttons.addEventListener("click", doSomething);

function doSomething(e) {
  const classList = e.target.classList;
  const value = e.target.value;
  switch (true) {
    case classList.contains("number"):
      if (display.innerText === "0") {
        display.innerText = e.target.value;
      } else if (display.innerText.length === 8) {
        return;
      } else {
        display.innerText += e.target.value;
        console.log(display.innerText.length);
      }
      break;
    case classList.contains("clear"):
      display.innerText = "0";
      break;
    case classList.contains("plusminus"):
      if (pluseminus.innerText === "") {
        pluseminus.innerText = "-";
      } else {
        pluseminus.innerText = "";
      }
      break;
  }
}

function performOperation(value1, value2, operation) {
  let result;
  switch (operation) {
    case "add":
      result = value1 + value2;
      checkIfNegative(result);
      break;
    case "subtract":
      result = value1 - value2;
      checkIfNegative(result);
      break;
    case "multiply":
      result = value1 * value2;
      checkIfNegative(result);
      break;
    case "divide":
      result = value1 / value2;
      checkIfNegative(result);
      break;
    default:
      break;
  }
}

function checkIfNegative(result) {
  if (result < 0) {
    pluseminus.innerText = "-";
    result = result * -1;
    display.innerText = result;
  } else {
    pluseminus.innerText = "";
    display.innerText = result;
  }
}
