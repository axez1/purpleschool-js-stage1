const logicCrypto = (element) => {
  const newElements = element.split('');
  if (newElements.length >= 3) {
    const change1 = newElements[0];
    const change2 = newElements[1];
    const change3 = newElements[2];

    newElements[0] = change3;
    newElements[1] = change2;
    newElements[2] = change1;
  } else {
    const change1 = newElements[0];
    const change2 = newElements[1];

    newElements[0] = change2;
    newElements[2] = change1;
  }
  return newElements.join('');
}

const crypto = (word) => {
  const newWord = logicCrypto(word);
  return newWord;
}

const newWord = crypto('pavel');

const check = (newWord, word) => logicCrypto(newWord) === word;

console.log(crypto('pavel'));
console.log(check(newWord, 'pavel'));