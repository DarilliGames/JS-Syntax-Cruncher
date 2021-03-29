let challenge = "jsLO2";
let a;
let b;
let c;
let d;
let operator1;
let operatorM;
let operator2;
let listOfOperators = ["<", "<=", ">", ">=", "==", "!="];
let listOfLogic = ["less than", "less than or equal to", "greater than", "greater than or equal to", "is equal to", "is not equal to"];
let middleOperators = ["||", "&&"];
let middleOperatorText = ["or", "and"];

function newChallenge() {
    //  Generate conditions which the student must meet
    let operatorIndex1 = Math.floor(Math.random() * listOfOperators.length);
    let operatorIndex2 = Math.floor(Math.random() * listOfOperators.length);
    let operatorIndex3 = Math.round(Math.random());
    
    operator1 = listOfOperators[operatorIndex1];
    operator2 = listOfOperators[operatorIndex2];
    operatorM = middleOperators[operatorIndex3];

    a = Math.floor(Math.random() * 100);
    b = Math.floor(Math.random() * 100);
    c = Math.floor(Math.random() * 100);
    d = Math.floor(Math.random() * 100);
    // Clear the feedback given to the student
    $("#textBack").text("");
    $("#codeArea").val("");
    $("#instructions").html(`Define the variable <strong>x</strong> and set it to <strong>${a} ${listOfLogic[operatorIndex1]} ${b} ${middleOperatorText[operatorIndex3]} ${c} ${listOfLogic[operatorIndex2]} ${d}</strong>`);
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
        [`${operator1}`, "are you using the correct operateor?"],
        [`${b}`, "Are you checking the correct second number?"],
        [`${operatorM}`, "Have you correctly used 'or' ( || ) or 'and' ( && )"],
        [`${c}`, "Have you used '==' instead of '=' to set a value or are you forgetting to start setting the value?"],
        [`${operator2}`, "are you using the correct operateor?"],
        [`${d}`, "Are you checking the correct second number?"],
        
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