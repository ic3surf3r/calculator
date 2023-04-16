const buttons = document.querySelector(".buttons");
const display = document.getElementById("display");
const pluseminus = document.getElementById("plusOrMinus");
let value1;
buttons.addEventListener("click", doSomething);

console.log(value1);

function doSomething(e) {
  const classList = e.target.classList;
  const value = e.target.value;
  switch (true) {
    case classList.contains("number"):
      if (value1 === undefined || value1 === "") {
        numberToDisplay(e.target.value);
      } else {
        display.innerText = "0";
        numberToDisplay(e.target.value);
      }
      break;
    case classList.contains("clear"):
      display.innerText = "0";
      pluseminus.innerText = "";
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

function numberToDisplay(num) {
  if (display.innerText === "0") {
    display.innerText = num;
  } else if (display.innerText.length === 8) {
    return;
  } else {
    display.innerText += num;
  }
}
