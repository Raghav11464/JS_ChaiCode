//Arrays in JS
//JavaScript arrays are resizable and can contain a mix of different data types
//means they are heterogeneous in nature, they can contain unlike elements in the array 

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr);
console.log(myArr[0]);  

const arr = [1, 2, 3, true, false, 0.1, "Raghav"];
console.log(arr);
console.log(typeof arr);    //object
console.log(arr[arr.length - 1]);   //last element in the array 

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2[3]);

//Array Methods 

myArr.push(6);    //appends new elements to the end of the array 
myArr.push(7);   
myArr.pop();
console.log(myArr);

myArr.unshift("Starting"); //add new elements to the starting of the array 
console.log(myArr);
myArr.push("Ending");
console.log(myArr);

myArr.shift();  //removes the first element and return it 
console.log(myArr);

//some more methods like:-
/*
1. arr.indexof();    -> returns the index of the specified element 
2. arr.includes();   -> returns a boolean value
*/

//join method --> used to convert an array to a string 
const newArr = myArr.join();
console.log(myArr);     
console.log(newArr);    //this is a string 

//slice and splice methods 

