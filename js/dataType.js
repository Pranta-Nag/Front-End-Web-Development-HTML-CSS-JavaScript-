// Data Type in JavaScript
// 1. Primitive Data Types
let name = "John"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let nullValue = null;   // Null
let undefinedValue; // Undefined
let symbolValue = Symbol("unique"); // Symbol   
// Primitive data types are immutable, meaning their values cannot be changed after they are created. When you assign a new value to a primitive variable, it creates a new value in memory rather than modifying the existing one.
// Symbols are unique and immutable data types that are often used to create unique identifiers for object properties. They are not enumerable in for...in loops and do not have a literal syntax like other primitive types.


// 2. Non-Primitive Data Types
let person = { name: "John", age: 30 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
function greet() {
    console.log("Hello!");
} // Function

// 3. Type Checking
console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof nullValue); // "object" (this is a known quirk in JavaScript)
console.log(typeof undefinedValue); // "undefined"
console.log(typeof symbolValue); // "symbol"
console.log(typeof person); // "object"
console.log(typeof numbers); // "object"
console.log(typeof greet); // "function"

// 4. Type Coercion
let result = "The age is " + age; // "The age is 30"    
console.log(result);
let sum = "5" + 10; // "510" (number 10 is coerced to string "10")
console.log(sum);

// 5. Type Conversion
let numString = "123";
let num = Number(numString); // Converts string to number
console.log(num);
let strNum = String(num); // Converts number back to string
console.log(strNum);
