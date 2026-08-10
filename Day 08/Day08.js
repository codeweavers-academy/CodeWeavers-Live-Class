

// do-while loop

// let number = 1;

// do {
//   console.log(number);
//   number++;  // increment the number by 1
// } while (number <= 0);

// while (number <= 0) {
//   console.log(number);
//   number++;  // increment the number by 1
// }

// console.log("The loop has ended.");

// Q. Print 1 to 100

// while (number <= 100) {
//   console.log(number);
//   number++;  // increment the number by 1
// }

// BREAK STATEMENT

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     console.log("Found the number 5!");
//     break; // exit the loop when i is equal to 5
//   }
//   console.log(i);
// }

// dry run
// i = 1, 1 <= 10, print 1
// i = 2, 2 <= 10, print 2
// i = 3, 3 <= 10, print 3
// i = 4, 4 <= 10, print 4
// i = 5, 5 <= 10, Found the number 5!, break

// continue statement

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     console.log("Found the number 5!");
//     continue; // skip the rest of the loop when i is equal to 5
//   }

//   console.log(i);
// }

// dry run
// i = 1, 1 <= 10, print 1
// i = 2, 2 <= 10, print 2
// i = 3, 3 <= 10, print 3
// i = 4, 4 <= 10, print 4
// i = 5, 5 <= 10, Found the number 5!, continue
// i = 6, 6 <= 10, print 6
// i = 7, 7 <= 10, print 7
// i = 8, 8 <= 10, print 8
// i = 9, 9 <= 10, print 9
// i = 10, 10 <= 10, print 10

// NESTED for LOOPS

// for (let i = 1; i <= 3; i++) {
//   console.log(`Outer loop iteration ${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(`  Inner loop iteration ${j}`);
//   }
// }

// dry run
// i = 1, 1 <= 3, print Outer loop iteration 1
// j = 1, 1 <= 3, print Inner loop iteration 1
// j = 2, 2 <= 3, print Inner loop iteration 2
// j = 3, 3 <= 3, print Inner loop iteration 3
// i = 2, 2 <= 3, print Outer loop iteration 2
// j = 1, 1 <= 3, print Inner loop iteration 1
// j = 2, 2 <= 3, print Inner loop iteration 2
// j = 3, 3 <= 3, print Inner loop iteration 3
// i = 3, 3 <= 3, print Outer loop iteration 3
// j = 1, 1 <= 3, print Inner loop iteration 1
// j = 2, 2 <= 3, print Inner loop iteration 2
// j = 3, 3 <= 3, print Inner loop iteration 3


// INTRODUCTION TO ITERATORS

// An iterator is an object that allows you to traverse through a collection of data, 
// such as an array or a string. In JavaScript, iterators are implemented using the 
// Symbol.iterator property, which returns an iterator object that has a next() method. 
// The next() method returns an object with two properties: value (the current value) and 
// done (a boolean indicating whether the iteration is complete).

// for..of

// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// for (let fruit of fruits) {
//   if(fruit === "cherry") {
//     console.log("Found the fruit cherry!");
//     break; // exit the loop when fruit is equal to "cherry"
//   }
//   console.log(fruit);
// }

// for...in
// for (let i in fruits) {
//   console.log(`${i}: ${fruits[i]}`);
// }


// INTRODUCTION  TO FOR EACH

// The forEach() method is an array method that allows you to iterate over the elements of 
// an array and execute a provided function for each element. It takes a callback function as an argument,
//  which is called once for each element in the array. The callback function can take up to 
// three arguments: the current element, the index of the current element, and the array being traversed.

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.forEach(function(fruit, index, array) {
  console.log(`Index: ${index}, Fruit: ${fruit}`);
  // console.log(array); // Uncomment this line to see the entire array
});