let startLocation;
let endLocation;
let startLocationRight;
let endLocationRight;
let logicalLeft;
let logicalRight;
let operator1;
let operator2;
let middleOperator;
let middleLogic;
let challenge = "jsIf2";

function getOperator(x) {
    let tempLogic;
    let tempOperator;
    switch (x) {
        case x = 1:
            tempLogic = "is greater than";
            tempOperator = ">";
            break;
        case x = 2:
            tempLogic = "is greater than or equal to";
            tempOperator = ">=";
            break;
        case x = 2:
            tempLogic = "is less than";
            tempOperator = "<";
            break;
        case x = 3:
            tempLogic = "is less than or equal to";
            tempOperator = "<=";
            break;
        case x = 4:
            tempLogic = "is equal to";
            tempOperator = "==";
            break;
        default:
            tempLogic = "is equal to";
            tempOperator = "==";

    }
    return [tempLogic, tempOperator];

}


function newChallenge() {
    startLocation = Math.floor(Math.random() * (50));
    endLocation = startLocation + Math.floor(Math.random() * (100));
    startLocationRight = Math.floor(Math.random() * (50));
    endLocationRight = startLocation + Math.floor(Math.random() * (100));
    let firstOperator = getOperator(Math.floor(Math.random() * 5));
    let secondOperator = getOperator(Math.floor(Math.random() * 5));
    if (Math.round(Math.random())){
        middleOperator = "&&"
        middleLogic = " and "
    }else{
        middleOperator = "||"
        middleLogic = "or"
    }
    
    logicalLeft = firstOperator[0];
    operator1 = firstOperator[1];
    logicalRight = secondOperator[0];
    operator2 = secondOperator[1];
    $("#textBack").text("");
    $("#codeArea").val("");
    $("#instructions").text(`Write an if statement checking if ${startLocation} ${logicalLeft} ${endLocation} ${middleLogic} ${startLocationRight} ${logicalRight} ${endLocationRight}`);

}
function checkString(should, current) {
    current = current.substring(0, should.length);

    return (current == should);

}




function getTextArea() {
    let codeIn = $("#codeArea").val().replaceAll(" ", "").split("\n");
    let stringCheck = "";
    let conditionChecks = [
        [`if`, "Did you start the if statment?"],
        ["(", "Did you remember to enclose what you are checking in brackets? '(  )'"],
        [`${startLocation}`, "Have a look at first number you are starting to check?"],
        [`${operator1}`, "How are you comparing the first two numbers?"],
        [`${endLocation}`, "What number are you comparing the first two?"],
        [`${middleOperator}`, "Are you correctly using the either 'and' ( && ) or 'or' ( || ) to compare two options?"],
        [`${startLocationRight}`, "Have a look at first number on the right side of the or"],
        [`${operator2}`, "How are you comparing the last two numbers?"],
        [`${endLocationRight}`, "What is the second number you are comparing on the right side of the 'and' or the 'or' ( '&&' or '||' )?"],
        [`)`, "Have you remembered to close the opening bracket?"],
        [`{`, "Have you remembered to open the if statement block with a curly bracker ( '{' )?"]


    ];
    codeIn = codeIn.filter(item => item !== "");
    let returnText = "";
    if (typeof (codeIn[0]) == "undefined") {
        $("#textBack").text("Start typing your if statement!");
        return;
    }
    // checkString(`if(${startLocation}`, codeIn[0]);
    if (codeIn[0] == `if(${startLocation}${operator1}${endLocation}${middleOperator}${startLocationRight}${operator2}${endLocationRight}){`) {
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

        for (let i = 0; i < conditionChecks.length; i++) {
            stringCheck = stringCheck + conditionChecks[i][0];
            console.log(stringCheck);
            console.log(!checkString(stringCheck, codeIn[0]))
            if (!checkString(stringCheck, codeIn[0])) {

                $("#textBack").text(conditionChecks[i][1]);
                return
            }

        }
        returnText = ("Check the start of your loop.")
    }

    $("#textBack").text(returnText)

}


