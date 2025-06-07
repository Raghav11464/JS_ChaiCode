//Primitive Datatypes

//7 Types:- Number, String, Boolean, null, undefined, Symbol, BigInt

const isLoggedIn = false
const outsideTemp = null
let userEmail;  //this is undefined

const id = Symbol('123')
const anotherId = Symbol('123')

//

const bigNumber = 343423424324233423n


//Reference (Non Primitive)

//Array, Objects, Functions

const names = ["Raghav", "Sharan", "Mishra"];    //Array 

let myObj = {
    name: "Raghav",
    age: 22,
    city: "Bengaluru"
}   //this is an Object

const myFunction = function(){
    console.log("Hello World");
}   //this is a Function 

// console.log(typeof bigNumber);
// console.log(typeof anotherId);
// console.log(typeof null);   //object
// console.log(typeof undefined);  //undefined
// console.log(typeof myObj);  //object
// console.log(typeof myFunction); //function
// console.log(typeof names);  //object

// *********************** Memory ***********************

//Stack (Primitive) , Heap (Non-Primitive)

let myName = "Raghav Sharan Mishra"
let anotherName = myName
anotherName = "MishraJi"

console.log(myName);
console.log(anotherName);
