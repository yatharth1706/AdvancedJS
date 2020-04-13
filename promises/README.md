# Promises

### Concepts

- [ ] What are promise?
- [ ] How to create a promise object
- [ ] Resolve and Reject callbacks
- [ ] Properties of Promise
- [ ] Implementation


### What are promises?

Its a special JavaScript object to handle asynchronous operations in an easy way.

The constructor syntax for a promise object is:

```js
  let promise = new Promise(function(resolve, reject) {
    // Perform some asynchronous task here
  });  
```

The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically.

#### Arguments of Executor:
  
  It contains two callbacks
  1. resolve
  2. reject

  **resolve(value)** — if the job finished successfully, with result value.
  
  **reject(error)** — if an error occurred, error is the error object.
  
  
  The promise object returned by the new Promise constructor has these internal properties:

  * **state** — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is         called.
  * **result** — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.
  
  ![Promise States](https://yatharth1706.github.io/assets/promise1.PNG)
  
### Methods on Promise

1. **then**: 
Syntax:
```js
      promise.then(
        function(result) { /* handle a successful result */ },
        function(error) { /* handle an error */ }
      );
```

Some Examples:
```js
      let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done!"), 1000);
      });

      // resolve runs the first function in .then
      promise.then(
        result => alert(result), // shows "done!" after 1 second
        error => alert(error) // doesn't run
      );
```


2. **catch**:

Example:
```js
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
      });

      // .catch(f) is the same as promise.then(null, f)
      promise.catch(alert);
      
```

3. **finally**:

Example:
```js
      new Promise((resolve, reject) => {
        setTimeout(() => resolve("result"), 2000)
      })
      .finally(() => alert("Promise ready"))
      .then(result => alert(result));
      
```
