let startLocation;
let endLocation;
let direction;
let movement;

function newChallenge() {
    direction = Math.round(Math.random())
    let a = Math.floor(Math.random() * (50));
    let b = a + Math.floor(Math.random() * (100));
    if (direction == 0) {
        startLocation = a;
        endLocation = b;
        direction = "<";
        movement = "++"
    } else {
        startLocation = b;
        endLocation = a;
        direction = ">";
        movement = "--";
    }
    $("#textBack").text("");
    $("#codeArea").val("");
    $("#instructions").text(`Loop through all the numbers starting from ${startLocation} and ending at ${endLocation}`);

}

function getTextArea() {

    let codeIn = $("#codeArea").val().replaceAll(" ", "").split("\n");
    codeIn = codeIn.filter(item => item !== "");
    let returnText = "";
    if (typeof (codeIn[0]) == "undefined") {
        $("#textBack").text("Start typing your for loop!");
        return;
    }
    codeIn[0] = codeIn[0].split(";");
    if (codeIn[0][0] == `for(leti=${startLocation}`) {

        if (direction == "<" && (codeIn[0][1] == `i${direction}${endLocation + 1}` || codeIn[0][1] == `i${direction}=${endLocation}`) ||
            direction == ">" && (codeIn[0][1] == `i${direction}${endLocation - 1}` || codeIn[0][1] == `i${direction}=${endLocation}`)) {
            if (codeIn[0][2] == `i${movement}){`) {
                if (codeIn[codeIn.length - 1] == "}") {
                    returnText = ("Well Done");
                    if (speedMode && timeLeft > 0) {
                        score++;
                        $("#score").text(score);
                        newChallenge();
                        $("#codeArea").val("");

                    }
                } else {
                    returnText = ("You forgot to close the loop!");
                }

            } else {
                returnText = ("How are you incrementing?");
            }
        } else {
            returnText = ("Where are you looping until");
        }
    } else {
        returnText = ("The check the start of your loop.")
    }
    
    $("#textBack").text(returnText)

}