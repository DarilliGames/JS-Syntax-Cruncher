let challenge = "jsDefFunc2";

let operation;
let arg_x;
let arg_y;

let listOfOperators = [
    // ["turnOn", ["lightOn", "true"], ["let lightOn = false;"], "lightOn=true"],
    // ["turnOff", ["lightOn", "false"], ["let lightOn = true;"], "lightOn=false"],
    // ["setZero", ["x", "0"], ["let x = 999;"], "x=0"],
    // ["makeRed", ["color", "red"], ["let red = #ff0000;", "let blue = #0000ff;", "let color;"], "color=red"],
    ["double", ["num"], [" <b>num</b>", "multiply the value by 2 to double itself"], [], "num*2"],
    ["addition", ["a,b"], [" <b>a</b> and <b>b</b>", "add the values together"], [], "a+b"]

];


function newChallenge() {
    //  Generate conditions which the student must meet
    let logicGen = Math.floor(Math.random() * listOfOperators.length);
    operation = listOfOperators[logicGen];
    let infoText = "";
    if (operation[3].length > 0) {
        operation[3].forEach(item => infoText += item + "\n");
        infoText += "\n";
    }
    // Clear the feedback given to the student
    $("#textBack").text("");
    $("#codeArea").val(infoText);
    $("#instructions").html(`Define a function called <b>${operation[0]}</b>.  Which takes argument${operation[2][0]}.
    Within the function ${operation[2][1]}.\nYou should aim to return the result instantly rather than creating any new variables.`);
}

function checkString(should, current) {
    current = current.substring(0, should.length);

    return (current == should);

}

function getTextArea() {
    // Breaks down the text area and remove spaces and splits on new lines.
    let codeIn = $("#codeArea").val().replaceAll(" ", "").split("\n");
    console.log(operation[2].length);
    codeIn = codeIn.filter(item => item !== "");
    console.log(codeIn);
    codeIn = codeIn.splice(operation[3].length);
    console.log(codeIn);


    let conditionChecks = [
        [
            [`function`, "Did you define the function with the keyword 'function'"],
            [`${operation[0]}`, "The functions name must be then defined"],
            [`(`, "Did you remember the empty brackets for no parameters?"],
            [`${operation[1][0]}`, "You need to pass through the value for aaa?"],
            [`)`, "Did you remember the empty brackets for no parameters?"],
            [`{`, "Did you open the curly bracket"]

        ],
        [
            [`return`, `We need you to return the value straigh away. Try use the "return" keyword.`],
            [`${operation[4]}`, `We want to set the variable ${operation[1][0]} to a value.`]

        ],
        [
            [
                "}", "Did you remember to add a closing curly bracket? }"
            ]
        ]
    ];
    if (typeof (codeIn[0]) == "undefined") {
        $("#textBack").text("Start typing your variable!");
        return;
    } else {
        for (let i = 0; i < conditionChecks.length; i++) {
            let stringCheck = "";
            for (let j = 0; j < conditionChecks[i].length; j++) {
                stringCheck = stringCheck + conditionChecks[i][j][0];
                if (codeIn[i]) {
                    if (!checkString(stringCheck, codeIn[i])) {
                        console.log(stringCheck, codeIn[i])
                        $("#textBack").text(conditionChecks[i][j][1]);
                        return
                    }
                } else {
                    $("#textBack").text("You need to continue the code onto the next line");
                    return
                }
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