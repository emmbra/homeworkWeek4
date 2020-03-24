// declare all variables
const questions = require("./questions")

var startButton = document.querySelector("#startButton");
var timeDiv = document.querySelector("#timeDiv");
var countDown = 100;

// references questions.js file





// declare all functions

function timerStart() {
    var timerInterval = setInterval(function() {
        countDown--; 
        if(countDown === 0) { // || no more questions to ask
          clearInterval(timerInterval); // clearInterval tells it when to stop
        } // come back here to add game ending conditions
    
      }, 1000); // 1000 is milliseconds by default
}

    // timer interval
    // if statement for game ending condition and then clear interval
function timerSet()
function quizStart() {
    timeDiv.style.display = "inline";
    timerStart();
}
function answerFeedback()


// Start Button - set onclick function

startButton.addEventListener("click", quizStart)

// Submit High Score Button - set onclick function

// Retrieve high scores from local storage

// Save high scores to local storage