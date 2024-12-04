const queryObjectParam = {
  search: 'Вася',
  take: 10,
};

const getQueryRequest = (queryObject) => {

  const queryParams = Object.keys(queryObject)
    .map(key => `${key}=${queryObject[key]}`)
    .join('&');

  return queryParams;
}

console.log(getQueryRequest(queryObjectParam));