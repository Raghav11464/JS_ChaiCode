const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
//this actually doesn't merge the two arrays 
//instead interpret it as a new element 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
//this getches the 1st index of the 3rd index element of the marvel heros array 

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
//concat method returns a new array with the combined one 
//whereas push doesn't return a new array 

//then we have spread operator it breaks down the array into pieces 
const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const newAnotherArray = anotherArray.flat(Infinity);
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(newAnotherArray);

console.log(Array.isArray("Raghav"));
console.log(Array.from("Raghav"));
console.log(Array.from(Object.keys({name: "raghav"}))); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//returns a new array from set of elements 