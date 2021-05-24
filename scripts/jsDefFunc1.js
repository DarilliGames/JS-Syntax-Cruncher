let challenge = "jsDefFunc1";

let operation;

let listOfOperators = [
    ["turnOn", ["lightOn", "true"],  ["let lightOn = false;"], "lightOn=true"],
    ["turnOff", ["lightOn", "false"], ["let lightOn = true;"], "lightOn=false"],
    ["setZero", ["x", "0"], ["let x = 999;"], "x=0"],
    ["makeRed", ["color", "red"], ["let red = #ff0000;", "let blue = #0000ff;", "let color;"], "color=red"],
    ["makeBlue", ["color", "blue"], ["let red = #ff0000;", "let blue = #0000ff;", "let color;"], "color=blue"]
    
];


function newChallenge() {
    //  Generate conditions which the student must meet
    let logicGen = Math.floor(Math.random() * listOfOperators.length);
    operation = listOfOperators[logicGen];    
    let infoText = "";
    operation[2].forEach(item => infoText += item + "\n");
    // Clear the feedback given to the student
    $("#textBack").text("");
    $("#codeArea").val(infoText+"\n");
    $("#instructions").text(`Define a function called ${operation[0]}.  Within the function it should
    set the variable ${operation[1][0]} equal to ${operation[1][1]}`);

}

function getTextArea() {
    // Breaks down the text area and remove spaces and splits on new lines.
    let codeIn = $("#codeArea").val().replaceAll(" ", "").split("\n");
    console.log(operation[2].length);
    codeIn = codeIn.filter(item => item !== "");
    console.log(codeIn);
    codeIn = codeIn.splice(0, 1);
    console.log(codeIn);

    let stringCheck = "";
    let conditionChecks = [
        [`function`, "Did you define the function with the keyword 'function'"],
        [``, "The functions name must be then defined"],
        [`=`, "The Variable needs to be defined as 'x'"],
        
        

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