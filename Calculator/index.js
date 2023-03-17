import Calculator from "./calculator.js";

const btns = [...document.querySelectorAll("button")];
const primaryData = document.querySelector("[data-primary-operand]");
const operatoinData = document.querySelector("[data-operation]");
const secondaryData = document.querySelector("[data-secondary-operand]");

const calculator = new Calculator(primaryData, operatoinData, secondaryData);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.matches("[data-all-clear]")) {
      calculator.clear();
    }

    if (e.target.matches("[data-number]")) {
    //   primaryData.textContent = e.target.textContent;
      calculator.addNumber(e.target.textContent);
    }

    if (e.target.matches("[data-delete]")) {
      // Deletes the end number
      calculator.removeNumber();
    }

    if (e.target.matches("[data-operation]")) {
      // Either adds, subtracts, multiplies, or divides a number
      calculator.chooseOperator(e.target.textContent);
    }

    if (e.target.matches("[data-equals]")) {
      // Add the total
      calculator.total();
    }
  });
});
