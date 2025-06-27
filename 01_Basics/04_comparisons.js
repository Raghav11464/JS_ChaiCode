// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)   //number specified with leading zeroes

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)
console.log(Number(null));


// console.log(undefined > 0)
// console.log(undefined == 0)
// console.log(undefined >= 0)
console.log(Number(undefined)); //this return NaN when converted to Number 


// === -> this is strict checking, or comparison 
//how?
console.log("2" === 2)  //this is strict comparison, this will return false becasue of string and number comparison
console.log("2" == 2)
