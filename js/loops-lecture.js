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