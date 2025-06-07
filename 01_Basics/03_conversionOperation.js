let score = null

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)  //this returns NaN, one of the limitation of JS

//NaN => means Not a Number 

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = "raghav"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//1 => true, 0 => false

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)//Number has been converted to String 

// ************************* Operations *************************

let value = 3
let negVal = -value
// console.log(negVal)  //pos converted to neg value 

let str1 = "hello"
let str2 = ", Raghav"
let str3 = str1+str2
//console.log(str3)   //string concatenation 

console.log("1"+2)
console.log(1 + "2")
console.log("1" + "2")  //normal concatenation 
//number added to string
//string added to number 

console.log(1 + 2 + "2")    //Number + String, that is why 1+2=3and then 3+"2" ==> 32
console.log("1" + 2 + 2)    //String + Number ==> 122

let gameCounter = 100
++gameCounter
console.log(gameCounter)
//prefix and postfix

