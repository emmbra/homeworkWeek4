// establish variables

var restartQuizButton = document.querySelector(".restartQuizButton");
var clearScoresButton = document.querySelector(".clearScoresButton");
var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
var highScoreList = document.getElementById("highScoreList");

// sort the high scores from high to low
highScores.sort(function(a, b) {
    return b.score - a.score;
})

// try to retrieve high scores from local storage or a blank array if no high scores stored
// display the high scores in ordered list format
for (var i = 0; i < highScores.length; i++) {
    var newScore = document.createElement("li");
    newScore.textContent = highScores[i].name + ": " + highScores[i].score + " points";
    highScoreList.appendChild(newScore);
}

// click event listener for restart quiz button
restartQuizButton.addEventListener("click", function () {
    history.back();
});

// click event listener for clearing scores button
clearScoresButton.addEventListener("click", function () {
    localStorage.clear();
    alert("All scores have been cleared!");
    history.back();
});
