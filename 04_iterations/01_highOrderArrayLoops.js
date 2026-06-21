for(let i=0; i<5; i++) {
    // console.log(i);
}

const arr = ["Raghav", "Sharan", "Mishra"];
for(let idx=0; idx<arr.length; idx++) {
    // console.log(arr[idx]);
}

for(const str of arr) {
    // console.log(str);
    
}
//this is a 'for-of' loop

let greet = "hello, world!!"
for(const char of greet) {
    if(char === ' ') {
        continue;
    }
    // console.log(char);
}
//skips the space and print all the chars 

/*Maps: *key, value pair
*uniques keys
*maintains order in which these key value pairs
are inserted
*/
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('CA', 'Canada')
// console.log(map);

for(const [key, value] of map) {
    // console.log(key, '-->', value);
}

//For traversing objects we cant use for of loop 
//so for object iteration we use for-in loop 
const user = {
    username : "Raghav",
    age : 20
} 
for(const key in user) {
    // console.log(`${key} --> ${user[key]}`);
}

//dont use or avoid using for-in loop for traversing array elements and with maps also 

//For-each loop 
const languages = ["js", "java", "c++", "python", "ruby"]

//So there are mainly 3 ways to print array elements usign for-each loop

//Way 1
languages.forEach(function(item) {
    // console.log(item);
})

//Way 2
languages.forEach((item) => {
    // console.log(item);
})
//Callback function: a function which is passed as an argument to another function 
//callback functions are generally used for asynchronous operations --> waiting for an API to call 

//Way 3
function printObj(item) {
    // console.log(item);
}
languages.forEach(printObj)
//here we are only passing the function reference --> without parenthesis () 

//to print the element, index and the entire array 
languages.forEach((item, idx, arry) => {
    // console.log(item, idx, arry);
})
const array = ["Raghav", "Sharan", "Mishra"]
const values = array.forEach((item) => {
    // console.log(item);
})
// console.log(values);
//'values' variable does not hold any value in it, it remains undefined


const userData = [
    {
        username: "Raghav", 
        age: 21
    }, 
    {
        username: "Rahul", 
        age: 22
    },
    {
        username: "Rohan", 
        age: 19
    }
]
//array of objects 
userData.forEach((item) => {
    console.log(item.age);
})
//in above loop, 'item' param represents each object in the array of objects 

//The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order.

//forEach() always returns undefined and is not chainable.
//Therefore we use map() and other functions
//There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behaviour, the forEach() method is the wrong tool.