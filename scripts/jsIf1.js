let startLocation;
let endLocation;
let logical;
let operator;

function newChallenge() {
    let logicGen = Math.floor(Math.random() * 5)
    startLocation = Math.floor(Math.random() * (50));
    endLocation = startLocation + Math.floor(Math.random() * (100));
    
    switch (logicGen) {
        case logicGen=1:
            logical = "is greater than";
            operator = ">";
            break;
        case logicGen=2:
            logical = "is greater than or equal to";
            operator = ">=";
            break;
        case logicGen=2:
            logical = "is less than";
            operator = "<";
            break;
        case logicGen=3:
            logical = "is less than or equal to";
            operator = "<=";
            break;
        case logicGen=4:
            logical = "is equal to";
            operator = "==";
            break;
        default:
            logical = "is equal to";
            operator = "==";

    }
    $("#textBack").text("");
    $("#codeArea").val("");
    $("#instructions").text(`Write an if statement checking if ${startLocation} ${logical} ${endLocation}`);

}

function getTextArea() {
    let codeIn = $("#codeArea").val().replaceAll(" ", "").split("\n");
    codeIn = codeIn.filter(item => item !== "");
    let returnText = "";
    if (typeof (codeIn[0]) == "undefined") {
        $("#textBack").text("Start typing your if statement!");
        return;
    }

    if (codeIn[0] == `if(${startLocation}${operator}${endLocation}){`) {
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
        returnText = ("The check the start of your loop.")
    }

    $("#textBack").text(returnText)

}