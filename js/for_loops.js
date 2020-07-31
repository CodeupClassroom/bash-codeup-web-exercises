"use strict";

function showMultiplicationTable(aNumber) {
    for (var c = 1; c <= 10; c++) {
        console.log(aNumber + " x " + c + " = " + (aNumber * c));
    }
}

showMultiplicationTable(7);

// Returns a random integer between min and max.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var i = 1; i <= 10; i++) {

    var randomNumber = getRandomInt(20, 200);

    if (randomNumber % 2 === 0) {
        console.log(randomNumber + ' even');
    } else {
        console.log(randomNumber + ' odd');
    }
}

for(var z = 1 ; z <= 9; z++){
    console.log(z.toString().repeat(z));
}

for(var outer = 1 ; outer <= 9; outer++){
    var result = "";

    for(var inner = 1 ; inner <= outer ; inner++){
        // console.log('inner',inner);
        result += outer;
    }

    console.log(result);
}

// for (var i = 1; i <= 9; i++) {
//     var n = 0;
//     for (var k = 0; k < i; k++) {
//         n = i * Math.pow(10, k) + n;
//     }
//     console.log(n)
// }

for(var i = 100; i >= 5 ; i-=5){
    console.log(i);
}