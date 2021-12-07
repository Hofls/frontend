// Haven't used JavaScript for a long time? Here is a quick reminder:

// Data types
let count = 5
let weight = 3.5
let message = "Hello world"
let isReady = true

// Variable in string
console.log(`Hello ${userName}`);

// Collections
let list = [];
list.push("Hey");
list.includes("Hey")

let map = new Map();
map.set(23, "John");
map.get(23)

const set = new Set();
set.add(2);
set.has(2);

// Null safety
let address = bob?.department?.head?.address

let name
if (name) {
    console.log(name) // Won't be printed
}

// Functions
function multiply(number) {
    return number * 3
}
multiply(2)

// Conditions
if (true) {
    console.log("A")
} else {
    console.log("B")
}

// Cycles
for (let user of users) {
    console.log("B")
}
while (true) {
    cakesEaten++
}

// Exceptions
try {
    throw 'No internet'
} catch(error) {
    console.log(error)
} finally {
    console.log('Done!')
}

// Comparison
console.log(2 === 3) // True if same type and value
JSON.stringify(obj1) === JSON.stringify(obj2) // True if all fields are equal

// Modules (Imports)
import { browser } from './browser.js';
browser.run()

// Enum
const state = { IDLE: 'IDLE', RUNNING: 'RUNNING' };
console.log(state.IDLE);

// Classes
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${name}`);
    }
}
const person1 = new Person('John');
person1.greet();

// Anonymous class / JSON object
const status = {
    id: 23,
    message: 'Wrong connection'
};
console.log(status.message)

// Lambda (Anonymous function)
let toUppercase = (text) => text.toUpperCase();
console.log(toUppercase("hey"))

// ---------------------------------------
// JS specific:

// Async / Await:
async function getNumber() {
    return 13; // async always returns promise
}
let result = await getNumber(); // waits for promise to resolve

// Spread operator
const obj = { foo: 'bar', x: 42 };
const clonedObj = { ...obj };

let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four'];

// Destructuring
const person = {
    name: 'Sara',
    age: 25
}
let { name, age } = person;

// Promise:
function sum (a, b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof a !== "number" || typeof b !== "number") {
                reject(new TypeError("Provide numbers please"));
            }
            resolve(a + b);
        }, 1000);
    });
}

var promisedSum = sum(40, 2);
promisedSum.then(function (result) {
    console.log("Resolved - ", result);
}).catch(function (err) {
    console.error("Catched - ", err);
});