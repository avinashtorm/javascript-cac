const accountId=144553
let accountEmail="avi@gmail.com"  //block scoped
var accountPassword="12345" //globally scoped or Function-scoped 
let accountState

/*
use let and const,
prefer not to use var beacuse of 
issue in block scope and functional scope
*/ 
accountCity="Jaipur"
accountEmail="anmol@gmail.com"
accountPassword="87654"
accountCity="korba"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])