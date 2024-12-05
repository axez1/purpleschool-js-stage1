const numberOfCreditCard = '4916-9896 4444 2369';

const cleanerStr = (str) => str.trim().replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '');

const validateStr = (str) => {

  const num = cleanerStr(str);

  if (num.length != 16 || isNaN(Number(num))) return false;
  return num;
}

const replaceNumberOfCreditCardToLuhnAlgorithm = (cardNumber) => {
  const charsArray = cardNumber.split('').map(Number);

  for (let char = 0; char < charsArray.length; char++) {
    if (char % 2 === 0) {
      charsArray[char] *= 2;
      if (charsArray[char] > 9) charsArray[char] -= 9;
    }
  }

  const sumNumberOfChar = charsArray.reduce((acc, currentValue) => acc + currentValue, 0);
  console.log(sumNumberOfChar);
  return sumNumberOfChar % 10 === 0;
}

const cleanedNumberOfCreditCard = validateStr(numberOfCreditCard);

const isCorrect = replaceNumberOfCreditCardToLuhnAlgorithm(cleanedNumberOfCreditCard);

console.log(isCorrect);