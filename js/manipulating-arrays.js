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