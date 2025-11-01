//global scope
let a = 250
var c = 300 //var has global scope no matter it is defined inside block or globally
d = 400 //global scope

if(true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner :", a);
    
}

console.log(a); //Outer 
// console.log(b);
console.log(c);

function one() {
    const username = "raghav"
    function two() {
        const website = "google"
        console.log(username);
    }
    // console.log(website);    //this is not accessible by the parent function 
    two()    
}

one()


if(true) {
    const username = "raghav"
    if(username === "raghav") {
        const website = "youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    //this is out of scope 
}

// console.log(username);
// //this is also out of scope


//==================Interesting=====================
// Function hoisting


console.log(addOne(5));
//this function declaration has been hoisted and its correct

//so we are calling the function before its declaration 
function addOne(num) {
    return num +1 
}


// console.log(addTwo(5)); 
//this gives error
//but function expressions can't be hoisted

//this is declaration of a function using a variable 
//Function Expression
const addTwo = function(num) {
    return num+2
}
console.log(addTwo(5));

//So there is a difference between both the functions in terms of their context of execution 
