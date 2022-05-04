/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [20, 25, 34];
let john = ages[0];
let jack = ages[1];
let rabbit = ages[2];
console.log(john, jack, rabbit);

let [mark, twain, author] = ages;
console.log(mark, twain, author);

// Destructuring objects
let jobs = {
    jean: 'designer',
    jill: 'developer',
    june: 'marketer'
};

let {jean, jill, june} = jobs;

console.log(jean, jill, june);

// Destructuring subsets
let languages = ['english', 'polish', 'dutch', 'swedish', 'danish'];
let [native, secondary] = languages;

console.log(native, secondary);

let [, , native2, secondary2] = languages;
console.log(native2, secondary2);

let languages2 = {
    first: 'english',
    second: 'polish',
    third: 'dutch',
    fourth: 'danish'
}

let {fourth , third} = languages2;
console.log(fourth, third);

// Using rest parameter syntax
let fruits = ['passion fruit', 'blood orange', 'dragon fruit', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;

console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    lu: 'indian curry',
    ul: 'guinness stew',
    la: 'mint soup',
    al: 'watercress soup'
}

let {lu, la, ...rest} = favoriteFoods;
console.log(lu);
console.log(la);
console.log(rest);

// Destructuring challenge

let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr, student) => {
    let list = [];
    for(let i in arr) {
        if(student === arr[i].name) {
            list = [...arr[i].subjects];
        }
    }
    return list
}


let [first, second, ...rest] = makeList(students, 'John');
console.log(first);
console.log(second);
console.log(rest);
