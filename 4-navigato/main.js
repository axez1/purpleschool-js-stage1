let positionLat = 3;
let positionLong = 3;
let addressLat = 1;
let addressLong = 4;

let rangeLine = Math.sqrt(Math.pow(positionLat - positionLong, 2) + Math.pow(addressLat - addressLong, 2));

console.log(rangeLine);