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
console.log(typeof names);  //this is also an object


let myObj = {
    name: "Raghav",
    age: 22,
    city: "Bengaluru"
}   //this is an Object
//data is stored in the form of key - value pairs 
console.log(typeof myObj);


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
//heap is referential, refernces are being used 

let myName = "Raghav Sharan Mishra"
let anotherName = myName
// here we are using myName variable again so a copy of that variable is created in the stack 
anotherName = "MishraJi"

console.log(myName);
console.log(anotherName);

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1;
console.log(user1.email);
console.log(user2.email);
//user2 is also pointing to the same address where the data is stored in the heap 

user2.email = "raghav@gmail.com";
console.log(user1.email);
console.log(user2.email);
//here we made changes in user2 but it will reflect in user1 also 
//Heap: Non-Primitive: Reference is used, since refrence is used changes will reflect in original also. (When you take refrence back from heap , you dont get a copy, you get refrence of original value)