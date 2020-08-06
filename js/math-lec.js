console.log("Math Object Lecture");

var randomNumber = Math.random();

//console.log(randomNumber);

// 0.1228374623 is great but what if I want a number between 1 and 10?

function getRandomInt(min, max) {
    //Math.floor rounds down.
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// var randomInt = getRandomInt(50, 150);
//
// console.log(randomInt);d

// console.log(Math.round(10.2));
// console.log(Math.round(10.6));
// console.log(Math.round(-10.6));

//Math.ceil() Round up
//console.log(Math.ceil(7.008));

//Math.pow() returns the power of an integer.
//console.log(Math.pow(2, 16));

//Math.sqrt() return the square root of the number given.
// var sqrtOf9 = Math.sqrt(9);
// console.log(sqrtOf9);

console.log('before ' + Math.PI);
Math.PI = 100;
console.log('after ' + Math.PI);
