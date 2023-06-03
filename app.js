const buttons = document.querySelector(".buttons");
const display = document.getElementById("display");
const pluseminus = document.getElementById("plusOrMinus");
let value1 = "";
let value2 = "";
let operator = "";
const percentage = "percentage";
let awaitOperation = false;
buttons.addEventListener("click", doSomething);

function doSomething(e) {
  const classList = e.target.classList;
  const value = e.target.value;
  switch (true) {
    case classList.contains("number"):
      if (awaitOperation) {
        awaitOperation = false;
        pluseminus.innerText = "";
        display.innerText = "0";
        numberToDisplay(value);
      } else {
        numberToDisplay(value);
      }
      break;

    case classList.contains("clear"):
      display.innerText = "0";
      pluseminus.innerText = "";
      break;

    case classList.contains("plusminus"):
      if (awaitOperation) {
        display.innerText = "0";
      }
      if (pluseminus.innerText === "") {
        pluseminus.innerText = "-";
      } else {
        pluseminus.innerText = "";
      }
      break;

    case classList.contains("period"):
      display.innerText = display.innerText + ".";
      break;

    case classList.contains("equals"):
      value2 = checkIfNegativeValue(display.innerText);
      performOperation(value1, value2, operator);
      value1 = "";
      value2 = "";
      operator = "";
      awaitOperation = false;
      break;

    case classList.contains("addition"):
      if (value1 === "") {
        value1 = checkIfNegativeValue(display.innerText);
        operator = "add";
        awaitOperation = true;
      } else if (awaitOperation) {
        operator = "add";
      } else {
        value2 = checkIfNegativeValue(display.innerText);
        performOperation(value1, value2, operator);
        value1 = checkIfNegativeValue(display.innerText);
        value2 = "";
        operator = "add";
        awaitOperation = true;
      }
      break;

    case classList.contains("subtraction"):
      if (value1 === "") {
        value1 = checkIfNegativeValue(display.innerText);
        operator = "subtract";
        awaitOperation = true;
      } else if (awaitOperation) {
        operator = "subtract";
      } else {
        value2 = checkIfNegativeValue(display.innerText);
        performOperation(value1, value2, operator);
        value1 = checkIfNegativeValue(display.innerText);
        value2 = "";
        operator = "subtract";
        awaitOperation = true;
      }
      break;

    case classList.contains("multiplication"):
      if (value1 === "") {
        value1 = checkIfNegativeValue(display.innerText);
        operator = "multiply";
        awaitOperation = true;
      } else if (awaitOperation) {
        operator = "multiply";
      } else {
        value2 = checkIfNegativeValue(display.innerText);
        performOperation(value1, value2, operator);
        value1 = checkIfNegativeValue(display.innerText);
        value2 = "";
        operator = "multiply";
        awaitOperation = true;
      }
      break;

    case classList.contains("division"):
      if (value1 === "") {
        value1 = checkIfNegativeValue(display.innerText);
        operator = "divide";
        awaitOperation = true;
      } else if (awaitOperation) {
        operator = "divide";
      } else {
        value2 = checkIfNegativeValue(display.innerText);
        performOperation(value1, value2, operator);
        value1 = checkIfNegativeValue(display.innerText);
        value2 = "";
        operator = "divide";
        awaitOperation = true;
      }
      break;

    case classList.contains("percentage"):
      if (value1 === "") {
        value1 = checkIfNegativeValue(display.innerText);
        performOperation(value1, value2, percentage);
        awaitOperation = false;
        value1 = "";
        value2 = "";
        operator = "";
      } else {
        value2 = checkIfNegativeValue(display.innerText);
        performOperation(value1, value2, percentage);
        value1 = checkIfNegativeValue(display.innerText);
        value2 = "";
      }
      break;
  }
}

function performOperation(value1, value2, operation, option) {
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
    case "percentage":
      if (value2 === 0) {
        result = value1 / 100;
        checkIfNegative(result);
      } else {
        result = (value1 / 100) * value2;
        checkIfNegative(result);
      }
      break;
    default:
      break;
  }
}

function checkIfNegative(result) {
  if (result < 0) {
    pluseminus.innerText = "-";
    result = result * -1;
    display.innerText = `${Number(result.toFixed(4))}`;
  } else {
    pluseminus.innerText = "";
    display.innerText = `${Number(result.toFixed(4))}`;
  }
}

function checkIfNegativeValue(value) {
  if (pluseminus.innerText === "-") {
    const res = +value * -1;
    return res;
  } else {
    return +value;
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
