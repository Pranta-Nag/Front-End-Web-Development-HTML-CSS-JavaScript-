// Loop in JS

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// While loop structure: 
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do-While loop structure: 
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);


// loop use case:
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Nested loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
    }
} 
