"use strict";
// console.log("External works!");
//
// // alert("External works!");
//
// // var response = confirm("Is it raining?")
// // console.log("response", response);
//
// var name = prompt("What's your name?");
// console.log(typeof name);
// console.log("length", name.length);
// console.log("name", "The name that you entered is : "+name.toUpperCase());

// alert("Welcome to my website! Please sign your name in the guestbook.")

// var usersFavoriteColor = prompt("What's your favorite color?");
// alert("That's cool, " + usersFavoriteColor + " is my favorite too!");


// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet
// if they're going to like it). If price for a movie per day is $3, how much will you
// have to pay?

var movies = [
    {title: "Brother Bear", days: 5},
    {title: "Hercules", days: 1},
    {title: "The Little Mermaid", days: 3},
]

var pricePerDay = 3;
var totalPrice = 0;

movies.forEach(function(movie) {
    totalPrice += pricePerDay * movie.days;
});

console.log("We will pay: $" + totalPrice.toFixed(2) + ".");

// var pricePerDay = 3;
// var littleMermaidDays = 3;
// var brotherBearDays = 5;
// var herculesDays = 1;
//
// var totalDays = littleMermaidDays + brotherBearDays + herculesDays;
// var totalPrice = totalDays * pricePerDay;
//
// console.log("We will have to pay: $" + totalPrice.toFixed(2) + ".");

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment
// for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var jobsWorked = [
    {company: "Google", rate: 400, hours: 6},
    {company: "Facebook", rate: 350, hours: 10},
    {company: "Amazon", rate: 380, hours: 4},
]

var totalPayment = 0;
jobsWorked.forEach(function(job) {
    var amountPaid = job.rate * job.hours;
    console.log("I made " + amountPaid + " from " + job.company + ".")
    totalPayment += amountPaid;
})
console.log("In total, I made: " + totalPayment);

// var googleRate = 400;
// var amazonRate = 380;
// var facebookRate = 350;
// var googleHours = 6;
// var facebookHours = 10;
// var amazonHours = 4;
//
// var totalPayment = googleHours * googleRate + facebookHours * facebookRate + amazonHours * amazonRate;
// console.log("This week we made: $" + totalPayment + ".");

// A student can be enrolled in a class only if the class is not full and the
// class schedule does not conflict with her current schedule.
var classIsFull = false;
var scheduleHasConflicts = false;
var canEnroll = ! classIsFull && ! scheduleHasConflicts;

console.log(canEnroll);

// A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

var itemsBought = 1;
var offerValid = true;
var isPremiumMember = true;

var canApplyOffer = offerValid && (itemsBought > 2 || isPremiumMember);

console.log(canApplyOffer);
