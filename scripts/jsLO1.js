let challenge = "jsLO1";
let a;
let b;
let operator;
let listOfOperators = ["<", "<=", ">", ">=", "==", "!="];
let listOfLogic = ["less than", "less than or equal to", "greater than", "greater than or equal to", "is equal to", "is not equal to"];

function newChallenge() {
    //  Generate conditions which the student must meet
    let operatorIndex = Math.floor(Math.random() * listOfOperators.length);
    operator = listOfOperators[operatorIndex];
    a = Math.floor(Math.random() * listOfOperators.length);
    b = Math.floor(Math.random() * listOfOperators.length);
    // Clear the feedback given to the student
    $("#textBack").text("");
    $("#codeArea").val("");
    $("#instructions").html(`Define the variable <strong>x</strong> and set it to <strong>${a} ${listOfLogic[operatorIndex]} ${b}</strong>`);
}
function checkString(should, current) {
    current = current.substring(0, should.length);

    return (current == should);

}


function getTextArea() {
    // Breaks down the text area and remove spaces and splits on new lines.
    let codeIn = $("#codeArea").val().replaceAll(" ", "").split("\n");
    codeIn = codeIn.filter(item => item !== "");
    let stringCheck = "";
    let conditionChecks = [
        [`let`, "remember to use let to define a variable"],
        [`x`, "The Variable needs to be defined as 'x'"],
        [`=`, "The Variable needs to be defined as 'x'"],
        [`${a}`, "Have you used '==' instead of '=' to set a value or are you forgetting to start setting the value?"],
        [`${operator}`, "are you using the correct operateor?"],
        [`${b}`, "Are you checking the correct second number?"],
        [`;`, "Remember to finish setting the line of code with a semi-colon ( ; )"],

    ];
    if (typeof (codeIn[0]) == "undefined") {
        $("#textBack").text("Start typing your variable!");
        return;
    } else {

        for (let i = 0; i < conditionChecks.length; i++) {
            stringCheck = stringCheck + conditionChecks[i][0];
            if (!checkString(stringCheck, codeIn[0])) {

                $("#textBack").text(conditionChecks[i][1]);
                return
            }

        }

    }
    
    if (speedMode && timeLeft > 0) {
        score++;
        $("#score").text(score);
        newChallenge();
        $("#codeArea").val("");

    }
    $("#textBack").text("You did it!");


    // Must always be feedback provided to the student in the event a challenge fails

}