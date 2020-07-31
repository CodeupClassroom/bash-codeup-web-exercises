var num;

while (true) {
    num = parseInt(prompt("Please choose a number between 1 and 50"));
    if (num % 2 !== 0 && num > 0 && num < 51)
        break;
    else continue;
    console.log(num);
    console.log(5);
}
console.log("Number to skip is: " + num);
console.log();
var i = 1;
while (i < 50) {
    if (i === num) {
        console.log("Yikes! Skipping the number: " + num);
        continue;
    }
    console.log("Here is an odd number: " + i);
    i+=2;
}