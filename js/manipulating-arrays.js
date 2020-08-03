var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
console.log(daysOfTheWeek[0]);

daysOfTheWeek.push("Friday"); // these functions actually changes the original
daysOfTheWeek.push("Saturday"); // these functions actually changes the original

daysOfTheWeek.unshift("Sunday");

console.log('after unshift()', daysOfTheWeek);

daysOfTheWeek.pop();

console.log('after pop()', daysOfTheWeek);

daysOfTheWeek.shift();

console.log('after shift()', daysOfTheWeek);

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];

console.log('color ', colors.indexOf("blue"));

colors.unshift('black');

console.log(colors.indexOf("reds")); // returns -1 when element is not found

console.log('color', colors.indexOf("blue"));

// for(var x=0; x< colors.length ;x++){
//     if(colors[x] === 'blue'){
//         console.log("found fav color");
//         break;
//     }
// }

var slice = colors.slice(0, 3); // first param indicates the index to start with including it, second param is to indicate up to which element without including it
console.log(colors);
console.log(slice);

// all the colors from 0 to blue including
var moreSlices = colors.slice(0, colors.indexOf("blues") );
console.log(moreSlices);

colors.reverse();

console.log(colors);

colors.sort();

console.log(colors);

var moreColors = ["aColor", colors , 'zColor'];

console.log(moreColors);




