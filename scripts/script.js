let speedMode = false;
let score = 0;
let timeLeft;
let timer;
let highScore = localStorage.getItem(challenge);

// If there is a highscrore - use it.
if(highScore == []){
    highScore = 0;
}
$("#highScore").text(highScore);

// function to clear up anything required
function disolve(){
    if (highScore < score) {
        highScore = score;
        localStorage.setItem(challenge, score);
        $("#highScore").text(highScore);
    }
}

function startTimer() {
    timeLeft = 60;
    clearInterval(timer);
    score = 0;
    $("#score").text(score);
    timer = setInterval(function () {
        timeLeft--;
        $("#timeLeft").text("Time Remaining: " + timeLeft);
        if (timeLeft == 0) {
            enableSpeedMode();
            disolve();
            $("#score").text(score);
        }

    }, 1000);
}

function enableSpeedMode() {
    speedMode = !speedMode;
    if (speedMode) {
        $("#textBack").text("Challenge Mode: " + speedMode);
        $("#timeLeft").text("Time Remaining: " + 60);
        $("#newChallenge").prop("disabled", true);
        startTimer();

    } else {
        clearInterval(timer);
        $("#timeLeft").text('Click "Speed Mode" to go for a highscore!');
        $("#newChallenge").prop("disabled", false);
    }
    newChallenge();

}



newChallenge();