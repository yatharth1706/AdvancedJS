# Promises

### Concepts

- [ ] What are promise?
- [ ] How to create a promise object
- [ ] Resolve and Reject callbacks
- [ ] Properties of Promise


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
  
