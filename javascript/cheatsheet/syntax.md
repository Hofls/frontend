* Block scope
    * `let x = 23`
* For cycle
    ```
    for (let element of elements) {
        console.log(element);
    }
    ```
* Arrow function
    * `let result = (x, y) => x * y;`
* Default Parameter Values
    * `function sum(x, y = 5) {}`
* Regex
    * `let regex = /ab+c/;`
    * `let regex = new RegExp('ab+c');`
* Collection
    ```
    let periods = [];
    periods.push({periodName: "SPX_3", isOver: false});
    periods.push({periodName: "PD_2", isOver: true});
    ```
* Map
    ```
    let map = new Map();
    map.set('info', {name: 'Jack', age: 26});
    map.get('info')
    ```
* Set
    ```
    const set = new Set([1, 2, 2]);
    set.add(1);
    ```
* Spread operator
    ```
    const obj = { foo: 'bar', x: 42 };
    const clonedObj = { ...obj };
    ```
* Template literal
    ```
    let num = 1331;
    console.log(`No need to concatinate, look! ${num}`);
    ```
* Try catch
    ```
    try { throw 'invalid number'} 
    catch(error) {}
    finally() {}
    ```
* Spread operator
    ```
    let arr1 = ['one', 'two'];
    let arr2 = [...arr1, 'three', 'four'];
    ```
* Object
    ```
    const person = {
        name: 'John',
        greet: function() { console.log(this.name); }
    };
    person.greet();
    ```
* JSON Object
    ```
    const data = {
        "name": "John",
        "age": 22
    }
    ```
* Destructuring
    ```
    const person = {
        name: 'Sara',
        age: 25
    }
    let { name, age } = person;
    ```
* Class
    ```
    class Person {
      constructor(name) {
        this.name = name;
      }
    }
    const person1 = new Person('John');
    ```
* Class Inheritance
    ```
    class Student extends Person {
        constructor(name) {
            super(name);
        }
    }
    ```
* Constructor
    ```
    function Person (person_name) {
        this.name = person_name,
        this.greet = function() { console.log(this.name); }
    }
    const person1 = new Person('John');
    const person2 = new Person('Helga');
    ```
* Modules
    ```
      export function greetPerson(name) {
          return `Hello ${name}`;
      }
      import { greetPerson } from './greet.js';
    ```
* Callback
    ```
    function findUserInfo(callback) {
      // imagine request to external server, that returns userInfo
      callback(userInfo);
    }
    ```
* Promise
    ```
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
    ```
* Async / Await
    ```
        async function getNumber() {
          return 13; // async always returns promise
        }
        let result = await getNumber(); // waits for promise to resolve
    ```
