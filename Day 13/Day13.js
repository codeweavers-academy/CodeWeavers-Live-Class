// ============================================================
// DAY 13 — ARRAYS: MANAGING COLLECTIONS
// CodeWeavers MERN Full Stack — Job Ready Program
// ============================================================
//
// Everything below is commented out. As we go through each
// concept, we'll uncomment that block and run the file to see
// the output live.
//
// Run with: node Day13.js
// ============================================================


// ============================================================
// PART 1 — THE PROBLEM WITH SCATTERED VARIABLES
// ============================================================
// A coaching app needs to store the names of students in a batch.
// The "obvious" approach is to create one variable per student.
// Let's try it with just 4 students first.

// const student1 = "Aman";
// const student2 = "Riya";
// const student3 = "Karan";
// const student4 = "Neha";

// console.log(student1, student2, student3, student4);

// This "works" for 4 students. But think about it:
// - What happens when there are 30 students? 500? 10,000?
// - How do you print all of them without writing hundreds of
//   console.log lines?
// - How do you find student #217's name?
// - How would you calculate the average length of all these names
//   using a loop, when there's nothing here to loop OVER?
//
// One variable per value does not scale. We need a single
// variable that can hold MANY related values, in order.
// That structure is called an ARRAY.


// ============================================================
// PART 2 — CREATING AN ARRAY
// ============================================================
// An array is a single variable that holds many related values,
// in order, where each value has a numbered position.
//
// Picture it as a row of numbered slots:
//
//   Index:   0        1        2        3
//   Value:  Aman     Riya    Karan     Neha
//
// Compare this ONE line to the four separate variables above:

const students = ["Aman", "Riya", "Karan", "Neha"];
console.log(students);

// Anatomy of this line:
//   const students   -> one variable name for the WHOLE collection
//   [ ]                -> the array literal — the "container"
//   "Aman", "Riya"...  -> the elements, separated by commas
//   position 0,1,2,3   -> the INDEX of each element (its slot number)


// ============================================================
// PART 3 — ACCESSING VALUES BY INDEX
// ============================================================
// Each element can be read using its index inside square brackets:
// arrayName[index]
//
// IMPORTANT: index is NOT "first, second, third" counting.
// Index means DISTANCE FROM THE START.
// The first element is 0 steps away from the start, so its
// index is 0. The second element is 1 step away, so its index
// is 1. And so on.

console.log(students[0]); // Aman  -> 1st element, index 0
console.log(students[1]); // Riya  -> 2nd element, index 1
console.log(students[2]); // Karan -> 3rd element, index 2
console.log(students[3]); // Neha  -> 4th element, index 3


// ============================================================
// PART 4 — LENGTH AND THE LAST VALID INDEX
// ============================================================
// .length tells us how many elements are currently in the array.
// It is a COUNT, not an index.

// console.log(students.length); // 4 -> there are 4 elements total

// Since indexing starts at 0, the LAST valid index is always
// one less than the length:
//
//     last index = length - 1
//
// For an array with length 4, valid indexes are 0, 1, 2, 3.
// There is NO index equal to 4.

console.log(students[3]);                     // Neha (last element, hardcoded)
console.log(students[students.length - 1]);   // Neha (last element, SAFE way — works for any array size)


// ============================================================
// PART 5 — THE OUT-OF-BOUNDS TRAP
// ============================================================
// This is the single most common beginner array mistake:
// using .length itself as an index.

console.log(students[4]);              // undefined -> index 4 does not exist!
console.log(students[students.length]); // undefined -> SAME mistake, one slot past the end

// Rule to remember: arr[arr.length] is ALWAYS undefined,
// no matter how big the array is. Always use length - 1
// for the last element.


// ============================================================
// PART 6 — UPDATING VALUES
// ============================================================
// You can replace the value at a specific index using assignment,
// the same way you'd reassign a normal variable.

students[1] = "Ishaan";
console.log(students); // [ 'Aman', 'Ishaan', 'Karan', 'Neha' ]

// Notice: we did NOT recreate the whole array. We reached into
// slot 1 specifically and replaced only that value. The rest
// of the array stayed exactly the same.


// ============================================================
// PART 7 — TRAVERSING AN ARRAY (VISITING EVERY ELEMENT)
// ============================================================
// Traversal means visiting every element, one at a time, in order.
// This uses the EXACT same for-loop structure from Week 2 —
// the only new thing is students[i] inside it.
//
// Dry run for a 4-element array:
//
//  i | condition i < 4 | students[i] | action
//  0 |      true       |    Aman     | print
//  1 |      true       |   Ishaan    | print
//  2 |      true       |    Karan    | print
//  3 |      true       |     Neha    | print
//  4 |      false      |     --      | loop stops (i is no longer < 4)

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}


// ============================================================
// PART 8 — THE OFF-BY-ONE BUG (<=  instead of <)
// ============================================================
// Watch what happens if we change < to <= in the loop condition.

for (let i = 0; i <= students.length; i++) {
  console.log(students[i]); // last line prints undefined!
}

// Debugging process for this bug:
//   Problem      -> the last line printed is "undefined"
//   Cause        -> the loop ran one extra time, at i = length,
//                    which is an invalid index (the out-of-bounds trap again)
//   Investigation -> log i and students.length together to see
//                    the loop go one step too far
//   Fix          -> change <= back to <
//   Prevention   -> default to < in array traversal loops unless
//                    there's a specific, deliberate reason not to


// ============================================================
// PART 9 — PROCESSING: COMBINING TRAVERSAL WITH COMPUTATION
// ============================================================
// This is the real power of arrays + loops together: not just
// printing values, but computing something from ALL of them.
//
// The accumulator variable (totalLength) MUST be declared
// OUTSIDE the loop, so it keeps its running value across every pass.

let totalLength = 0;
for (let i = 0; i < students.length; i++) {
  totalLength += students[i].length;
}
console.log("Total character length:", totalLength);

// Here's the bug version, to see WHY the accumulator's position matters:

for (let i = 0; i < students.length; i++) {
  let totalLengthWrong = 0; // BUG: this resets to 0 on every single pass!
  totalLengthWrong += students[i].length;
  console.log("wrong: " + [i] + " " + totalLengthWrong); // never actually accumulates
}


// ============================================================
// PART 10 — BASIC ARRAY OPERATIONS: push, pop, unshift, shift
// ============================================================
// Collections grow and shrink over time. These four operations
// are the basic ways to add or remove elements.
//
//   push(value)     -> adds to the END
//   pop()           -> removes from the END
//   unshift(value)  -> adds to the BEGINNING
//   shift()         -> removes from the BEGINNING
//
// Watch how the array and its length change after each line.

console.log("\n==============================================================\n")

const queue = ["Aman", "Riya", "Karan"];
console.log("Start:", queue, "| length:", queue.length);

queue.push("Ishaan");
console.log("After push:", queue, "| length:", queue.length);

queue.pop();
console.log("After pop:", queue, "| length:", queue.length);

queue.unshift("Aditi");
console.log("After unshift:", queue, "| length:", queue.length);

queue.shift();
console.log("After shift:", queue, "| length:", queue.length);


// ============================================================
// PART 11 — ARRAYS + FUNCTIONS (REUSABLE PROCESSING)
// ============================================================
// Without functions, we'd have to rewrite the same traversal
// loop every time we needed it. Wrapping it in a function lets
// us reuse the exact same logic on ANY array we pass in.

function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAll(students);
printAll(["Different", "Array", "Same", "Function"]);

// Note: the parameter name "arr" has nothing to do with the
// variable name outside the function — it's just a label for
// whatever array gets passed in when the function is called.


// ============================================================
// PART 12 — MORE DEBUGGING PRACTICE
// ============================================================
// Each block below has ONE deliberate bug. Try to spot it before
// running the code.

// --- Bug A: wrong index used ---
// const scores = [67, 89, 45, 92, 78];
// console.log("Top score is:", scores[5]); // wrong! valid indexes are 0-4 only

// --- Bug B: length misused as an index ---
// const books = ["Atomic Habits", "Deep Work", "Clean Code"];
// console.log("Last book:", books[books.length]); // undefined! should be books[books.length - 1]

// --- Bug C: wrong update target ---
// const inventory = [10, 20, 30];
// // Intent: increase the FIRST item by 5
// inventory[1] = inventory[1] + 5; // wrong index! this updates the SECOND item
// console.log(inventory);

// For each one: identify the Problem, the Cause, and the Fix
// before moving to the next.


// ============================================================
// PART 13 — MINI PROJECT: STUDENT SCORE ANALYZER
// ============================================================
// We'll build this one function at a time. Each function does
// exactly one job — that's good engineering practice, not just
// good habit.

const examScores = [67, 89, 45, 92, 78, 33];

// Displays every score with its index.
function displayScores(scores) {
  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}

// Adds up every score using traversal + accumulation.
function calculateTotal(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    // total += scores[i];
    total = total + scores[i];
  }
  return total;
}

// Computes the average. Guards against an empty array so we
// never divide by zero.
function calculateAverage(scores) {
  if (scores.length === 0) return 0;
  return calculateTotal(scores) / scores.length;
}

// Finds the highest score using pure traversal (no Math.max).
function findHighest(scores) {
  let highest = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }
  return highest;
}

// Finds the lowest score using pure traversal (no Math.min).
function findLowest(scores) {
  let lowest = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < lowest) {
      lowest = scores[i];
    }
  }
  return lowest;
}

// Counts how many scores meet or exceed a passing threshold.
function countPassing(scores, passMark) {
  let count = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= passMark) {
      count++;
    }
  }
  return count;
}

// Running everything together:
displayScores(examScores);
console.log("Total:", calculateTotal(examScores));
console.log("Average:", calculateAverage(examScores));
console.log("Highest:", findHighest(examScores));
console.log("Lowest:", findLowest(examScores));
console.log("Passing count:", countPassing(examScores, 40));

// Edge case test — what should happen with an EMPTY array?
// console.log("Empty array average:", calculateAverage([])); // should be 0, not crash


// ============================================================
// PART 14 — PREDICT BEFORE RUNNING (FINAL EXERCISE)
// ============================================================
// Before uncommenting this block, write down the FULL predicted
// output, line by line, on paper. Then uncomment and check.

const nums = [10, 20, 30];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}


// ============================================================
// END OF DAY 13
// ============================================================
// Arrays let us organize many values under one name, accessed
// by position. But what happens when ONE item itself needs many
// properties — like a single student having a name, an age, and
// a batch, all together?
//
// That's tomorrow: Day 14 — Objects.
// ============================================================