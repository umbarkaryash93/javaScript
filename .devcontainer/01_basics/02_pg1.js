const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

accountEmail = "yash.com"
accountPassword = "9698698608"
accountCity = "Benglore"

console.log(accountId);

/*
    prefer not to use var
    because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);