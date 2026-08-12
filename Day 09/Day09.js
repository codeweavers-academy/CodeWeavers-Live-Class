 // Function - A function is a resuable block of code designed to perform a specific task.

// Clear Resposibility -> Each function should have one, and only one, reason to change.

//  Task -> AnalyzeMarks
// calculateTotal(), chceckPass(), calculateGrade(), printReport(), findLargest(), 
// calculateAverage(), findSmallest(), sortMarks(), searchMark(), calculateMedian()


// FUNCTION LIFECYCLE

// 1. Define the function
// 2. Call the function
// 3. Execute the function
// 4. Return from the function

// Function Declaration and Calling
// SYNTAX
// function functionName() {
//   // code to be executed
// }


// function declaration
//

// function call
// greet(); // Output: Hello, CodeWeavers

// Definition is not equal to Execution.

// Function Execution

// console.log("Starting the program...");

// function greet() {
//   console.log("Hello, CodeWeavers");
// }

// console.log("Before calling the greet function.");

// greet(); // Output: Hello, CodeWeavers

// console.log("After calling the greet function.");

// Parameters and Arguments

// function greet(name1, name2) {
//   console.log("Hello, " + name1 + " and " + name2);
// }

// greet("Alice", "Bob"); // Output: Hello, Alice and Bob

// function checkAge(age) {
//   if (age < 18) {
//     console.log("You are a minor.");
//   } else {
//     console.log("You are an adult.");
//   }
// }

// checkAge(15); // Output: You are a minor.
// checkAge(20); // Output: You are an adult.


// Function Return Values

// function add(a, b) {
//    let sum = a + b;
//    // return sum;
//    console.log(sum); // Output: 15
// }

// let result = add(5, 10);
// console.log(result); // Output: 15


function calculateArea(length, width) {
  let area = length * width;
  return area;
}

let roomArea = calculateArea(5, 10);
console.log("The area of the room is: " + roomArea); // Output: The area of the room is: 50

let hallArea = calculateArea(8, 12);
console.log("The area of the hall is: " + hallArea); // Output: The area of the hall is: 96

let officeArea = calculateArea(6, 9);
console.log("The area of the office is: " + officeArea); // Output: The area of the office is: 54

// Student Grade Analyzer
