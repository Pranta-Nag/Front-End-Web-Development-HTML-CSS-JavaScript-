// Logical operator in JS

let x = 5;
let y = 10;
let z = 30;

// Logical AND (&&)
if (x > 0 && y > 0) {
    console.log("Both x and y are positive.");
}

// Logical OR (||)
if (x > 0 || y > 0) {
    console.log("At least one of x or y is positive.");
}

// Logical NOT (!)
if (!(x > 0)) {
    console.log("x is not positive.");
}

// Comparison operator
if (x < y) {
    console.log("x is less than y.");
}

if (x <= y) {
    console.log("x is less than or equal to y.");
}

if (x > y) {
    console.log("x is greater than y.");
}

if (x >= y) {
    console.log("x is greater than or equal to y.");
}

if (x == y) {
    console.log("x is equal to y.");
}

if (x != y) {
    console.log("x is not equal to y.");
}

if (x === y) {
    console.log("x is strictly equal to y.");
}

if (x !== y) {
    console.log("x is not strictly equal to y.");
}

// if - else using array

let fruits = ["apple", "banana", "orange"];
let fruit = "banana";

if (fruits.includes(fruit)) {
    console.log("I have a " + fruit + ".");
} else {
    console.log("I don't have a " + fruit + ".");
}

