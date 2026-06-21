const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const values = nums.forEach(item => {
    // console.log(item);
});
// console.log(values); --> this will give undefined
//because forEach() doesn't have any return value unlike high order array methods 

/*

All three high order array methods --> filter(), map() and recuce() are used in JS with arrays
there are known as high order because they take a callback function as their argument 
filter() --> select some elements from the array and construct a new array 
map() --> transform every element of the array, returns a new array 
reduce() --> take all array elements and recuce them to a single value using an accumulator value 

*/

//=============IMPORTANCE of filter() method ===============

// filter() --> unlike forEach(), filter() returns values and constructs a new array as per the provided condition 

const myNums = nums.filter((num) => num > 4)
// console.log(myNums);

const myNums2 = nums.filter((num) => {
    return num > 4
})
// console.log(myNums2);
//this is explicit return for callback arrow function 


//performing the same operation using forEach method
const newNums = []

nums.forEach(item => {
    if(item > 4) {
        newNums.push(item)
    }
});
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non Fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    { title: 'Book Nine', genre: 'Non Fiction', publish: 1981, edition: 1989},
]

// some basic operations using filter() method on books object :-

let userBooks = books.filter((book) => book.genre == 'History')
//this is an implicit return for the callback arrow function 
// console.log(userBooks);

userBooks = books.filter((book) => {
    return book.publish >= 2000 && book.genre === 'Science'
})
// console.log(userBooks)

userBooks = books.filter((book) => {
    return book.edition >= 2005 && book.publish >= 2000
})
// console.log(userBooks);



//===============Array.map() method ===============/
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums2 = nums2.map((num) => num+10)
// console.log(newNums2);


//how we can use map() for chaining 
const newNumChain = nums2
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 50)
// console.log(newNumChain);

//in the above example, we can see how map() is used during chaining 

//So map() method is also an iterative method. 
//Provided callback functions is envoked for each element in an array and constructs a new array from the results 



//===============Array.reduce() method ===============/

const arr = [1, 2, 3, 4]

const initialValue = 0
const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 
    initialValue
)
// console.log(sumWithInitial);

//here initially accumulator takes the specified value(for the first time) and then takes the returned for reamining elements/items of the array 

const total = arr.reduce(function(acc, currVal){
    // console.log(`Accumulated Value: ${acc} and Current Value: ${currVal}`);
    return acc+currVal
}, 0)
// console.log(total);

//here we can see how accumulator is taking the values 


//So we can use reduce() method to simulate a cart total amount calculator 

const items = [
    {
        itemName: "JSCourse",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 5999
    }
]

const totalAmount = items.reduce((acc, item) => acc+item.price, 0)
console.log(`Total amount to be paid: ${totalAmount}`);