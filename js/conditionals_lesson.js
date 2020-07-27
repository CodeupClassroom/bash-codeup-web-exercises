/**
 * Conditionals
 *
 * Fundamental Code Structures
 *
 * - functions
 * - conditionals
 * - loops
 * - data structures
 *
 * A Code Execution Roadtrip
 */

/**
 * If
 */

// if
// analogy: stopping for gas
// example: navbar custom name greeting
// var navBarMessage = "Welcome Guest!";
// if (userIsLoggedIn) {
//     navBarMessage = "Welcome " + loggedInUsername + "!";
// }
// showNavBarMessage(navBarMessage);

// if (condition) {
//     // this code will execute if condition is true
// }
//
// console.log("one");
// if (" ") {
//     console.log("two");
// }
// console.log("three");

// if-else
// if (condition) {
//     // condition is true
// } else {
//     // condition is false
// }
// analogy: fork in the road
// example: clicking on "buy"; check login status
// function handleUserBuyingItem() {
//     if (userIsLoggedIn) {
//         showCheckoutPage();
//     } else {
//         showLoginPage();
//     }
// }

// console.log("one");
// if (false) {
//     console.log("two A");
// } else {
//     console.log("two B");
// }
// console.log("three");

// if-else if-else
// if (condition1) {
//     // condition1 is true
// } else if (condition2) {
//     // condition2 is true
// } else if (condition3) {
//     // condition3 is true
// }
//
// if (condition1) {
//     // condition1 is true
// } else if (condition2) {
//     // condition2 is true
// } else {
//     // none of the checked conditions are true
// }
// analogy: roundabout
// example: click on "buy"; check login status, check if prime member
// function handleBuyNowClick() {
//     if (! userIsLoggedIn) {
//         showLoginPage();
//     } else if (userIsPrimeMember) {
//         showPrimeShippingOptions();
//     } else {
//         showRegularShippingOptions();
//     }
// }

function generateStatusCodeResponse(statusCode) {
    if (statusCode === 200) {
        return "Everything is Okay!";
    } else if (statusCode === 404) {
        return "Page not found!";
    } else if (statusCode === 500) {
        return "Internal Server Error!";
    } else {
        return "Unknown status code!";
    }
}
//
// var response = generateStatusCodeResponse(302);
// console.log(response);

// // remember: only one conditional branch will execute
// console.log("A");
//
// if (true) {
//     console.log("B");
// } else if (false) {
//     console.log("C");
// } else if (true) {
//     console.log("D");
// } else {
//     console.log("E");
// }
//
// console.log("Done!");

/**
 * Switch
 */

// switch -- more limited if-else chain
// used when we are comparing a single value to multiple other values
// if (value === 1) {
//     // 1
// } else if (value === 2) {
//     // 2
// } else {
//     // ...
// }
// // is the same as:
// switch(value) {
//     case 1:
//         // 1
//         break;
//     case 2:
//         // 2
//         break;
//     default:
//         // ...
// }
// context: less common, but you should be able to read it
// example: http status code in response
// function generateStatusCodeResponse(statusCode) {
//     switch (statusCode) {
//         case 200:
//             return "Everything is Okay!";
//             break;
//         case 404:
//             return "Page not found!";
//             break;
//         case 500:
//             return "Internal Server Error!";
//             break;
//         default:
//             return "Unknown Status Code!";
//             break;
//     }
// }
//
// var response = generateStatusCodeResponse(301);
// console.log(response);


/**
 * Ternary Operator
 *
 * ternary -- 3
 */

// ternary operator -- conditional expression (as opposed to statement)
// condition ? value_if_true : value_if_false
// statement: directs the flow of control within a program
// expression: operators and operands that produce a value

10 * 100; // expression that produces a value; 10, 100 operands, * operator

// any if else that contains a single line for variable assignment
// could be written with a ternary operator.

// var userIsLoggedIn = true;
// var message;
//
// if (userIsLoggedIn) {
//     message = "Welcome Back!";
// } else {
//     message = "Please Register.";
// }
// // rewriting with a ternary operator
// var message = userIsLoggedIn ? "Welcome Back!" : "Please Register";
//

var itemsInCart = 10;
// we're running a promotion for 10% off of your shopping cart,
// 15% off if you have more than 7 items

var discount = itemsInCart > 7 ? 0.15 : 0.1;

// ...
