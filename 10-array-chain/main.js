const arr = [1, 40, -5, 10, 0];

const getArray = (array) => {

  return function (number) {
    for (let i = 0; i < array.length; i++) {
      const resultArray = [];
      if (number === array[i] && (array[i] < 0 || array[i] === 13 || array[i] > 10)) {
        continue;
      }
      resultArray.push(array[i])
    }
    return resultArray
  }
}

console.log(getArray(arr)(40));