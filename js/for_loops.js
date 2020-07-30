function showMultiplicationTable(aNumber){
    for(var c = 1 ; c <= 10 ; c++){
        console.log(aNumber+" x " + c +" = " + (aNumber * c));
    }
}

showMultiplicationTable(7);

// Returns a random integer between min and max.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for(var i = 1 ;i <= 10 ; i++){

    var randomNumber = getRandomInt(20, 200);

    if(randomNumber % 2 === 0){
        console.log(randomNumber + ' even');
    } else {
      console.log(randomNumber + ' odd');
    }
}
