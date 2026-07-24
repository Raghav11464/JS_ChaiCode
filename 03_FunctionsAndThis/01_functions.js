//parameter: variables that we pass inside a function declaration
//argumnets: values/variables that we pass during function call

function sayMyName() {
    console.log("R");
    console.log("a");
    console.log("g");
    console.log("h");
    console.log("a");
    console.log("v");
}
sayMyName //refrence
sayMyName() //execution
// console.log(sayMyName());

function addTwoNumbers(number1, number2) {
    // let result = nunber1 + numebr2
    // return result 
    return number1 + number2
}

// const result = addTwoNumbers(2, 5)
// console.log(result);

// console.log(addTwoNumbers(10, 20));
console.log("Result :", addTwoNumbers(5, 10));
// console.log("Result :", addTwoNumbers(5, "ABC"));   //this concatenates the string with the number 


function logInUserMessage(username = "rsm") {
    if(!username) {
        console.log("Please enter a username");
        // return
    }
    return `${username} just logged in`
}

console.log(logInUserMessage());
//if i will not enter any argument, so by default it will take "rsm" as the argument
//otherwise it will take "Raghav" as the argument 



//rest operator '...' => this bundles all the numbers in an array and returns an array
function calculateCartPrice(val1, val2, ...num1){
 return num1;
}

// console.log(calculateCartPrice(100, 200, 500, 1000));
//val1, val2 are taken up by 100, 200
//so this only prints 500, 1000 as ...num1 packet

const product = {
    name: "hot wheels",
    prices: 699
}

function handleObject(anyobject) {
    console.log(`Product Name is : ${anyobject.name} \nPrice is : ${anyobject.prices}`);
}

// console.log(handleObject(product));

const obj = handleObject({
    name: "toy car",
    prices: 199
})
console.log(obj);

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));
//we can directly pass the object as an argument to the function