let firstNumber;
let secondNumber;
let operator;
let nextInput = "firstNumber";

function add(a, b) {
  return a + b;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(array) {
  let array2 = array;
  const sumValue2 = array2.reduce((a, b) => a * b);
  return sumValue2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operation) {
  if (operation === "add") {
    return add(num1, num2);
  } else if (operation === "subtract") {
    return subtract(num1, num2);
  } else if (operation === "multiply") {
    return multiply([num1, num2]);
  } else if (operation === "divide") {
    return divide(num1, num2);
  } else {
    console.log("not a valid choice");
    return;
  }
}

// console.log(operate(4, 4, "add"));

document.body.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    console.log(event.target.textContent);

    let displayValue = document.querySelector(".display");
    displayValue.textContent += event.target.textContent;

    if (event.target.classList.contains("clear")) {
      displayValue.textContent = "";
    }
  }
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", buttonClick);
});

function buttonClick() {
  if (nextInput === "firstNumber") {
    firstNumber = this.className;
    nextInput = "operator";
    updateFirstNumberDisplay(firstNumber);
  } else if (nextInput === "operator") {
    operator = this.className;
    nextInput = "secondNumber";
    updateOperatorDisplay(operator);
  } else if (nextInput === "secondNumber") {
    secondNumber = this.className;
    nextInput = "firstNumber";
    updateSecondNumberDisplay(secondNumber);
  }
}

function updateFirstNumberDisplay(value) {
  document.getElementById("firstNumberDisplay").innerText = "First: " + value;
}

function updateOperatorDisplay(value) {
  document.getElementById("operatorDisplay").innerText = "Operator: " + value;
}

function updateSecondNumberDisplay(value) {
  document.getElementById("secondNumberDisplay").innerText = "Second: " + value;
}
