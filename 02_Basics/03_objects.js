//Singleton 
//an object which is created using a constructor not a literal
//Object.create() this creates a singleton object 

//object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Raghav",
    "full name": "Raghav Sharan Mishra",
    [mySym]: "mykey1",  
    //[] --> this is used to use the key as a Symbol, otherwise it will be taken as a string
    //Example--> mySym: "mykey1",
    age: 20,
    location: "Gurugram",
    email: "raghav@gmail.com", 
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//keys are by default taken as string 

console.log(JsUser.email);          //this is not preferable for accesing the value at a key 
console.log(JsUser["email"]);       //instead use square bracket notation 
console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym);   //this is string if we are not using [] square brackets around the symbol
//so for using it as a Symbol datatype 
//use [] 
console.log(JsUser[mySym]);

JsUser["email"] = "raghav@yahoo.com"
// Object.freeze(JsUser)
// now this object has been freezed and no changes will be reflected from now onwards 
// JsUser.email = "raghavmishra@yahoo.com"
console.log(JsUser)
 
JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
//without using () against the greeting key in JsUser object 
//this gives reference of the function 

JsUser.greeting2 = function() {
    console.log(`Hello JsUser, ${JsUser.name}`);
    //string interpolation, using backticks 
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

/*
Summary
--> what is singleton object
how to access the values in an object using corresponding keys
using the square bracket notation instead of dot operator 
--> we can freeze the object using freeze() method 
diffrence between calling the function with or without parenthesis
-->  
*/