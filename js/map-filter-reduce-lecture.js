console.log('Map Filter Reduce');

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evens = [];
//
// for (let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0) {
//         evens.push(numbers[i]);
//     }
// }
//
// console.log('Evens: ', evens)
//
// let odds = [];
//
// for (let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 !== 0) {
//         odds.push(numbers[i]);
//     }
// }
//
// console.log('Odds: ', odds)

// What does filter do?
function arrayFilter(array, checkFunction) {
    const result = [];

    for(let index = 0; index < array.length; index++) {
        const value = array[index];

        if(checkFunction(value, index, array)) {
            result.push(value);
        }
    }

    return result;
}

//const evens = arrayFilter(numbers, (value) => value % 2 === 0 );
const evens = numbers.filter((number) => number % 2 === 0);

console.log('evens: ', evens);

// const odds = arrayFilter(numbers, function(value, index, array){
//     return value % 2 !== 0;
// })
const odds = numbers.filter((number) => number % 2 !== 0);

console.log('odds: ', odds);

//Map
let incremented = [];

// for (let i = 0; i < numbers.length; i++){
//     incremented.push(numbers[i] + 1);
// }

function arrayMap(array, transformFunction) {
    const result = [];

    for (let index = 0; index < array.length; index++) {
        const value = array[index];
        result.push(transformFunction(value, index, array));
    }

    return result;
}

// incremented = arrayMap(numbers, (value) => { return value + 1 });
// console.log('Incremented: ', incremented);
//
// const squared = arrayMap(numbers, (value) => { return value * value });
// console.log('Squared: ', squared);

incremented = numbers.map((value)=>{return value + 1});

console.log('Incremented: ', incremented);

const squared = numbers.map((value)=>{return value * value});

console.log('Squared: ', squared);

var mbpModels = [
    {
        id: 'MA464LL/A',
        desc: 'Apple MacBook Pro 15-Inch "Core Duo" 2.0',
        model: 'A1150',
        year: '2006',
        price: 3199
    },
    {
        id: 'MB986LL/A',
        desc: 'Apple MacBook Pro 15-Inch "Core 2 Duo" 2.8',
        model: 'A1286',
        year: 'Mid-2009',
        price: 2799
    },
    {
        id: 'MD311LL/A ',
        desc: 'Apple MacBook Pro 17-Inch "Core i7" 2.4',
        model: 'A1297',
        year: 'Late-2011',
        price: 2399
    },
    {
        id: 'MGXA2LL/A',
        desc: 'Apple MacBook Pro 15-Inch "Core i7" 2.2',
        model: 'A1398',
        year: 'Mid-2014',
        price: 2299
    }
];

let mbp2006 = mbpModels.filter((mbp) => mbp.year === "2006");

console.log(mbp2006);

numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);

console.log('Sum of numbers: ', sum);

//let sumMbpPrices = mbpModels.reduce((total, mpb) => total + mpb.price, 0);
//Same as above but using the full function syntax.
let sumMbpPrices = mbpModels.reduce(function (total, mpb) {
    return total + mpb.price;
}, 0);
console.log('Sum of mbp prices', sumMbpPrices);

function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}

console.log('countWords',countWords('Mary had a little lamb little lamb little lamb'));
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}

// Total of budget MBPs.
const budgetMBPTotal = mbpModels
    .filter(mbp => { return mbp.price <= 2500 })
    .reduce((total, mbp) => {
        return total + mbp.price;
    }, 0);

console.log('Budget for cheap MacBook Pros', budgetMBPTotal);

function add(x, y) {
    console.log('x + y');
    //Now let's add the number and return them.
    return x + y;
}

console.log(add(2, 3));

//Get a comma delimited list of model numbers from the array using reduce.
// let modelList = mbpModels.reduce((fullString, mbp, index) => {
//     if(index === 0) {
//         return mbp.model
//     }
//     return fullString += ", " + mbp.model;
// },"");

let modelList = mbpModels.map((mbp) => mbp.model).join(", ");

console.log(modelList);

