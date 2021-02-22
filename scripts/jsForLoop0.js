// Applying new RoadMap for future development
// Code in this page can be ignored until further notice

let startLocation;
let endLocation;

function newChallenge(){
    startLocation = Math.floor(Math.random() * (50));
    endLocation = startLocation + Math.floor(Math.random() * (100));
    $("#textBack").text("");
    $("#codeArea").val("");
    $("#instructions").text(`Loop through all the numbers between ${startLocation} and ${endLocation}`);
    
}

function checkStartLoop(codeIn){
    if(codeIn[0][0] == `for(leti=${startLocation}`){
        console.log("a")
        return true;
    }
}
function checkMiddleLoop(codeIn){
    if(codeIn[0][1]==`i<${endLocation+1}` || codeIn[0][1]==`i<=${endLocation}`){
        return true;
    }
}
function checkEndLoop(codeIn){
    if(codeIn[0][2] == "i++){"){
        return true;
    }
}
function checkLoopClosed(){
    if(codeIn[codeIn.length-1]=="}"){
        return true;
    }
}

function getTextArea(){
    let codeIn = $("#codeArea").val().replaceAll(" ", "").split("\n");
    codeIn = codeIn.filter(item => item !== "");
    let returnText = "Hello";
    if(typeof(codeIn[0])=="undefined"){
        $("#textBack").text("Start typing your for loop!");
        return;
    }
    codeIn[0] = codeIn[0].split(";");

    // Check the start of the loop
    if(!checkStartLoop(codeIn)){
        $("#textBack").text("Check the start of your loop.");
        return;
    }
    // checks where loop ends
    if(!checkMiddleLoop(codeIn)){
        $("#textBack").text("When are you stopping the loop?");
        return;
    }
    // checks increment/decrement
    if(!checkEndLoop(codeIn)){
        $("#textBack").text("How are you counting through the indexes?");
        return;
    }
    // was the loop closed?
    if(!checkLoopClosed(codeIn)){
        $("#textBack").text("Have you close the loop with a '}' on a new line?");
        return;
    }
    // If correct
    $("#textBack").text("Well Done");

    // Increase score and increment should it pass the tests.
    if(speedMode && timeLeft > 0){
        score++;
        $("#score").text(score);
        newChallenge();
        $("#codeArea").val("");

    }

}