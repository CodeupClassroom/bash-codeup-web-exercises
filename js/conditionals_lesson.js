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

var response = generateStatusCodeResponse(302);
console.log(response);

/**
 * Switch
 */

// switch -- more limited if-else chain
// context: less common, but you should be able to read it
// example: http status code in response

/**
 * Ternary Operator
 */

// ternary operator -- conditional expression (as opposed to statement)
// condition ? value_if_true : value_if_false
