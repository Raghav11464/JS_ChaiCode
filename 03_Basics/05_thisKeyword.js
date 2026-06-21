//here we'll see what is the usage of 'this' keyword in different scenarios 

//What is this keyword?? --> it refers to the executional context that means who is calling the function
//" Who owns this function right now -->that becomes 'this' "

//'this' keyword used inside an object method or function 
const user = {
    username: "Raghav",
    greet: function() {
        console.log(`${this.username}, Welcome to the Website!!`);
    }
}

// console.log(user.greet); // --> this returns the reference of the function --> (without parenthesis)
// user.greet()

//functional expressions dont have their own 'this' or executional context
const test = function() {
    let name = 'Raghav';
    console.log(this.name);
}


// console.log(this);
//this will print window object in browser, 
//but here it will give --> {} an empty object

//Arrow functions dont have their own this, rather they take it from their external(lexical) scope
//thats why we use normal functions as the object methods, and we dont use an arrow function as the object method 
const user1 = {
    username: "Raghav Sharan Mishra",
    welcomeGreet: () => {
        console.log(`${this.username}, Welcome to the website!!`);
        
    }
}
// user1.welcomeGreet()
//here we are getting username as undefined, because we are calling the arrow function, and its correct context is 'undefined' from the global scope as it(arrow function) inherits its 'this' keyword from the surrounding scope  


//then Even handlers have their own 'this' or executional context 
//this --> element that trigerred the event 
 