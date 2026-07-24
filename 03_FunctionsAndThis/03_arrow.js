const user = {
    username: "Raghav",
    age: 20,

    weclomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);  //this prints the current context/object
    }
}

// user.weclomeMessage()
// user["username"] = "Rahul"  //here we changed the context of the username field inside the object
// user.weclomeMessage()
//and this keyword is used to refer the current context (object)

console.log(this);
//this return an empty object as there is no global context currently in the this engine(Node)
//Note: In browser console , here 'this' will return 'window' object

// function chai(){
//     let username = "Raghav"
//     console.log(this.username);
//     //this gives undefined
// }
//'this' never refer to the function scope variables thats why we are getting undefined as the output 
// chai()

//================Arrow function===================

const chai = () => {
    let username = "Raghav"
    console.log(this);  //{}
}
chai()

//Explicit return: (when using return keyword)
const addNum = (num1, num2) => {
    return num1 + num2
}
console.log(addNum(5, 2));

//Implicit return
const addNum2 = (num1, num2) => num1 + num2 //method 1

//method 2
const addTwo = (num1, num2) => (num1 + num2)
/*Note: When we use () bracket there is no need to use 'return'. But when we use {} bracket we have to use 'return' */ 

console.log(addNum2(10, 20));

//for an object 
const arrow1 = (num1, num2) => ({username: "Raghav"})
console.log(arrow1(2, 5));  //{ username: 'Raghav' }