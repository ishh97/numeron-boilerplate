// Iteration 2: Generate 2 random number and display it on the screen

const numOne = document.getElementById("number1");
const numTwo = document.getElementById("number2");
var numberOne = Math.round(Math.random() * 100);
numOne.innerHTML = numberOne
var numberTwo = Math.round(Math.random() * 100);
numTwo.innerHTML = numberTwo

// Iteration 3: Make the options button functional
const greater = document.getElementById("greater-than");
const equal = document.getElementById("equal-to");
const lesser = document.getElementById("lesser-than");

var score =0;

greater.onclick = () => {
    if (numberOne > numberTwo) {
        score++;
        resetT(timerId)
    }
    else {
        location.href = "/gameover.html";
    }
    numberOne=Math.round(Math.random() * 100);
    numOne.innerHTML = numberOne;
    console.log(score)
    numberTwo = Math.round(Math.random() * 100);
    numTwo.innerHTML = numberTwo

}

lesser.onclick = () => {
    if (numberOne < numberTwo) {
        score++;
        resetT(timerId)
    }
    else {
        location.href = "/gameover.html";
    }
    numberOne=Math.round(Math.random() * 100);
    numOne.innerHTML = numberOne;
    console.log(score)
    numberTwo = Math.round(Math.random() * 100);
    numTwo.innerHTML = numberTwo
}

equal.onclick = () => {
    if (numberOne == numberTwo) {
        score++;
        resetT(timerId)
    }
    else {
        location.href = "/gameover.html";
    }
    numberOne=Math.round(Math.random() * 100);
    numOne.innerHTML = numberOne;
    console.log(score)
    numberTwo = Math.round(Math.random() * 100);
    numTwo.innerHTML = numberTwo;
}

// Iteration 4: Build a timer for the game
var time =5;
var timer = document.getElementById('timer');
var timerId;

function start() {
    time = 5;
    timer.innerHTML= time;
    timerId = setInterval(() => {
        time--;
        if (time==0) {
            location.href = "/gameover.html";
        }
        timer.innerHTML = time;
    },1000);
    localStorage.setItem("score",score);
}
function resetT(intervalId) {
    clearInterval(intervalId);
    start();
}
start()