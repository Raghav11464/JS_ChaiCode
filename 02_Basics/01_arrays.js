/* Shallow copy:
-->copy whose properties share the same 
references as those of the source object from which the copy was made. 
As a result, when you change either the source or the copy, you may also 
cause the other object to change too

Deep copy:
-->copy whose properties do not share the 
same references as those of the source object from which the copy was 
made. As a result, when you change either the source or the copy, you 
can be assured you're not causing the other object to change too.
*/
//Arrays in JS
//JavaScript arrays are resizable and can contain a mix of different data types
//means they are heterogeneous in nature, they can store unlike elements in the array 

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
myArr.pop();    //removes the last element from the array 
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
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const newAnimals = animals.slice(2, 4);
console.log(newAnimals);


const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");
//remove 1 element at index 2, and insert "trumpet"
// console.log(removed);
console.log(myFish);



/*
Summary 
1. push()-push element at the end of the array
2. pop()-delete element from end of array
3. unshift()-adds element at the start of array
4. shift()-delete element from start of the array
5. join() : converts array into string
6. slice(): returns a new array containing the extracted 
elements.The original array will not be modified.
7. splice(): changes the contents of an array by removin
g or replacing existing elements and/or adding new elem
ents in place. Here original array is changed.
*/