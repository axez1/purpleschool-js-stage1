'use strict'

const calcDisplayResult = document.querySelector('.calc__display');
const firstNumberInput = document.querySelector('#first-number');
const secondNumberInput = document.querySelector('#second-number');
const optionButtons = document.querySelectorAll('[data-option]');

optionButtons.forEach(button => {
  button.addEventListener('click', () => {

    const firstNumber = parseFloat(firstNumberInput.value);
    const secondNumber = parseFloat(secondNumberInput.value);
    let result;

    switch (button.dataset.option) {
      case 'plus': result = firstNumber + secondNumber;
        break;
      case 'minus': result = firstNumber - secondNumber;
        break;
      case 'multi': result = firstNumber * secondNumber;
        break;
      case 'division': result = firstNumber / secondNumber;
        break;
      default: result = 'Ошибка';
    }

    calcDisplayResult.textContent = result;
    firstNumberInput.value = '';
    secondNumberInput.value = '';
  });

});