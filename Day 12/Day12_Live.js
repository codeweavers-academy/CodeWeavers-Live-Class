// =============================================================================
// CODEWEAVERS QUEST — Developer Challenge Engine
// Level: Day 1 – Day 11 concepts ONLY
// =============================================================================
//
// WHAT THIS FILE USES (and nothing beyond this):
// Variables (var/let/const), Data Types, Operators, if/else, switch,
// while/do-while/for loops, break/continue, Functions, Function
// Expressions, Arrow Functions, Parameters, Arguments, Return Values,
// Scope / Nested Scope.
//
// WHAT THIS FILE DELIBERATELY DOES NOT USE (not taught yet, so not used):
// Arrays, Objects, async/await, Promises, classes, callbacks, destructuring.
// This is why questions are NOT stored in an array — they are selected
// using a `switch` statement instead, since switch IS a Day-level concept
// and arrays are not.
//
// HOW TO RUN:
//   npm install readline-sync      (one-time setup — gives us a SYNCHRONOUS
//                                    way to read terminal input, no async
//                                    or Promises required)
//   node app.js
// =============================================================================


// -----------------------------------------------------------------------------
// SECTION 0: TERMINAL INPUT SETUP
// -----------------------------------------------------------------------------
// WHY readline-sync: it lets us read what the player types with a normal,
// synchronous function call — `readlineSync.question("...")` — that
// returns the answer directly, the same way `checkAnswer()` or
// `calculateScore()` return a value. No async, no await, no .then(),
// no Promises. That machinery has not been taught yet, so we don't use it.
// -----------------------------------------------------------------------------

const readlineSync = require("readline-sync");


// -----------------------------------------------------------------------------
// SECTION 1: WELCOME SCREEN
// -----------------------------------------------------------------------------
// WHY A SEPARATE FUNCTION: printing the banner is one clear responsibility
// on its own. It takes no input and returns nothing — it just displays.
// -----------------------------------------------------------------------------

function showWelcomeBanner() {
    console.log("=================================");
    console.log("       CODEWEAVERS QUEST");
    console.log("=================================");
    console.log("Welcome to the Developer Challenge!");
    console.log("");
}


// -----------------------------------------------------------------------------
// SECTION 2 & 3: PLAYER NAME (VARIABLE -> FUNCTION)
// -----------------------------------------------------------------------------
// WHY A FUNCTION INSTEAD OF A HARD-CODED VARIABLE:
// The first draft was `const playerName = "Keshav";` — a fixed value. A
// real quest should ASK the player. getPlayerName() reads the input and
// RETURNS it, so whoever calls this function decides what to do with the
// name (store it, print it, pass it along).
// -----------------------------------------------------------------------------

function getPlayerName() {
    var name = readlineSync.question("Enter your name: ");

    // WHY THIS CONDITION: if the player just presses Enter, `name` will be
    // an empty string (""). An empty string is falsy, so this check gives
    // us a safe default instead of printing "Welcome, !" later.
    if (name === "") {
        return "Player";
    } else {
        return name;
    }
}

// welcomePlayer(name) -> prints a greeting, returns nothing
// WHY ARROW FUNCTION HERE: this is Step 3 -> Step 4 from class — the exact
// same behaviour as a normal function, written with arrow syntax instead.
const welcomePlayer = (name) => {
    console.log("");
    console.log("Welcome, " + name + "! Let's test your JavaScript skills.");
    console.log("");
};

// getPlayerMessage(name) -> RETURNS a string, does NOT print
// WHY: this shows the difference between printing a value and returning
// one. welcomePlayer() prints immediately. getPlayerMessage() hands the
// string back to whoever called it, so it can be reused later (for
// example, inside the final report).
const getPlayerMessage = (name) => {
    return "Welcome, " + name + "!";
};


// -----------------------------------------------------------------------------
// SECTION 4: SHOW A QUESTION
// -----------------------------------------------------------------------------
// WHY A SEPARATE FUNCTION: displaying a question is a different job from
// checking whether the answer is correct. Keeping them separate matches
// the Function Responsibilities table from class — one function, one job.
// -----------------------------------------------------------------------------

function showQuestion(challengeNumber, totalChallenges, questionText) {
    console.log("Challenge " + challengeNumber + " / " + totalChallenges);
    console.log(questionText);
}


// -----------------------------------------------------------------------------
// SECTION 5: GET THE PLAYER'S ANSWER
// -----------------------------------------------------------------------------
// WHY SEPARATE FROM checkAnswer(): this function's only job is collecting
// input. checkAnswer()'s only job is comparing it. If we ever change HOW
// we collect the answer, checkAnswer() would not need to change at all.
// -----------------------------------------------------------------------------

function getAnswer() {
    var answer = readlineSync.question("> ");

    // WHY .toLowerCase(): so "CONST", "Const" and "const" all count as
    // correct. Comparing with === is case-sensitive, so without this the
    // player would be marked wrong just for capitalization.
    return answer.toLowerCase();
}


// -----------------------------------------------------------------------------
// SECTION 6: CHECK THE ANSWER (BOOLEAN RETURN)
// -----------------------------------------------------------------------------
// WHY THIS RETURNS A BOOLEAN AND PRINTS NOTHING: checkAnswer() should only
// answer one question — "is this correct?" — true or false. It does not
// decide what to print or how to update the score. That keeps it small,
// predictable, and reusable.
// -----------------------------------------------------------------------------

function checkAnswer(userAnswer, correctAnswer) {
    return userAnswer === correctAnswer;
}


// -----------------------------------------------------------------------------
// SECTION 7: RUN ONE CHALLENGE
// -----------------------------------------------------------------------------
// WHY THIS FUNCTION EXISTS: it coordinates showQuestion(), getAnswer(),
// and checkAnswer() for a single challenge, prints the result, and
// returns true/false back to whoever called it. main()'s loop only needs
// to call runChallenge() — it does not need to know how a challenge works
// internally.
// -----------------------------------------------------------------------------

function runChallenge(challengeNumber, totalChallenges, questionText, correctAnswer) {
    showQuestion(challengeNumber, totalChallenges, questionText);

    var userAnswer = getAnswer();
    var isCorrect = checkAnswer(userAnswer, correctAnswer);

    if (isCorrect) {
        console.log("✓ Correct!");
    } else {
        console.log("✗ Incorrect! (Correct answer: " + correctAnswer + ")");
    }

    console.log("");

    return isCorrect;
}


// -----------------------------------------------------------------------------
// SECTION 8: CALCULATE FINAL PERCENTAGE
// -----------------------------------------------------------------------------
// WHY PARAMETERS INSTEAD OF READING AN OUTER VARIABLE: this function is
// given exactly what it needs (score, totalQuestions) as arguments. Call
// it with the same two numbers and it always returns the same result —
// that predictability is the whole point of using parameters.
// -----------------------------------------------------------------------------

function calculateScore(score, totalQuestions) {
    return (score / (totalQuestions * 10)) * 100;
}


// -----------------------------------------------------------------------------
// SECTION 9: DETERMINE PERFORMANCE FROM PERCENTAGE
// -----------------------------------------------------------------------------
// WHY if / else if / else: this is a range check — exactly the kind of
// decision conditions are built for. Each branch returns immediately, so
// only one performance label is ever produced.
// -----------------------------------------------------------------------------

const determinePerformance = (percentage) => {
    if (percentage >= 80) {
        return "EXCELLENT";
    } else if (percentage >= 60) {
        return "STRONG";
    } else if (percentage >= 40) {
        return "KEEP PRACTICING";
    } else {
        return "NEEDS REVISION";
    }
};


// -----------------------------------------------------------------------------
// SECTION 10: GENERATE FINAL REPORT
// -----------------------------------------------------------------------------
// WHY EVERYTHING IS PASSED IN AS A PARAMETER INSTEAD OF READ FROM AN
// OUTER VARIABLE: generateReport() does not need to know WHERE these
// values came from — only what to do with them. That makes it reusable:
// you could call it again later with different values and it would still
// work correctly.
// -----------------------------------------------------------------------------

function generateReport(name, correctCount, totalQuestions, score, percentage, performance) {
    console.log("=================================");
    console.log("          FINAL RESULT");
    console.log("=================================");
    console.log("Player       : " + name);
    console.log("Challenges   : " + totalQuestions);
    console.log("Correct      : " + correctCount);
    console.log("Wrong        : " + (totalQuestions - correctCount));
    console.log("Score        : " + percentage + "%");
    console.log("Performance  : " + performance);
    console.log("=================================");
    console.log("");
}


// -----------------------------------------------------------------------------
// SECTION 11: RUN THE FULL QUEST (LOOP + SWITCH + SCOPE)
// -----------------------------------------------------------------------------
// WHY score AND correctCount ARE DECLARED *INSIDE* runQuest():
// They are only needed while the quest is running. Keeping them local
// (function scope) instead of global means nothing outside runQuest() can
// accidentally read or change them mid-game.
//
// WHY A `for` LOOP: we know exactly how many challenges there are
// (totalQuestions = 5), so a counting loop is the right tool.
//
// WHY A `switch` INSTEAD OF AN ARRAY OF QUESTIONS: Arrays have not been
// taught yet (Day 12 is the day BEFORE Arrays are introduced). To show 5
// different real questions without an array, we use a switch statement on
// the loop counter `i` to pick the question text and correct answer for
// each round. This uses only switch + loop + variables — all Day 1-11
// concepts.
// -----------------------------------------------------------------------------

function runQuest(playerName) {
    var score = 0;          // local to runQuest — cannot leak outside
    var correctCount = 0;   // local to runQuest — cannot leak outside

    var totalQuestions = 5;

    for (var i = 1; i <= totalQuestions; i++) {

        var questionText;
        var correctAnswer;

        switch (i) {
            case 1:
                questionText = "Which keyword declares a variable that CANNOT be reassigned?";
                correctAnswer = "const";
                break;
            case 2:
                questionText = "What is the output of: typeof \"5\"";
                correctAnswer = "string";
                break;
            case 3:
                questionText = "Which operator checks both value AND type equality?";
                correctAnswer = "===";
                break;
            case 4:
                questionText = "Which loop runs its body at least once before checking the condition?";
                correctAnswer = "do while";
                break;
            default:
                questionText = "What do we call a value passed INTO a function when it is called?";
                correctAnswer = "argument";
        }

        var isCorrect = runChallenge(i, totalQuestions, questionText, correctAnswer);

        if (isCorrect) {
            score += 10;
            correctCount += 1;
        }
    }

    var percentage = calculateScore(score, totalQuestions);
    var performance = determinePerformance(percentage);

    generateReport(playerName, correctCount, totalQuestions, score, percentage, performance);
}


// -----------------------------------------------------------------------------
// SECTION 12: MAIN — COORDINATOR FUNCTION
// -----------------------------------------------------------------------------
// WHY main() STAYS SHORT: main() does not know HOW to greet a player or
// HOW to run a single challenge — it only knows the ORDER things should
// happen in. Each responsibility lives in its own function; main() just
// calls them in sequence. This is Problem Decomposition in practice.
// -----------------------------------------------------------------------------

function main() {
    showWelcomeBanner();

    var playerName = getPlayerName();
    welcomePlayer(playerName);

    // getPlayerMessage() is called here to demonstrate RETURN vs PRINT —
    // welcomePlayer() already printed a greeting, but getPlayerMessage()
    // hands back the same text as a plain string we can reuse elsewhere.
    var storedMessage = getPlayerMessage(playerName);
    console.log("(Saved for later use: \"" + storedMessage + "\")");
    console.log("");

    runQuest(playerName);
}


// -----------------------------------------------------------------------------
// SECTION 13: START THE PROGRAM
// -----------------------------------------------------------------------------
// WHY THIS LINE IS AT THE BOTTOM: JavaScript reads and defines all the
// functions above first. Nothing actually runs until this call happens.
// -----------------------------------------------------------------------------

main();


// =============================================================================
// END — CodeWeavers Quest
// =============================================================================