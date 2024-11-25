const positionLat = 3;
const positionLong = 3;
const addressLat = 1;
const addressLong = 4;

//let rangeLine = Math.sqrt(Math.pow(positionLat - positionLong, 2) + Math.pow(addressLat - addressLong, 2));
const rangeLine = ((positionLat - positionLong) ** 2 + (addressLat - addressLong) ** 2) ** 0.5;

console.log(rangeLine);