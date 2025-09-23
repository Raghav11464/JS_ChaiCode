const name = "Raghav";
const age = 20;
console.log(name + " is " + age + " years old");    //this is not recommended

//use Backticks instead: (String interpolation)
//make use of this special character --> " ` "

console.log(`Hello my name is ${name} and i am ${age} years old`);

//we can also make use of the String constructor 

const getName = new String("RaghavMishra");
console.log(getName);
console.log(typeof getName);  

console.log(getName[0]);

console.log(getName.__proto__); //this returns an empty obejct but it actually contains a lot of values, you can check in console on google 
//proto is not required, we can directly access all the methods 

// console.log(getName.length);
// console.log(getName.toUpperCase());
// console.log(getName.charAt(0));
// console.log(getName.indexOf('a'));

const newString = getName.substring(0, 6);      //negative value is ignored
console.log(newString);
const anotherString = getName.slice(0, 6);      //negative value is allowed
console.log(anotherString);
//in both the above methods, last index is exclusive 

const newString1 = "    Raghav     ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-'));

console.log(url.includes('hitesh'));

console.log(gameName.split(""));