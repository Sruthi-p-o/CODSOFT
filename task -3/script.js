
let display = document.getElementById('display');
let calculation = '';

function clearDisplay() {
  display.value = '';
  calculation = '';
}

function deleteLastChar() {
  let currentValue = display.value;
  display.value = currentValue.slice(0, -1);
  calculation = display.value;
}

function appendChar(char) {
  display.value += char;
  calculation += char;
}

function calculate() {
  try {
    let result = eval(calculation);
    display.value = result;
    calculation = result;
  } catch (error) {
    display.value = 'Error';
    calculation = '';
  }
}