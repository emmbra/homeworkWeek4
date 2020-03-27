////////////////////////
// declare all variables
////////////////////////

// references questions.js file
// const questions = require("./questions")

var startButton = document.getElementById("startButton");
var submitButton = document.querySelector(".submitButton");
var timer = document.getElementById("timer");
var submitHighScore = document.querySelector("#submitHighScore");
var finalScore = document.getElementById("finalScore");
var questionContainer = document.getElementById("questions");
var answerChoices = document.getElementById("answers");
var secsRemaining = 100;
var playerName;
var answer;

// set this to -1 because array starts at index 0
var questionNumber = -1;

////////////////////////
// declare all functions
///////////////////////

// toggles display of home/quiz containers, starts countdown, and displays quiz
function startTimer() {
  document.getElementById("startPage").classList.add("d-none");
  document.getElementById("quiz").classList.remove("d-none");
  setTimer();
  quizQuestions();
}

// timer countdown starting at 100 secs
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

// displays quiz questions
function quizQuestions() {
  questionNumber++;
  if(questions[questionNumber]) {
    answer = questions[questionNumber].answer;
    questionContainer.textContent = questions[questionNumber].title;
    answerChoices.innerHTML = "";
    var choices = questions[questionNumber].choices;
    for (var i = 0; i < choices.length; i++) {
      var nextChoice = document.createElement("button");
      nextChoice.textContent = choices[i];
      answerButton = answerChoices
        .appendChild(nextChoice)
        .setAttribute("class", "p-5 m-1 btn btn-secondary btn-block");
    }
  } else {
    return;
  }
}

// toggle display of final score screen and show final score
function displayScore() {
  document.getElementById("quiz").classList.add("d-none");
  document.getElementById("submitHighScore").classList.remove("d-none");
  finalScore.textContent = "FINAL SCORE: " + secsRemaining + " points.";
}

// save scores to local storage
function addScore() {
  playerName = document.getElementById("playerName").value;
  var newScore = {
    name: playerName,
    score: secsRemaining
  };
  var highScores = JSON.parse(localStorage.getItem("highScores") || "[]"); // short-circuiting refers to the or statement here
  highScores.push(newScore);
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

// hide answer feedback
function hideFeedback() {
  var feedback = document.getElementsByClassName("answerFeedback")[0];
  feedback.style.display = "none";
}

// display answer feedback
function showFeedback() {
  var feedback = document.getElementsByClassName("answerFeedback")[0];
  feedback.removeAttribute("style");
}

//////////////////////////////
// declare all event listeners
//////////////////////////////

// start quiz button on click event listener
startButton.addEventListener("click", startTimer);

// submit score button on click event listener
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  addScore();
  window.location.href = "./highScores.html";
});

// scoring for answer choices on click event listener
answerChoices.addEventListener("click", function(event) {
  var feedback = document.getElementsByClassName("answerFeedback")[0];
  if (answer === event.target.textContent) {
    feedback.textContent = "Correct! +20 seconds.";
    secsRemaining = secsRemaining + 20;
    showFeedback();
  } else {
    feedback.textContent = "Incorrect! -20 seconds.";
    secsRemaining = secsRemaining - 20;
    showFeedback();
  }
  quizQuestions();
});
