"use strict"; // treat all js code as newer version

//alert("pop up") works in browser not in nodejs

// Data types in javascript
// 1. Primitive data types: number, string, boolean, null, undefined, symbol
// 2. Reference data types: arrays, objects, functions 

let name="Anmol" 
// string

let age=22 
// number=>2 to power 53

// big int

let isApproved=true 
// boolean

let firstName=null  // null is an object
// null=>standalone value

let lastName=undefined 
// undefined => when variable is not assigned any value

let selectedColor 
// undefined

selectedColor=Symbol("red") 
// symbol => unique identifier ,will use in react js

//reference data types

// array
let selectedColors=["red","blue"]
selectedColors[2]="green"
console.log(selectedColors)
// object
let person={
    name:"Anmol",
    age:22
}
console.log(person)
// function
function greet(){
    console.log("hello world")
}
greet()
console.log(typeof name)
console.log(typeof age)
console.log(typeof isApproved)
console.log(typeof firstName)
console.log(typeof lastName)    
console.log(typeof selectedColor)
console.log(typeof selectedColors)
console.log(typeof person)
console.log(typeof greet)
console.log(typeof null) //bug in js ,it shows object instead of null
console.log(Array.isArray(selectedColors)) //to check array




