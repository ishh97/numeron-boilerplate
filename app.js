// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
const playBtn = document.getElementById("play-button")
playBtn.onclick = () => {
    location.href = "./game.html";
}
