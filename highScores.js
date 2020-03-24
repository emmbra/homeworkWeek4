var restartButton = document.querySelector("button.restartButton");
var clearScoresButotn = document.querySelector("button.clearButton"),

var highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
var highScoreList = document.getElementById("highScoreList");

// sort high scores numerically from largest to smallest
highScores.sort(function (a, b) {
    return b.score - a.score
})

// display the scores
for (var j = 0; j < highScores.length; j++) {
    var newLi = document.createElement("li")
    newLi.textContent = highScores[s].name + " - " + highScores[j].score
    scoreList.appendChild(newLi)
}


// click handlers for restart and clearing scoreboard
clearButton.addEventListener("click", function () {
    localStorage.clear();
    history.back()
});
restartButton.addEventListener("click", function () {
    history.back();
});