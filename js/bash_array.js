var bash_students = ["Ally Hamner",
    "Amanda Garrison Woods",
    "Austin Varnon",
    "Bianca Reusch",
    "Caroline Esquivel",
    "Chelsea Rolland",
    "Edgar Gonzalez",
    "Jason Carrillo",
    "John Mcnay",
    "Jorge Amador",
    "Levi B. Trejo",
    "Michael Meyer",
    "Mike Klanica",
    "Robert DelaRosa",
    "Sergio Cazaresmuniz",
    "Skyler Aschenbeck",
    "Thomas Crowder"
];

// console.log(bash_students[9]);
// console.log(bash_students.length)
bash_students[bash_students.length] = "Daniel Fryar";
// console.log(bash_students.length);

var pets = ["Ollie the Maltese", "Mia the cat", "Noodles the snake", "Pepi the guinea pig", "Al Capone the fish", "Squirrel, Dog ",
"Misty, Dog", "Bella, Dog", "Sophie, cat"];
var fun = function(){
    console.log("Hello")
};

var stuff = [7, 9, 13, Math.PI, false, fun, [1,2,3]];
// stuff += pets;
// console.log(stuff);
stuff[5]();

var empty = [];
var anatomical_systems = ['skeletal','muscular','digestive','nervous','respiratory','immune'
];

var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = arr1 + arr2;
// console.log(arr3);


var harryPotterBooks = [
    "Harry Potter and the Sorcerers Stone",
    "Harry Potter and the Chamber of Secrets",
    "Harry Potter and the Prison of Azkaban",
    "Harry Potter and the Goblet of Fire",
    "Harry Potter and the Order of the Phoenix",
    "Harry Potter and the Half-Blood Prince",
    "Harry Potter and the Deathly Hallows"
];

var words = ["coding", "is", "fun", "at", "codeup"];
var sentence = "";
// for (var i=0;i < words.length; i++) {
//     sentence += words[i];
//     if (i < words.length - 1) {
//         sentence += " ";
//     } else {
//         sentence += "!";
//     }
// }
words.forEach(function(word, i, arr){
    sentence += word;
    if (i < arr.length - 1) {
        sentence += " ";
    } else {
        sentence += "!";
    }
})
console.log(sentence);

var studentName = function(student){
    console.log(student);
}
bash_students.forEach(studentName);
