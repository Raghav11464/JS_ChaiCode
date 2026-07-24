// Immediately Invoked Function Expressions (IIFE), 
// JavaScript function that runs as soon as it is defined
/*Avoid polluting the global namespace: Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern.*/

//Named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})();
//at the end of the IIFE a semicolon is necessary**

// ()()
//first () is for execution and second () is for calling the function 

//UNNAMED IIFE Arrow Function 
(() => {
    console.log(`DB CONNECTED TWO`);
})();

//IIFE with arguments and parameter
((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})("Raghav");

//two IIFE together: write first IIFE then use ; and then write second IIFE below it.

(() => {
 console.log("IIFE1");
})();

(() => {
 console.log("IIFE2");
})();
