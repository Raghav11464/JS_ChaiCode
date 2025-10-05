//Date in js

/*JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).*/

let myDate = new Date();

console.log(typeof myDate); //obv it is going to be an object 

console.log(myDate.toString()); //returns string representation of the date
// --> Sun Oct 05 2025 23:38:11 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); 
// 2025-10-05T18:08:11.578Z
console.log(myDate.toJSON());
// 2025-10-05T18:10:42.915Z
console.log(myDate.toDateString()); //looks good as output
// Sun Oct 05 2025
console.log(myDate.toLocaleDateString());
// 10/5/2025
console.log(myDate.toLocaleString());
// 10/5/2025, 11:42:10 PM


let myCreatedDate = new Date(2025, 0, 5);   //here months start from 0 --> Jan
console.log(myCreatedDate.toDateString());
// Sun Jan 05 2025

let myCreatedDate2 = new Date(2025, 0, 5, 23, 47);  //here time stamp is also there in the parameters
console.log(myCreatedDate2.toLocaleString());
// 1/5/2025, 11:47:00 PM

let myCreatedDate3 = new Date("2025-10-5");
console.log(myCreatedDate3.toLocaleString());
// 10/5/2025, 12:00:00 AM

let myCreatedDate4 = new Date("01-14-2025");
console.log(myCreatedDate4.toLocaleString());
// 1/14/2025, 12:00:00 AM

let myTimeStamp = Date.now();   //return the milisecond elapsed since midnight Jan 1 1970
console.log(myTimeStamp);
//1759688633770

console.log(myCreatedDate.getTime());//time till that date since jan 1 1970 midnight 

console.log(Math.floor(Date.now() / 1000));
//1759689234 --> current time in seconds

let newDate = new Date();
console.log(newDate.getDate()); //6
console.log(newDate.getDay());  //1
console.log(newDate.getMonth() + 1);    //9 (0 - based), so add 1 to it to make it suitable for the user

console.log(newDate.getFullYear()); //2025

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    //we can make other changes also
}));
//"Monday" is the output 