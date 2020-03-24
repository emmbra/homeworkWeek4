var restartQuizButton = document.querySelector("button.restartQuizButton");
var clearScoresButton = document.querySelector("button.clearScoresButton");
var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
var highScoreList = document.getElementById("highScoreList");

// sort the high scores from high to low
highScores.sort(function (a, b) {
    return b.score - a.score
})

// display the high scores in ordered list format
for (var i = 0; i < highScores.length; i++) {
    var newLi = document.createElement("li");
    newLi.textContent = highScores[i].name + ": " + highScores[i].score + " points";
    highScoreList.appendChild(newLi);
}

// click even listeners for restart quiz 
restartQuizButton.addEventListener("click", function () {
    history.back();
});

// click event listener for clearing scores
clearScoresButton.addEventListener("click", function () {
    localStorage.clear();
    alert("All scores have been cleared!");
    history.back();
});
