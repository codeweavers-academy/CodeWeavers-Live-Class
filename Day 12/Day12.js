// =============================================================================
// CODEWEAVERS QUEST — Developer Challenge Engine
// Level: Day 1 – Day 11 concepts ONLY
// =============================================================================

// Problem: Developer Challenge Engine


// Project Requirements: 

/* 

1. Display a welcome screen
2. Accept user input for a name
3. Allow user to start the challenge
4. Present programming questions
5. Accept user answer
6. Validate the answer
7. update the score
8. continue through multiple challenges
9. calculate the score
10. Display a final performance report

*/

// Define Inputs

// Player name
// Player Answers

// Define Processing

// validate -> check answer -> update score -> count attempts -> calulate Result -> determine performance


// Define Output

// Questions -> Result -> score -> final report -> performance


// SYSTEM FLOW

/*

START

Player name

start quest

show questions

get answer

check answer

update score

more questions

yes -> questions -> end

no - > report -> end


*/


// Problem Decomposition

/*


welcomeBanner()
getPlayerName()
showQuestion()
getAnswer()
updateScore()
calculateResult()
generateReport()

*/


// ===============================================================================================================


const readLineSync = require("readline-sync");

function showWelcomeBanner() {

    console.log("========================================================")
    console.log("                  CODEWEAVERS QUEST")
    console.log("========================================================")
    console.log("Welcome to the Developer Challenge");
    console.log("");

}


function getPlayerName() {
    const name = readLineSync.question("Enter your Name: ");

    if(name === "") {
        return "DemoPlayer";
    } else {
        return name;
    }
}

// welcome player

const welcomePlayer = (name) => {
    console.log("");
    console.log("Welcome " + name + "!Let's test your javascript skills.");
    console.log("");
    
}

const getPlayerMessage = (name) => {
    return "Welcome " + name + "!"
}

function showQuestion(challengeNumber, totalChallenges, questionText) {
    console.log("Challenge " + challengeNumber + " / " + totalChallenges);  // 1 / 5
    console.log(questionText);
}


function getAnswer() {
    const answer = readLineSync.question("=> ");

    return answer.toLowerCase();
}

function checkAnswer(userAnswer, correctAnswer) {
    // return userAnswer === correctAnswer;

    if(userAnswer === correctAnswer) {
        return true
    } else {
        return false;
    }
}


function runChallenge(challengeNumber, totalChallenges, questionText, correctAnswer) {
    showQuestion(challengeNumber, totalChallenges, questionText);
    let userAnswer = getAnswer();

    let isCorrect = checkAnswer(userAnswer, correctAnswer);

    if (isCorrect) {
        console.log("Correct");
        
    } else {
        console.log("Incorrect Answer");
    }

}


function calculateScorePercentage(score, totalChallenges) {
    return (score/(totalChallenges*10)) * 100;
}


const determinePerformance = (percentage) => {
    if (percentage >= 80) 
        return "Excellent"
    else if (percentage >= 60)
        return "STRONG";
    else if (percentage >= 40)
        return "KEEP PRACTICING";

    else {
        return "NEEDS REVISION"
    }
}

function generateReport(name, correctCount, totalQuestions, score, percentage, performnace) {

    console.log("===========================================================")
    console.log("                 Final Score")
    console.log("===========================================================")


    console.log("Player: ", name);
    console.log("Challenges: ", totalQuestions);
    console.log("Correct: ", correctCount);
    console.log("wrong: ", (totalQuestions-correctCount));
    console.log("Score: ", percentage + "%");
    console.log("Performance: ", performnace);
    console.log("===========================================================");
    
}

// function runQuest() {

//    need to write code - swicth to provide the questions

// }


function runQuest(playerName) {

    let score = 0;          // local to runQuest — cannot leak outside
    let correctCount = 0;   // local to runQuest — cannot leak outside

    let totalQuestions = 5;

    for (let i = 1; i <= totalQuestions; i++) {

        let questionText;
        let correctAnswer;

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

        let isCorrect = runChallenge(i, totalQuestions, questionText, correctAnswer);

        if (isCorrect) {
            score += 10;
            correctCount += 1;
        }
    }

    let percentage = calculateScorePercentage(score, totalQuestions);
    let performance = determinePerformance(percentage);

    generateReport(playerName, correctCount, totalQuestions, score, percentage, performance);
}

function main() {

    showWelcomeBanner();

    let playerName = getPlayerName();

    welcomePlayer(playerName);

    const storeMessage = getPlayerMessage(playerName);

    console.log("Saved for later use: " + storeMessage);
    console.log("");


    runQuest(playerName);
    
    
}

main();





