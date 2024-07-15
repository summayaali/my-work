// Step 1: Create a blank array
let myWork: { name: string, status: boolean }[] = [];

// Step 2: Use a loop to create lessons
for (let i = 1; i <= 10; i++) {
    // Determine the name of the lesson
    let lessonName = `Lesson ${i}`;

    // Determine the status (alternating between true and false)
    let status = i % 2 === 1; // i is odd -> status is true, i is even -> status is false

    // Create the lesson object
    let lesson = { name: lessonName, status: status };

    // Step 3: Add the lesson to the array
    myWork.push(lesson);
}

// Step 4: Print the result
console.log(myWork);