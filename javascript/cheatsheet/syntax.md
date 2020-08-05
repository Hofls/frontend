* Block scope
    * `let x = 23`
* For cycle
    ```
    for (element of elements) {
        console.log(element);
    }
    ```
* Regex
    * `let regex = /ab+c/;`
* Collection
    ```
    let periods = [];
    periods.push({periodName: "SPX_3", isOver: false});
    periods.push({periodName: "PD_2", isOver: true});
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
* Callback
    ```
    function findUserInfo(callback) {
      // imagine that here is request to external server, that returns userInfo
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
