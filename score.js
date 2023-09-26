// Iteration 5: Store the player score and display it on the game over screen
let score = localStorage.getItem("score")

var board = document.getElementById("score-board");

var again = document.getElementById('play-again-button')

board.innerHTML = score;

again.onclick = () => {
    location.href = "./game.html"
}