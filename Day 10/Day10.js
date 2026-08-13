// DAY 10 - ✅ Learning Objectives

// Recall the function foundation from Day 09 
// Explain a Function Expression 

// const add = function(a, b) {
//   return a + b;
// }

// console.log(add(5, 10)); // Output: 15



// Write a Function Expression

// const age = 25;

// const name = "Ram";

// const isStudent = false;

// function greet(name) {
//   if (isStudent) {
//     console.log("Hello, " + name + "! You are a student.");
//   }
//   else {
//     console.log("Hello, " + name + "! You are not a student.");
//   }
// }

// const greet = function(name) {
//   if (isStudent) {
//     console.log("Hello, " + name + "! You are a student.");
//   }
// };

// greet(name); // Output: Hello, Ram! You are a student.


// Function as Values
// variable -> contains -> Functions



// Compare Function Declaration and Function Expression
// Explain an Arrow Function

// Arrow Function -> Javascript developers frequently write small functions. Javascript proivide a concise syntax for writing them

// const add = function(a, b) {
//   return a + b;
// }

// // convert to arrow function

// const addArrow = (a, b) => {
//   return a + b;
// };

// // call
// addArrow(5, 10); // Output: 15


// // Convert a normal function into an Arrow Function

// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// const greetArrow = (name) => {
//   console.log("Hello, " + name + "!");
// };



// // Understand parameters in Arrow Functions


// // Understand implicit return

// const addArrowImplicit = (a, b) => a + b;

// console.log(addArrowImplicit(5, 10)); // Output: 15

// const addArrowExplicit = (a, b) => {
//   return a + b;
// };

// console.log(addArrowExplicit(5, 10)); // Output: 15


// Explain that functions can be stored in variables


// Understand the basic idea of functions as values


// Understand what scope means
// Scope is the current context of code, which determines the accessibility of variables to JavaScript. In other words, scope refers to the visibility or lifetime of variables and functions in different parts of your code.

// function greet() {
//     let message = "Hello Codeweavers";
//     console.log(message);       
// }
// greet(); // Output: Hello, Alice!

// function greet() {
//     let message = "Hello Codeweavers";
// }
// console.log(message); // Output: ReferenceError: message is not defined      

// Identify basic Global Scope

// let username = "CodeWeavers"; // Global Scope

// function greet() {
//     console.log("Hello, " + username + "!"); // Accessing global variable
// }

// greet(); // Output: Hello, CodeWeavers!


// Identify basic Function Scope



// Identify basic Block Scope


// if(true) {
//     let score = 100; // Block Scope
//     console.log("Score inside block: " + score); // Output: Score inside block: 100
// }

// console.log("Score outside block: " + score); // Output: ReferenceError: score is not defined

if(true) {
    let message = "Hello, CodeWeavers!"; // Block Scope
    console.log(message); // Output: Hello, CodeWeavers!
}

for(let i = 0; i < 3; i++) {
    let loopMessage = "Iteration " + i;
    console.log(loopMessage);
}

// Predict simple scope-related behaviour




// Debug basic scope mistakes


// Refactor existing Day 09 functions using modern syntax