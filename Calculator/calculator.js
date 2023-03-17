export default class Calculator {
  constructor(primaryData, operationData, secondaryData) {
    this.primaryData = primaryData;
    this.operationData = operationData;
    this.secondaryData = secondaryData;
    this.clear();
  }

  clear() {
    this.primaryData.textContent = 0;
    this.operationData.textContent = "";
    this.secondaryData.textContent = "";
  }

  addNumber(number) {
    if (this.primaryData.textContent === "0") {
      this.primaryData.textContent = "";
    }
    this.primaryData.textContent += number;
  }

  removeNumber() {
    this.primaryData.textContent -= number;
  }
}
