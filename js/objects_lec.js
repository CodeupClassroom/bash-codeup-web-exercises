console.log("Objects Lecture");

// var personFirstName = "Douglas";
// var personLastName = "Hirsh";
// var personAge = 38;

//Creating objects
var person = new Object();

person.firstName = "Douglas";
person.lastName = "Hirsh";
person["age"] = 38;

person.sayHello = function() {
    return this.firstName + " says Hello!";
}

var car = {
    make: "Chrysler",
    model: "Pacifica",
    owner: {
        firstName: "Douglas",
        lastName: "Hirsh",
        age: 38
    },
    features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation", "Birdseye View Cameras"],
    honk: function() {
        return this.make + " " + this.model + " says Honk! Honk!";
    }
};

car.year = 2018;

console.log(person);
console.log(car);

var laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    year: "Late 2018"
}

//Accessing data within an object.
console.log(person.firstName + " " + person.lastName + " is " + person["age"] + " years old.");

//Accessing a nested object.
console.log(car.owner.firstName + " drives a " + car.make + " " + car.model);
console.log("His car has the following features: ")
car.features.forEach(function (feature) {
    console.log(feature)
});

console.log(car.honk());
console.log(person.sayHello());

var garage = [
    car,
    {
        make: "Nissan",
        model: "Maxima",
        year: 2016,
        owner: {
            firstName: "Fer",
            lastName: "Mendoza",
            age: 25
        },
        honk: function() {
            return this.make + " " + this.model + " says Honk! Honk!";
        }
    }
]

console.log(garage);

garage.forEach(function(car){
    console.log(car.honk());
})
