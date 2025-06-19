const accountId = 144553
let accountEmail = "ash@gmail"
var accountPassword = "12345"
accountCity = "Jaipur"  // Doable but the worst way to declare variable
let accountState ; // if variable declared without assining value , js consider it as undefined

//  accountId = 2  (Cannot change the value of constant)

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //print the output in tabular format




/*
Prefer not to use var while declairing variable because of issue 
in block scope and functional scope.

*/