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

console.log(operate(4, 4, "add"));

// add event listener for button click and populate display with button value
document.body.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    console.log(event.target.textContent);

    let displayValue = document.querySelector(".display");
    displayValue.textContent += event.target.textContent;

    if (event.target.classList.contains("clear")) {
      displayValue.textContent = "";
    }
  }
  
  // store first and second number into their own variable, use the operator, call it when the equal sign is pressed
  let firstNumber = 
  
});
