var myVariable = 5;
console.log(myVariable + 10); // This will output 15

var anotherVariable = "Hello, World!";
console.log(anotherVariable); // This will output "Hello, World!"

var isJavaScriptFun = true;
if (isJavaScriptFun) {
    console.log("JavaScript is fun!"); // This will output "JavaScript is fun!" 
} else {
    console.log("JavaScript is not fun.");
}

var myArray = [1, 2, 3, 4, 5];  
console.log(myArray[0]); // This will output 1
console.log(myArray.length); // This will output 5  
var myObject = {
    name: "Alice",
    age: 30,
    city: "New York"
};
console.log(myObject.name); // This will output "Alice"
console.log(myObject.age); // This will output 30
console.log(myObject.city); // This will output "New York"

let letVariable = "This is a let variable.";
console.log(letVariable); // This will output "This is a let variable."
const constVariable = "This is a const variable.";
console.log(constVariable); // This will output "This is a const variable."

{
    let blockVariable = "This variable is only accessible within this block.";
    var functionVariable = "This variable is accessible throughout the function.";
}

console.log(functionVariable); // This will output "This variable is accessible throughout the function."
// console.log(blockVariable); // This will cause an error because blockVariable is not accessible outside the block.

// Variable naming rules:
// 1. Variable names can contain letters, digits, underscores, and dollar signs.
// 2. Variable names must begin with a letter, underscore, or dollar sign.
// 3. Variable names are case-sensitive.
// 4. Variable names cannot be reserved keywords in JavaScript.

// using tamplate literals
let name = "Bob";
let greeting = `Hello, ${name} How are you?`;
console.log(greeting); // This will output "Hello, Bob How are you?"
// Using template literals for multi-line strings
let multiLineString = `This is a multi-line string.
It can span multiple lines without needing special characters.`;
console.log(multiLineString); // This will output the multi-line string

