// ============================================================
// DAY 15 — JAVASCRIPT EXECUTION MODEL
// Hoisting, Temporal Dead Zone, Execution Context, Call Stack
// CodeWeavers MERN Full Stack — Job Ready Program
// ============================================================
//
// Everything below is commented out. As we go through each
// concept, we'll uncomment that block and run the file to see
// the output live.
//
// Run with: node Day15.js - meet.google.com/mfj-oyry-hrj
// ============================================================


// ============================================================
// PART 1 — THE CURIOSITY HOOK: TWO SIMILAR LINES, TWO DIFFERENT RESULTS
// ============================================================
// Both blocks below look almost identical. One uses var, one
// uses let. Predict what each one prints BEFORE uncommenting.

// console.log(a);
// a = undefined;  // creation phase
// var a = 5;  
// console.log(a);  // print -> 5 

// let age;  // declaration
// age = 20;  // assign

// let age = 25; // intialized

// console.log(b);
// let b = 10;

// Run only the "var" block first, look at the result, then run
// the "let" block separately. They do NOT behave the same way --
// and understanding exactly why is the entire point of today.
//
// var  -> prints undefined
// let  -> throws: ReferenceError: Cannot access 'b' before initialization
//
// Both a and b are known to JavaScript before this code runs.
// But only one of them is USABLE early. Today explains exactly
// why, using one core idea: the TWO-PHASE EXECUTION MODEL.


// ============================================================
// PART 2 — THE TWO-PHASE EXECUTION MODEL (THE CORE IDEA OF THE DAY)
// ============================================================
// JavaScript does NOT run your code in a single pass. For every
// scope it enters (the whole file, or a function call), it goes
// through TWO separate phases:
//
//   CREATION PHASE                 EXECUTION PHASE
//   (before any code visibly runs)  (your code runs, line by line)
//   ------------------------------  ------------------------------
//   - scan for var/let/const/func   - assignments actually happen
//   - allocate memory for each      - function calls actually run
//   - var -> set to undefined       - this is the "normal" behavior
//   - let/const -> left UNUSABLE      you already expect
//   - function declarations ->
//       stored COMPLETELY (with
//       their full body)
//
// Hoisting is NOT "JavaScript moves your code to the top."
// Nothing physically moves. Hoisting is simply what the CREATION
// PHASE looks like from the outside -- declarations are already
// known before the execution phase begins.
//
// Every single thing you learn for the rest of today is a
// DIRECT CONSEQUENCE of this one model. Nothing else needs to be
// memorized as a separate, unrelated rule.


// ============================================================
// PART 3 — var HOISTING, TRACED IN DETAIL
// ============================================================

// console.log(score);  // Line 1
// var score = 90;      // Line 2
// console.log(score);  // Line 3

// Trace it:
//   CREATION PHASE  -> score is registered, set to undefined
//   EXECUTION PHASE, Line 1 -> prints undefined (score exists, no value assigned yet)
//   EXECUTION PHASE, Line 2 -> score is now assigned 90
//   EXECUTION PHASE, Line 3 -> prints 90
//
// Expected output:
//   undefined
//   90
//
// var is hoisted AND initialized to undefined during the
// creation phase. Referencing it early does NOT crash -- it
// just gives a placeholder value. This is exactly why the
// earlier "a" example printed undefined and not an error.


// ============================================================
// PART 4 — let AND const HOISTING: THE TEMPORAL DEAD ZONE (TDZ)
// ============================================================

// console.log(total);  // Line 1
// let total = 200;     // Line 2

// Trace it:
//   CREATION PHASE  -> total is registered, but LEFT UNINITIALIZED
//                       (not even undefined -- genuinely unusable)
//   EXECUTION PHASE, Line 1 -> throws:
//       ReferenceError: Cannot access 'total' before initialization
//
// let and const ARE hoisted -- the engine already knows they
// exist. But unlike var, they are NOT given a usable value
// during the creation phase. The stretch of code between the
// start of the scope and the actual declaration line is called
// the TEMPORAL DEAD ZONE (TDZ).
//
// Visualized:
//
//   |--- scope starts ---|====== TDZ for total ======|  let total = 200;  |--- usable from here ---|
//
// Comparison table:
//
//                          var          let / const
//   Hoisted?               Yes          Yes
//   Usable during
//     creation phase?      Yes (undefined)   No (locked / TDZ)
//   Access before
//     declaration line     undefined    ReferenceError


// ============================================================
// PART 5 — WHY DOES THE TDZ EXIST?
// ============================================================
// Think about it before reading the answer below.
//
// With var, an early access silently returns undefined, and
// broken logic can keep running WITHOUT any warning at all.
// That's dangerous -- a bug can hide for a long time.
//
// The TDZ turns that exact same mistake into an IMMEDIATE, LOUD
// error the moment you try to use the variable too early. It's
// a safety net, not a punishment. Modern JavaScript engineering
// prefers let/const over var largely BECAUSE of this behavior --
// it catches bugs earlier and louder.


// ============================================================
// PART 6 — TDZ INSIDE A BLOCK
// ============================================================

// {
//   console.log(x); // TDZ -- ReferenceError
//   let x = 5;
//   console.log(x); // 5 -- fine now, we're past the declaration line
// }

// The TDZ is per-scope. Every let/const has its OWN TDZ, running
// from the start of its containing scope to its own declaration
// line -- not the whole file, just that variable's own scope.


// ============================================================
// PART 7 — FUNCTION DECLARATION HOISTING (FULLY HOISTED)
// ============================================================

// sayHello(); // works, even though it's called BEFORE the definition below!

// function sayHello() {
//   console.log("Hello!");
// }

// Trace it:
//   CREATION PHASE -> sayHello is hoisted WITH ITS ENTIRE BODY
//                     already attached -- not just the name
//   EXECUTION PHASE -> calling sayHello() before its written
//                       position works perfectly, because the
//                       complete function was already available
//
// This is very different from var: var is hoisted as an EMPTY
// placeholder (undefined). A function DECLARATION is hoisted as
// the COMPLETE, ready-to-call function.


// ============================================================
// PART 8 — FUNCTION EXPRESSION HOISTING (NOT FULLY HOISTED)
// ============================================================

// sayHi(); // throws an error!
// console.log(sayHi);  // undefined

// var sayHi = function () {
//   console.log("Hi!");
// };

// sayHi();

// Trace it:
//   CREATION PHASE -> sayHi is hoisted as a var -- registered,
//                     set to undefined (exactly like Part 3).
//                     The function BODY is NOT hoisted, because
//                     this is just a value being assigned to a
//                     variable, not a function declaration.
//   EXECUTION PHASE, Line 1 -> sayHi() tries to CALL undefined
//                               as if it were a function
//
// Result:
//   TypeError: sayHi is not a function
//
// THE RULE TO REMEMBER:
//   Function DECLARATIONS  -> hoisted completely (name + body)
//   Function EXPRESSIONS   -> only the VARIABLE's hoisting rule
//                              applies (var/let/const) -- the
//                              function body is NOT available early


// ============================================================
// PART 9 — SAME MISTAKE, DIFFERENT KEYWORD -> DIFFERENT ERROR
// ============================================================

// sayHey(); // throws an error -- but a DIFFERENT kind!

// let sayHey = function () {
//   console.log("Hey!");
// };

// Because sayHey is declared with LET instead of VAR, this is
// now a TDZ violation, not an "undefined is not a function" issue:
//
//   ReferenceError: Cannot access 'sayHey' before initialization
//
// Compare all three function-related errors side by side:
//   function declaration, called early  -> works fine
//   var + function expression, called early -> TypeError: X is not a function
//   let + function expression, called early -> ReferenceError: Cannot access before initialization


// ============================================================
// PART 10 — EXECUTION CONTEXT: WHAT IT ACTUALLY IS
// ============================================================
// An execution context is the environment JavaScript creates to
// run a piece of code. It holds:
//   - that scope's variables
//   - the value of "this"
//   - a reference to its outer (parent) scope
//
// Two kinds matter today:
//
//   GLOBAL EXECUTION CONTEXT (GEC)
//     - created ONCE, when your script starts running
//     - holds every top-level variable and function
//
//   FUNCTION EXECUTION CONTEXT (FEC)
//     - created FRESH, every single time a function is CALLED
//       (not when it's defined -- only when it's actually invoked)
//     - destroyed once the function finishes running


// ============================================================
// PART 11 — FUNCTION EXECUTION CONTEXT, DEMONSTRATED
// ============================================================

// function greet(name) {
//   let message = `Hello, ${name}`;
//   console.log(message);
// }

// greet("Aman");
// greet("Riya");

// Each call to greet() gets its OWN, SEPARATE execution context --
// its own "name", its own "message". Calling greet("Aman") and
// then greet("Riya") does NOT share or overwrite data between
// the two calls. They are completely independent environments,
// created fresh at call time and destroyed after the function
// returns.


// ============================================================
// PART 12 — ACCIDENTAL GLOBAL VARIABLES (A REAL DANGER)
// ============================================================

// function updateScore() {
//   score = 100; // no var / let / const !!
//   console.log(score);
// }

// updateScore();
// console.log(score); // still accessible out here -- why?

// Without a declaration keyword, an assignment inside a function
// creates an ACCIDENTAL GLOBAL variable -- it escapes the
// function's own execution context and lands in the Global
// Execution Context instead. This is exactly the kind of bug
// that disciplined use of let/const prevents.


// ============================================================
// PART 13 — THE CALL STACK
// ============================================================
// The call stack tracks which function is CURRENTLY running, and
// which function called it. It behaves like a stack of plates:
// Last In, First Out (LIFO).

// function first() {
//   console.log("Inside first");
//   second();
//   console.log("Back in first");
// }

// function second() {
//   console.log("Inside second");
// }

// first();

// Trace the stack, step by step:
//
//   Step 1: first() is called          Stack: [ first ]
//   Step 2: "Inside first" logs                 
//   Step 3: second() is called         Stack: [ first, second ]
//   Step 4: "Inside second" logs
//   Step 5: second() finishes, pops    Stack: [ first ]
//   Step 6: "Back in first" logs
//   Step 7: first() finishes, pops     Stack: [ ]
//
// Expected output:
//   Inside first
//   Inside second
//   Back in first
//
// Every function call PUSHES a new frame onto the stack. When a
// function finishes, its frame is POPPED off, and control
// returns to exactly where it left off in the function that
// called it. This is the actual mechanism that makes nested
// function calls -- and later, recursion -- work correctly.


// ============================================================
// PART 14 — SCOPE CONNECTION (LINKING BACK TO WEEK 2)
// ============================================================

// function outer() {
//   let a = 1;

//   function inner() {
//     console.log(a); // inner can "see" a, because of scope
//   }

//   inner();
// }

// outer();

// inner() can access "a" because of scope rules you already
// know from Week 2. But the REASON "a" already has a value
// ready by the time inner() runs is exactly the execution model
// from today -- hoisting and the creation/execution phases are
// what make "a" available and initialized before inner() is
// ever called.


// ============================================================
// PART 15 — LEXICAL ENVIRONMENT (A BRIEF INTRODUCTION)
// ============================================================

function outer2() {
  let value = "outer value";

  function inner2() {
    console.log(value); // finds "value" via the link to outer2's scope
  }

  inner2();
}

outer2();

// A lexical environment is, in simple terms, the structure that
// holds a scope's variables PLUS a link to its parent scope's
// lexical environment. "Lexical" means it's based on WHERE the
// code is physically written -- not on how or when a function
// happens to be called.
//
// This single idea -- a function remembering the environment it
// was written in -- is also the foundation of CLOSURES, a topic
// covered in much more depth later in the program. For today,
// just knowing this term exists, and roughly what it means, is
// enough.


// ============================================================
// PART 16 — GUIDED TRACING: PUTTING IT ALL TOGETHER
// ============================================================
// Predict the FULL output of each snippet below before
// uncommenting and running it.

// --- Trace A ---
// console.log(x1);
// console.log(y1);
// var x1 = 1;
// let y1 = 2;
//
// (the second console.log never gets a chance to print --
// the TDZ error on y1 halts execution right there)


// --- Trace B ---
// add(2, 3);
//
// function add(a, b) {
//   console.log(a + b);
// }
//
// (fully hoisted function declaration -- position in the file
// doesn't matter)


// --- Trace C ---
// console.log(typeof multiply);

// function multiply(a, b) {
//   return a * b;
// }
// console.log(typeof multiply2);
// var multiply2 = function (a, b) {
//   return a * b;
// };

// console.log(typeof multiply2);
//
// (first prints "function" -- fully hoisted declaration.
//  second prints "undefined" -- var hoisted as empty placeholder)


// ============================================================
// PART 17 — DEBUGGING PRACTICE: SPOT THE BUG BEFORE RUNNING
// ============================================================
// Each block below has a deliberate execution-order bug. Try to
// identify the exact error type and cause before uncommenting.

// --- Bug A: single TDZ violation ---
// function calculateTotal() {
//   console.log(total);
//   let total = price * quantity;
//   const price = 100;
//   const quantity = 2;
// }
// calculateTotal();
//
// (there are actually MULTIPLE TDZ violations stacked here --
// total, price, AND quantity are all referenced before their
// own declaration lines within this same function)


// --- Bug B: function expression called too early ---
// processOrder();
//
// var processOrder = function () {
//   console.log("Order processed");
// };
//
// (TypeError: processOrder is not a function)


// --- Bug C: accidental global leak, revisited ---
// function updateInventory() {
//   stock = 50; // missing declaration keyword!
//   console.log(stock);
// }
// updateInventory();
// console.log(stock); // accessible here too -- confirms it leaked globally


// ============================================================
// PART 18 — FINAL PREDICTION CHALLENGE
// ============================================================
// This combines several rules from today at once. Write your
// FULL prediction on paper -- every console.log output, plus the
// exact error type and the exact line that causes it -- before
// uncommenting anything below.

// console.log(typeof processData);  // function

// function processData(data) {
//   console.log("Processing:", data);
//   return transform(data);
// }

// call stack

// 1. console.log(typeof processData);  // function
// 2. console.log(typeof transform);  // undefined
// 3. var transform = func {}   // assigned function to the var
// 4. runpipeline() -> line 505 -> refrence error because result cant access before intialization


// console.log(typeof transform);  // undefined

// var transform = function (data) {
//   return data.toUpperCase();
// };

// function runPipeline() {
//   console.log(result);
//   var result = processData(inputValue);
//   var inputValue = "hello world";
//   console.log(result);
  
// }

// runPipeline();


// ============================================================
// END OF DAY 15
// ============================================================
// Today we did not learn any new syntax. We learned how the
// engine underneath ALL our syntax actually works:
//
//   - Hoisting is a side effect of the creation phase, not code
//     "moving" anywhere
//   - var is hoisted AND initialized to undefined
//   - let/const are hoisted but left locked -- the Temporal Dead Zone
//   - Function declarations are hoisted completely, body included
//   - Function expressions only inherit their variable's hoisting rule
//   - Every function call gets its own fresh execution context
//   - The call stack tracks which function is running, and returns
//     control correctly when each one finishes
//
// Tomorrow, this same X-ray vision gets applied back to arrays
// and objects, combined into larger, more realistic data --
// Day 16: Objects + Arrays Integration.
// ============================================================