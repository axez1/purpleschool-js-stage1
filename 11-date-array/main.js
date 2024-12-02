const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];


function isValidate(array) {

  const parsArray = array.includes('-') ? array.split('-') : array.split('/');

  if (parsArray.length !== 3) return false;

  let day;
  let month;
  let year;

  if (array.includes('-')) {
    [day, month, year] = parsArray;
  } else {
    [month, day, year] = parsArray;
  }

  if (month < 1 || month > 12 || day < 1 || day > 31) return false;

  return true;
}

function formatDate(array) {

  const parsArray = array.includes('-') ? array.split('-') : array.split('/');

  let day;
  let month;
  let year;

  if (array.includes('-')) {
    [day, month, year] = parsArray;
  } else {
    [month, day, year] = parsArray;
  }

  return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`;
}

function getNewArray(enterYourArray) {
  return enterYourArray.filter(isValidate).map(formatDate);
}

const myNewSortedArray = getNewArray(arr);

console.log(myNewSortedArray);