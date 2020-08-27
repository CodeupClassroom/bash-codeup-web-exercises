console.log("BOM Lecture");

var name = "Douglas";
console.log(name);

//Global variables are on the window object.
console.log(window.name);

function sayHello(name) {
    var greeting = "Hello " + name;
    console.log(greeting);
}

sayHello(name);

(function() {
    var otherName = "Fer";
    console.log(otherName);

    //alert("I'm an alert! Red alert!");

    // var answer = confirm("Are you sure you want to delete the internet?");
    // if(answer) {
    //     alert("Don't be silly, we can't delete the internet.");
    // } else {
    //     alert("This is the correct answer.");
    // }

    // var favoriteColor = prompt("What is your favorite color?");
    // console.log("The favorite color entered by the user is " + favoriteColor);
    // if(favoriteColor === "blue") {
    //     alert("That's great! Blue is my favorite color too.")
    // }

    // var numberOfTimesRun = 0;
    //
    // var helloInterval = setInterval(function() {
    //     numberOfTimesRun += 1;
    //     console.log("Hello! " + numberOfTimesRun);
    //     if(numberOfTimesRun >= 5) {
    //         clearInterval(helloInterval);
    //     }
    // }, 2000);

    setTimeout(function() {
        console.log("Hello after a while");
    }, 5000);
})();