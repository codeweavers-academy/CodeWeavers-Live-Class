// ============================================================
// DAY 14 — OBJECTS: MODELLING REALITY
// CodeWeavers MERN Full Stack — Job Ready Program
// ============================================================
//
// Everything below is commented out. As we go through each
// concept, we'll uncomment that block and run the file to see
// the output live.
//
// Run with: node Day14.js 
// GMEET LINK - https://meet.google.com/cei-mbby-enw
// ============================================================


// ============================================================
// PART 1 — THE PROBLEM WITH SCATTERED VARIABLES
// ============================================================
// A coaching app needs to store complete information about one
// student: name, age, email, branch, and CGPA.

// const studentName = "Aman";
// const studentAge = 21;
// const studentEmail = "aman@example.com";
// const studentBranch = "CSE";
// const studentCgpa = 8.4;

// console.log(studentName, studentAge, studentEmail, studentBranch, studentCgpa);

// These five lines are not INVALID code. Every variable name is
// fine, every value is correct. So what's actually missing?
//
// Nothing in this code tells the program that these five values
// belong to the SAME student. They just happen to be written
// near each other. If this file grew, got reordered, or these
// variables got copy-pasted elsewhere, that fragile relationship
// would break instantly — because it was never a real, structural
// relationship in the first place.
//
// Arrays (Day 13) solved "many related VALUES."
// Today's problem is different: how do we represent one
// meaningful THING, made of many connected facts?


// ============================================================
// PART 2 — THE SOLUTION: OBJECTS
// ============================================================
// An object groups related facts under one variable, where each
// fact has a NAME (a key), not just a position.
//
//                 STUDENT
//                    |
//        +-----------+-----------+
//        |           |           |
//      name         age         cgpa
//        |           |           |
//      "Aman"        21          8.4
//
// Compare this ONE object to the five separate variables above:

const student = {
  name: "Aman",
  age: 21,
  email: "aman@example.com",
  branch: "CSE",
  cgpa: 8.4
};

console.log(student);

// Anatomy of this:
//   const student      -> one variable name for the WHOLE entity
//   { }                 -> the object literal (the container)
//   name, age, email... -> the KEYS (properties)
//   "Aman", 21, ...     -> the VALUES
//
// The key gives MEANING to the value. Compare:
//   ["Aman", 21, 8.4]                          -> which number is age? which is cgpa? unclear.
//   { name: "Aman", age: 21, cgpa: 8.4 }       -> completely unambiguous.


// ============================================================
// PART 3 — ARRAY VS OBJECT: THE CORE DISTINCTION
// ============================================================
// Array   -> answers: "Which items do I have?"    (a collection)
// Object  -> answers: "What is this thing?"        (an entity)
//
// In an array, POSITION carries meaning (arr[0] is always "the
// first one"). In an object, MEANING comes from the property
// NAME, not from where it sits. Reordering the properties inside
// { } would not change what the student's data means at all.


// ============================================================
// PART 4 — ACCESSING PROPERTIES (DOT NOTATION)
// ============================================================
// Read a property using: objectName.propertyName

console.log(student.name);   // Aman
console.log(student.age);    // 21
console.log(student.branch); // CSE

// Mental model: student -> name -> "Aman"
// Start at the object, walk through the key, arrive at the value.


// ============================================================
// PART 5 — ACCESSING PROPERTIES (BRACKET NOTATION)
// ============================================================
// The same value can also be read using square brackets and a
// string key:

console.log(student["name"]); // Aman

// Dot notation   -> use when you know the property name directly,
//                   written straight into the code
// Bracket notation -> use when the property name is stored in a
//                   variable, or needs to be looked up dynamically
//
// Example of the dynamic case (just to see it once):
// const key = "branch";
// console.log(student[key]); // CSE -- notice student.key would NOT work here


// ============================================================
// PART 6 — MISSING PROPERTIES ARE NOT ERRORS
// ============================================================
// What happens if we ask for a property that was never defined?

// console.log(student.country); // undefined

// IMPORTANT: this does NOT throw an error. JavaScript simply
// returns undefined for any property that doesn't exist on the
// object. This is different from many other mistakes we'll see
// later today — a missing property fails SILENTLY, which is
// exactly why it's an easy bug to miss.


// ============================================================
// PART 7 — UPDATING PROPERTIES
// ============================================================
// Replace an existing property's value using assignment, the
// same way you'd reassign a normal variable.

student.cgpa = 8.6;
console.log(student.cgpa); // 8.6

// This does NOT create a new student. We reached into the
// existing object and changed one property. This is the same
// idea as Day 13's array update (arr[i] = value), just using a
// property name instead of a numeric index.


// ============================================================
// PART 8 — ADDING PROPERTIES
// ============================================================
// JavaScript objects are dynamic — you can add new properties
// after the object is already created.

student.isActive = true;
console.log(student);

// The object did NOT have isActive when it was first created.
// This line added it. Useful, but don't treat this as a license
// to pile on properties without a plan — every property should
// still have a real reason to exist on this object.


// ============================================================
// PART 9 — REMOVING PROPERTIES
// ============================================================
// The delete keyword removes a property entirely.

delete student.isActive;
console.log(student);

// delete is for genuine, deliberate removal -- not something to
// reach for casually. Good engineering means designing what
// properties an object should have from the start, not adding
// and deleting them on a whim.


// ============================================================
// PART 10 — METHODS: DATA + BEHAVIOUR
// ============================================================
// So far every property has held DATA. Objects can also hold
// BEHAVIOUR -- a property whose value is a function.

const learner = {
  name: "Aman",
  marks: 82,

  introduce() {
    console.log(`Hi, I am ${this.name}, and I scored ${this.marks}.`);
  }
};

learner.introduce(); // Hi, I am Aman, and I scored 82.

// Property -> describes DATA (name, marks)
// Method   -> describes BEHAVIOUR (introduce)
//
// Inside a method, "this" refers to the object that is calling
// the method. Here, this.name means "the name property of
// whichever object called introduce()" -- in this case, learner.


// ============================================================
// PART 11 — NESTED OBJECTS
// ============================================================
// Real entities often have structured sub-information that
// belongs together but is distinct from the top-level facts.

const learnerProfile = {
  name: "Neha",
  age: 20,

  contact: {
    email: "neha@example.com",
    city: "Patna"
  }
};

console.log(learnerProfile.contact.email); // neha@example.com
console.log(learnerProfile.contact.city);  // Patna

// Structure:
//   learnerProfile
//   |
//   +-- name
//   +-- age
//   +-- contact
//         +-- email
//         +-- city
//
// "contact" groups everything about HOW TO REACH the student,
// separate from what describes WHO the student is. This keeps
// related data together and unrelated data apart.


// ============================================================
// PART 12 — THE NESTED PATH BUG
// ============================================================
// A very common mistake: trying to access a nested value as if
// it were at the top level.

console.log(learnerProfile);
console.log(learnerProfile.city); // undefined -- WRONG PATH!

// "city" does not exist directly on learnerProfile. It exists
// one level deeper, inside contact. The correct path is:
console.log(learnerProfile.contact.city); // Patna

// Debugging process for this exact bug:
//   Problem      -> city prints as undefined
//   Cause        -> tried to access a property that is nested,
//                    as if it were top-level
//   Investigation -> log the whole object first and look at its
//                    actual shape
//   Fix          -> add the missing intermediate step: .contact.city
//   Prevention   -> before accessing any property, check the
//                    object's real structure, not assumed structure


// ============================================================
// PART 13 — OBJECTS INSIDE ARRAYS (THE BRIDGE)
// ============================================================
// This connects Day 13 (arrays) and Day 14 (objects) directly.
// This is the single most common data shape in real software.

console.log("\n===============================================================\n");  


const students = [
  { name: "Aman", cgpa: 8.2 },
  { name: "Riya", cgpa: 9.1 },
  { name: "Karan", cgpa: 7.8 }
];

console.log(students[0]);       // the WHOLE first object
console.log(students[0].name);  // Aman
console.log(students[1].cgpa);  // 9.1
console.log(students.length);   // 3 -- how many STUDENTS, not properties

// Breaking down students[0].name:
//   students[0]  -> ARRAY access by index -- gives the object at position 0
//   .name        -> OBJECT access by key  -- gives that object's name property
//
// Two different access mechanisms, chained together.


// ============================================================
// PART 14 — TRAVERSING AN ARRAY OF OBJECTS
// ============================================================
// The Day 13 for-loop pattern works exactly the same way here --
// the only difference is what's inside each slot.

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].name} has a CGPA of ${students[i].cgpa}`);
}

// Dry run for a 3-element array:
//
//  i | condition i < 3 | students[i].name | students[i].cgpa | action
//  0 |     true        |      Aman        |       8.2        | print
//  1 |     true        |      Riya        |       9.1        | print
//  2 |     true        |      Karan       |       7.8        | print
//  3 |     false        |       --         |        --         | loop stops


// ============================================================
// PART 15 — PROCESSING AN ARRAY OF OBJECTS
// ============================================================
// Combine traversal with computation, just like Day 13 -- but
// now reading from a property inside each object instead of a
// raw array value.

let totalCgpa = 0; // accumulator, declared OUTSIDE the loop
for (let i = 0; i < students.length; i++) {
  totalCgpa += students[i].cgpa;
}
console.log("Total CGPA:", totalCgpa);
console.log("Average CGPA:", totalCgpa / students.length);


// ============================================================
// PART 16 — MORE DEBUGGING PRACTICE
// ============================================================
// Each block below has ONE deliberate bug. Try to spot it before
// running the code.

// --- Bug A: case-sensitive property mismatch ---
// const learnerA = { name: "Aman" };
// console.log(learnerA.Name); // undefined! "name" and "Name" are DIFFERENT properties

// --- Bug B: array-like object confusion ---
// const oddStudents = { 0: "Aman", 1: "Riya" };
// console.log(oddStudents[2]);      // undefined
// console.log(oddStudents.length);  // ALSO undefined! this is an OBJECT, not an array --
//                                    // it has no automatic length tracking

// --- Bug C: calling data as if it were a function ---
// const learnerC = { name: "Aman" };
// learnerC.name(); // TypeError! "name" is a string, not a function -- this is data, not behaviour

// --- Bug D: typo creates a brand-new property instead of updating ---
// const productD = { name: "Pen", price: 10 };
// productD.pricee = 15; // typo! this ADDS a new property called "pricee"
// console.log(productD);       // now has BOTH price and pricee
// console.log(productD.price); // still 10 -- the typo never touched the real property

// For each: identify the Problem, the Cause, and the Fix before
// moving to the next.


// ============================================================
// PART 17 — MINI PROJECT: STUDENT DIGITAL PROFILE
// ============================================================
// Bringing everything together: properties, a nested object, and
// a method, all in one well-modelled entity.

const studentProfile = {
  name: "Ishaan",
  age: 20,
  email: "ishaan@example.com",
  branch: "CSE",
  semester: 5,
  cgpa: 8.7,
  isHosteller: true,

  contact: {
    city: "Gaya",
    phone: "98765XX210"
  },

  introduce() {
    console.log(
      `Hi, I am ${this.name}, a semester ${this.semester} ${this.branch} student with a CGPA of ${this.cgpa}.`
    );
  }
};

studentProfile.introduce();
console.log("City:", studentProfile.contact.city);
console.log("Phone:", studentProfile.contact.phone);

// Notice every property here has a clear purpose. Nothing was
// added just because objects "can" hold anything -- each fact
// genuinely belongs to describing this one student.


// ============================================================
// PART 18 — PREDICT BEFORE RUNNING (FINAL EXERCISE)
// ============================================================
// Before uncommenting this block, write down the FULL predicted
// output, line by line, on paper. Then uncomment and check.

const item = {
  name: "Bag",
  price: 800,
  details: {
    color: "Black",
    material: "Canvas"
  }
};

console.log(item.price);
console.log(item.color);
console.log(item.details.color);
console.log(item.discount);


// ============================================================
// END OF DAY 14
// ============================================================
// Today we learned to represent ONE meaningful entity using an
// object -- properties, methods, nested data, and objects living
// inside arrays.
//
// But real applications don't deal with just one student, one
// product, or one task -- they deal with MANY. Tomorrow: how do
// we process a whole array of these meaningful things, without
// writing the same loop over and over?
//
// That's Day 15.
// ============================================================