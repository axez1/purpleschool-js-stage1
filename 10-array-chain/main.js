const arr = [1, 40, -5, 10, 0];

const getArray = (array) => {

  return function (number) {
    for (let i = 0; i < array.length; i++) {
      if (number === array[i] && (array[i] < 0 || array[i] === 13 || array[i] > 10)) {
        array.splice(i, 1);
      }
    };
    return array;
  }
}

console.log(getArray(arr)(40));