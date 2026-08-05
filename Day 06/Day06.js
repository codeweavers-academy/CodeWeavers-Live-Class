

// // Age = 20   = -> Assignment operator

// // Age >= 18   >= -> Greater than or equal to operator

// // conditions - -> Decision making

// // Age > 18    >  -> Greater than operator

// // Comparison Operators

// // Equal to (==) - only value is compared - loosely checked
// // let age = 20;
// // // age == 20
// // console.log("Age is equal to 20: " + (age == 20)); // true

// // age = "20";
// // console.log("Age is equal to 20: " + (age == "20")); // true

// // strictly  Equal (===) - value and data types are compared both -tightly checked

// // let marks = 20;
// // // marks == 20
// // console.log("Age is equal to 20: " + (marks === 20)); // true

// // age = "20";
// // console.log("Age is equal to 20: " + (marks === "20")); // false

// // Strict Not Equal (!==) - value and data types are compared both
// let score = 30;
// console.log("Score is not equal to 30: " + (score !== 30)); // false
// console.log("Score is not equal to 40: " + (score !== 40)); // true

// // Not Equal (!=) - only value is compared
// console.log("Score is not equal to 30: " + (score != "30")); // false
// console.log("Score is not equal to 40: " + (score != "40")); // true

// // Greater than (>) - only value is compared
// console.log("Score is greater than 20: " + (score > 20)); // true
// console.log("Score is greater than 40: " + (score > 40)); // false

// // Less than (<) - only value is compared
// console.log("Score is less than 20: " + (score < 20)); // false
// console.log("Score is less than 40: " + (score < 40)); // true

// // Greater than or equal to (>=) - only value is compared
// console.log("Score is greater than or equal to 20: " + (score >= 20)); // true
// console.log("Score is greater than or equal to 30: " + (score >= 30)); // true
// console.log("Score is greater than or equal to 40: " + (score >= 40)); // false


// // LOGICAL OPERATORS

// // AND (&&) - returns true if both conditions are true
// // let age = 25;  // assignment operator
// // let hasLicense = true;  // assignment operator
// // // (age === 25 && hasLicense) 
// // console.log("Age is 25 and has license: " + (age === 25 && hasLicense)); // true

// // hasLicense = false;  // assignment operator
// // console.log("Age is 25 and has license: " + (age === 25 && hasLicense)); // false

// // AND GATE
// // true && true = true
// // true && false = false
// // false && true = false
// // false && false = false

// // OR (||) - returns true if at least one condition is true
// let age = 25;  // assignment operator
// let hasLicense = true;  // assignment operator
// // (age === 25 || hasLicense) 
// console.log("Age is 25 or has license: " + (age === 25 || hasLicense)); // true

// hasLicense = false;  // assignment operator
// console.log("Age is 25 or has license: " + (age === 25 || hasLicense)); // true

// // OR GATE
// // true || true = true
// // true || false = true
// // false || true = true
// // false || false = false

// // NOT (!) - returns true if the condition is false and vice versa
// let isRaining = false;
// console.log("It is not raining: " + (!isRaining)); // true

// // NOT GATE
// // !true = false
// // !false = true

// // If else statement - decision making
let temperature = 26;

if (temperature > 25) {  // 26 > 25
    console.log("It's a wow day!");
    if(temperature > 30) {  // 26 > 30
        console.log("It's a very hot day!");
    }
    else { 
        console.log("It's a cold day!");
    }
} else {
    console.log("It's not that hot.");
}
