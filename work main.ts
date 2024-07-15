
// 02: Guessing game (using while loop).
//Objective: Create a simple number guessing game where the user tries to guess a randomly
//generated number between 1 and a specified maximum value using a predefined set of guesses.



let maxNumber = 50; //Declaring the maximum number
let randomNumber = Math.floor(Math.random() * maxNumber + 1); //Generating a random number
console.log(randomNumber); //Printing the Random Number
let userGuess = false; // User guess which is initiallu false which will be set to true when the guess is correct
let totalGuesses = [19, 27, 49, 8]; //An array of predefines Guesses
let iterator = 0; // This Variable helps checking every item in the array
while (iterator < totalGuesses.length) {
    if (totalGuesses[iterator] === randomNumber) {
        console.log("Your guess is correct");
        userGuess = true;
    }
    else {
        if (totalGuesses[iterator] < randomNumber) {
            console.log("Your Guess is too low");
        }
        else if (totalGuesses[iterator] > randomNumber) {
            console.log("Your Guess is too high");
        }
    }
    iterator++;
}




// 03:  Counter Incrementer (Using do while loop )
//Objective: Create a program that increments a counter by a specified step value using a
//do...while loop and prints the counter value to the console until it reaches or exceeds 100.

// Step 1: Set starting counter to 0
let counter = 0;

// Step 2: Define step value
const step = 10; // You can adjust this step value as needed

// Step 3: Use a do...while loop
do {
    // Print current counter value
    console.log(`Counter: ${counter}`);

    // Increment counter by the step amount
    counter += step;
} while (counter < 100); // Step 4: Continue looping until counter reaches or exceeds 100