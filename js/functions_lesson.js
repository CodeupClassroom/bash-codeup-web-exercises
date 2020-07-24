///////////////
// Functions //
///////////////

// Context: We've already been using functions; this lesson will have small, toy examples
// Vocab: function, call, invoke
// function: a reusable peice of code; takes inputs and produces outputs
// call or invoke (a function) means to run the code in that function
// Demo: function calls are expressions just like arithmatic operators; results are replaced with values; builtin fns

var x = 2 + 3 * 6;
// var x = 20;
console.log(x);
// console.log(20);

// var userInput = parseInt(prompt("Please enter a number."));
// var userInput = 10;
// alert('Your number plus one is ' + (userInput + 1));
// alert('Your number plus one is 11');

// substitution model of evaluation


// Demo: Defining our own function -- increment, decrement
// Vocab: argument, parameter, body, return
// argument: a value a function is called with, a value "passed" to the function
// parameter: the placeholder a function is defined with, a kind of variable
// function body: anything between the curly braces
// return: how we get a value out of the function
// Discussion: when will we use functions in practice?
function increment(x) {
    return x + 1;
}

function decrement(x) {
    return x - 1;
}

console.log("10 incremented is " + increment(10));

console.log(increment(decrement(increment(10))));
// console.log(11);

// Mini Exercise: Write a function named addTwo and test it out the same way we've used the increment function.
//
// - What happens if you omit the return statement?
//   the function will return `undefined`
// - What happens if you omit the argument?
//   our function will return NaN... why? There's no value for the parameter, our parameter will hold the value `undefined`
// - What happens if you omit the parameter?
//   Either an Uncaught ReferenceError, *or* any existing variable will be used
// - What other ways can you intentionally "break" function definition and invokation code? What kind of errors do you get?

// Vocab + Demo: Function expression vs declaration; anonymous functions

// function declaration
function increment(x) {
    return x + 1;
}
// function expression
// storing an anonymous function in a variable
var increment = function(x) {
    return x + 1;
};
// you should be able to _read_ both of these; Write whichever brings you more joy
// the two forms are basically equivalent -- they will produce the same results

// Demo: combine increment with user input. How many different functions are being used? How many are user-defined functions?
// Demo: extract number function -- "$123.45" -> 123.45 ; "  $12" -> 12

function incrementUserInput() {
    var userInput = prompt("Please enter a number:");
    return increment(parseInt(userInput));
}

/**
 * Extract a number prefixed with a `$` from a string.
 * "$123.45" -> 123.45
 * "My account balance is $12.01" -> 12.01
 */
function extractNumber(numberString) {
    // figure out where the dollar sign is
    var dollarIndex = numberString.indexOf('$');
    console.log(dollarIndex);
    // take everything *after* the dollar sign
    var justTheNumbers = numberString.substring(dollarIndex + 1, numberString.length);
    console.log(justTheNumbers);
    // turn that string into a number
    return parseFloat(justTheNumbers);
}

///////////
// Scope //
///////////

// Vocab: global, local

// Demo: local variables aren't accessible in the global scope
// Demo: increment function with global and local variables x
// Demo: modifying a variable (str, bool, number) inside of a function

// Summary: which is better, global or local? + IIFEs
