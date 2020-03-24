// declare all variables

// references questions.js file
const questions = require("./questions")

var startButton = document.getElementById("startButton");
var submitButton = document.querySelector("button.submitButton")
var secsRemaining = 100;
var timer = document.getElementById("timer");
var submitScoreElement = document.querySelector("#submitHighScore");
var finalScore = document.getElementById("finalScore");
var playerName;
var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");

var questionNumber = -1;
var answer;


// declare all functions

function quizStart() {
    questionNumber++;
    answer = questions[questionNumber].answer

    questionHead.textContent = questions[questionNumber].title;
    answerChoices.innerHTML = "";

    var choices = questions[questionNumber].choices;

    for (var q = 0; q < choices.length; q++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[q]
        answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
    }
}

function timerSet() {

    var countdown = setInterval(function () {
        secsRemaining--;
        timer.textContent = "Time: " + secsRemaining;

        if (secsRemaining === 0 || questionNumber === questions.length) {
            clearInterval(countdown);
            setTimeout(displayScore, 500);
        }
    }, 1000);
}

function timerStart() {
 
    // class of d-none toggles display of startPage and quiz
    document.getElementById("startPage").classList.add('d-none');
    document.getElementById("quiz").classList.remove('d-none');

    // timer begins 100 second countdown
    timerSet();

    // starts the quiz
    quizStart();
}

// Start Button - set onclick function

startButton.addEventListener("click", startTimer);

// Submit High Score Button - set onclick function

submitButton.addEventListener("click", function (event) {
    event.stopPropagation();
    addScore();
    
    window.location.href = './highscores.html'
});

function addScore () {
    playerName = document.getElementById("playerName").value;




    
// Retrieve high scores from local storage

// Save high scores to local storage