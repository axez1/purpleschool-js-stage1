let age = 16;
let hasLicence = false;
let isDrunk = false;

const canDrive = age >= 18 && hasLicence && !isDrunk;

console.log(`${canDrive ? 'Может' : 'Не может'} управлять транспортным средством`);