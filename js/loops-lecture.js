var yesNo = true;

while(yesNo){
    console.log("Ran loop");
    yesNo = confirm("Would you like to continue?");
}

console.log("we finished");

var start = 0;

while(start <= 10){
    console.log(start);
    start++;
}

do {
    console.log("Ran do while loop");
} while( confirm("DOWHILE Would you like to continue?") );

var doStart = 10;

do {
    console.log(doStart);
    doStart--;
} while( doStart >= 0)

for(var x = 0 ; x <= 10 ; x++){
    console.log('x', x);
}

// for loop with a break
var numberToBreakAt = 5;

for(var x = 0 ; x <= 10 ; x++){
    console.log('x', x);
    if(x === numberToBreakAt){
        break;
    }
}

// for loop with a break
var employeeNumberToSkip = 3;
var anotherEmployeeNumberToSkip = 8;

for(var x = 0 ; x <= 10 ; x++){
    if(x === employeeNumberToSkip || x === anotherEmployeeNumberToSkip){
        continue;
    }
    console.log(x + " gets paid");
}

while(true){
    var name = prompt("What's your name?");
    if(name === ""){
        console.log('empty name is not valid');
        break;
    }
    console.log('name is valid');
}