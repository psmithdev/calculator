console.log("Script loaded");

let firstNumber = "";
let operator = "";
let secondNumber = "";
let shouldResetDisplay = false;

// Get display element
const display = document.querySelector(".display");
console.log("Display element:", display);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Error: Invalid operator";
  }
}

// Handle number button clicks
function handleNumber(number) {
  if (shouldResetDisplay) {
    display.textContent = number;
    shouldResetDisplay = false;
  } else {
    display.textContent =
      display.textContent === "0" ? number : display.textContent + number;
  }
}

// Handle operator button clicks
function handleOperator(op) {
  if (firstNumber === "") {
    firstNumber = display.textContent;
  }
  operator = op;
  shouldResetDisplay = true;
}

// Handle equals button click
function handleEquals() {
  secondNumber = display.textContent;

  if (firstNumber === "" || operator === "" || secondNumber === "") {
    return;
  }

  const result = operate(operator, firstNumber, secondNumber);

  display.textContent = result;

  firstNumber = result;
  operator = "";
  secondNumber = "";
  shouldResetDisplay = true;
}

// Handle clear button click
function handleClear() {
  display.textContent = "0";
  firstNumber = "";
  operator = "";
  secondNumber = "";
  shouldResetDisplay = false;
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Number buttons
  const numberButtons = document.querySelectorAll(".numbers button");
  console.log("Number buttons found:", numberButtons.length);
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Number button clicked:", button.textContent);
      handleNumber(button.textContent);
    });
  });

  // Operator buttons
  console.log("Setting up operator buttons...");
  document
    .querySelector(".add")
    .addEventListener("click", () => handleOperator("+"));
  document
    .querySelector(".subtract")
    .addEventListener("click", () => handleOperator("-"));
  document
    .querySelector(".multiply")
    .addEventListener("click", () => handleOperator("*"));
  document
    .querySelector(".divide")
    .addEventListener("click", () => handleOperator("/"));

  // Equals button
  const equalsButton = document.querySelector(".equals");
  if (equalsButton) {
    equalsButton.addEventListener("click", () => {
      console.log("Equals button clicked");
      handleEquals();
    });
  }

  // Clear button
  const clearButton = document.querySelector(".clear");
  if (clearButton) {
    clearButton.addEventListener("click", () => {
      console.log("Clear button clicked");
      handleClear();
    });
  }

  console.log("Event listeners set up");
});
