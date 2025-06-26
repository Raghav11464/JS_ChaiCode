const accountId = 144553
let accountEmail = "raghav@gmail.com"
var accountPassword = "12345"  
/*
prefer not to use var for declaring vaiables in js, becasue of issue in block scope and functional scope
*/
accountCity = "Bengaluru"   //this is also not preferred 
let accountState;   //not initialized with any value so undefined

// accountId = 2 

accountEmail = "rsm@gmail.com"
accountPassword = "212121"
accountCity="Gurgaon"

console.log(accountId)

//console.log(accountId, accountEmail, accountPassword, accountCity)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])