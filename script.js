// declare all variables

// references questions.js file
// const questions = require("./questions")

var startButton = document.getElementById("startButton");
var submitButton = document.querySelector("button.submitButton");
var secsRemaining = 100;
var timer = document.getElementById("timer");
var submitHighScore = document.querySelector("#submitHighScore");
var finalScore = document.getElementById("finalScore");
var questionContainer = document.getElementById("questions");
var answerChoices = document.getElementById("answers");
var playerName;
var answer;

// set this to -1 because arrays start at index 0
var questionNumber = -1;


// declare all functions

function startTimer() {
  // toggle display-none for startPage and quiz containers
  document.getElementById("startPage").classList.add("d-none");
  document.getElementById("quiz").classList.remove("d-none");
  // timer set and begins 100 second countdown
  setTimer();
  // create questions to display
  quizQuestions();
}

function setTimer() {
  var countdown = setInterval(function() {
    secsRemaining--;
    timer.textContent = "Time: " + secsRemaining;

    if (secsRemaining === 0 || questionNumber === questions.length) {
      clearInterval(countdown);
      setTimeout(displayScore, 500);
    }
  }, 1000);
}

function quizQuestions() {
  questionNumber++;
  answer = questions[questionNumber].answer;

  questionContainer.textContent = questions[questionNumber].title;
  answerChoices.innerHTML = "";

  var choices = questions[questionNumber].choices;

  for (var i = 0; i < choices.length; i++) {
    var nextChoice = document.createElement("button");

    nextChoice.textContent = choices[i];
    answerBtn = answerChoices
      .appendChild(nextChoice)
      .setAttribute("class", "p-5 m-1 btn btn-secondary btn-block");
  }
}

// display option to enter name to high scores
function displayScore() {
  document.getElementById("quiz").classList.add("d-none");
  document.getElementById("submitHighScore").classList.remove("d-none");
  finalScore.textContent = "FINAL SCORE: " + secsRemaining + ".";
}

// Event Listeners for Main Buttons
startButton.addEventListener("click", startTimer);
submitButton.addEventListener("click", function(event) {
  event.stopPropagation();
  addScore();

  window.location.href = "./highscores.html";
});

function addScore() {
  playerName = document.getElementById("playerName").value;
  // create a new object with name and score keys
  var newScore = {
    name: playerName,
    score: secsRemaining
  };
  // check if there are scores in local storage first and take value
  //if not, make a blank array
  var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
  // push object into score array
  highScores.push(newScore);
  // turn objects into an array of strings + put it into local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function hideFeedback() {
  var pElement = document.getElementsByClassName("answerFeedback")[0];
  pElement.style.display = "none";
}

function showFeedback() {
  var pElement = document.getElementsByClassName("answerFeedback")[0];
  pElement.removeAttribute("style");
}

answerChoices.addEventListener("click", function(event) {
  var pElement = document.getElementsByClassName("answerFeedback")[0];
  if (answer === event.target.textContent) {
    pElement.innerHTML = "Correct!";
    setTimeout(hideFeedback, 1225);
    showFeedback();
  } else {
    pElement.innerHTML = "Incorrect!";
    setTimeout(hideFeedback, 1225);
    secsRemaining = secsRemaining - 20;
    showFeedback();
  }
  quizQuestions();
});
