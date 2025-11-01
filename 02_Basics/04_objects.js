// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "raghu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "raghav",
            lastname: "sharan"
        }
    }
}
//Nested objects

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2, obj4)
//here {} entered as a parameter is preferrable as it depicts the target location and the other 3 objects as sources 
console.log(obj3);


const obj5 = {...obj1, ...obj2} //using the spread operator 
console.log(obj5);

//this is a daily life example in which we get array of users containing objects from a database
const users = [
    {
        id: 1,
        email: "rsm@gmail.com"
    },
    {
        id: 2,
        email: "rsm@gmail.com"
    }, 
    {
        id: 3,
        email: "rsm@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));   //all of them are string
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));    
console.log(typeof Object.keys(tinderUser));
//these methods return array which we can traverse using loops

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));

// ==================================

//Objects de-structure
/*
Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables.
*/

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "raghav"
}

course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

//JSON API 
//objcts without any name 

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]