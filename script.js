let startLocation;
let endLocation;
let speedMode = false;
let score = 0;
let timeLeft;
let timer;

function startTimer(){
    timeLeft = 60;
    clearInterval(timer);
    timer = setInterval(function () {
        timeLeft--;
        $("#timeLeft").text("Time Remaining: " + timeLeft);
        if (timeLeft == 0){
            enableSpeedMode();
            $("#score").text(score);
        }      
        
    }, 1000);
}

function enableSpeedMode(){
    speedMode = !speedMode;
    if(speedMode){
        $("#textBack").text("Challenge Mode: " + speedMode);
        $("#timeLeft").text("Time Remaining: " + 60);
        $("#newLoop").prop("disabled",true);
        startTimer();
        
    }else{
        clearInterval(timer);
        $("#timeLeft").text('Click "Speed Mode" to go for a highscore!');
        $("#newLoop").prop("disabled",false);
    }
    newLoop();
    
}

function newLoop(){
    startLocation = Math.floor(Math.random() * (50));
    endLocation = startLocation + Math.floor(Math.random() * (100));
    $("#textBack").text("");
    $("#codeArea").val("");
    $("#instructions").text(`Loop through all the numbers between ${startLocation} and ${endLocation}`);
    
}

function getTextArea(){
    
    let codeIn = $("#codeArea").val().replaceAll(" ", "").split("\n");
    codeIn = codeIn.filter(item => item !== "");
    let returnText = "";
    if(typeof(codeIn[0])=="undefined"){
        $("#textBack").text("Start typing your for loop!");
        return;
    }
    codeIn[0] = codeIn[0].split(";");
    if (codeIn[0][0] == `for(leti=${startLocation}`){
        if(codeIn[0][1]==`i<${endLocation+1}` || codeIn[0][1]==`i<=${endLocation}`){
            if(codeIn[0][2] == "i++){"){
                if(codeIn[codeIn.length-1]=="}"){
                    returnText = ("Well Done");
                    if(speedMode && timeLeft > 0){
                        score++;
                        newLoop();
                        $("#codeArea").val("");

                    }
                }else{
                    returnText = ("You forgot to close the loop!");
                }
                
            }else{
                returnText = ("How are you incrementing?");
            }
        }else{
            returnText = ("Where are you looping until");
        }
    }else{
        returnText = ("The check the start of your loop.")
    }
    console.log(returnText);
    $("#textBack").text(returnText) 

}

newLoop();