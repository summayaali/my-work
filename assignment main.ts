//  04: Exploring Objects with for...in Loop
// Objective: Practice working with objects in TypeScript and iterating over their properties using a for...in loop.

let objectWithThreeItems = { item01: "novels", item02: "Bike", item03: "sting" }; // An object containing three items
for (const key in objectWithThreeItems) { // For in loop
    console.log(`${key}: ${objectWithThreeItems[key]}`);
}

// 05:5.Exploring Arrays with Loops(Using loop )
//Objective: Practice working with arrays in TypeScript and using for loops and for...of loops
//to iterate through array elements.

//Step 1: Create an empty array
let myArray: number[] = [];

// Step 2: Populate the array with incrementing values using a for loop
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}

// Step 3: Log the array into the console
console.log("Array after populating:", myArray);

// Step 4: Use a for loop to iterate through the array elements and output index and element
console.log("Using for loop:");
for (let j = 0; j < myArray.length; j++) {
    console.log(`Index ${j}: ${myArray[j]}`);
}

// Step 5: Use a for...of loop to directly output each array element into the console
console.log("Using for...of loop:");
for (const element of myArray) {
    console.log(element);
}