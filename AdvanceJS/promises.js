//Promise is an object representing the eventual completion or failure of an asynchronous operation
//Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function

//How to create Promise?
const promiseOne = new Promise(function(resolve, reject) {
    //Do any async tasks
    //For example: DB calls, cryptography, network, file operations 
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
        //promise consumption
        //Note: resolve is connected/associated with then()
    }, 1000)
})
//A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.

promiseOne.then(function() {
    console.log("Promise consumed");
})
/*
then():
Attaches callbacks for the resolution and/or rejection of the Promise.
@param onfulfilled — The callback to execute when the Promise is resolved.
@param onrejected — The callback to execute when the Promise is rejected.
@returns — A Promise for the completion of which ever callback is executed.
*/

//Promise - 2
//creating and consuming promise together
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2');
        resolve()
    }, 1000)
})
.then(function() {
    console.log("Async 2 resolved");
    
})


//Promise - 3
//how data is passed?
//whatever argument we pass in resolve() during promise call
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user.email);
})
//we passed the returned object as the argument and if this promise is resolved our passed data is printed 


//use of reject(), finally() and chaining concept
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "Raghav", password: "123"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);    
})
.catch(function(error) {
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

//reject() is connected with catch()
//catch() is executed when there is an error and resolve
//finally(): to tell if the task is done either resolved 


//using async, await
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
        //Pause this async function until the Promise finishes
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

//if we are writing async before a function, it implies that 'Inside this function I may wait for asynchronous operations'
//without async, we cannot use await
//it doesn't stop the whole JavaScript program, it only pauses this particular async function
//Why we are using try - catch here?
//because await throws an exception if the Promise is rejected


/*fetch():
-Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest
-Fetch API uses Request and Response objects (and other things involved with network requests), as well as related concepts such as CORS and the HTTP Origin header semantics
*/
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //fetch returns a Promise object
        const data = await response.json()
        console.log(data);    
    } catch (error) {
        console.log("E: ", error);
    }
    
}
// getAllUsers()

fetch('https://api.github.com/users/Raghav11464')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
//when we are using fetch() and if it returns an error 404, etc so where it is received? -> resolve or reject
//its received as a response in resolve()

