// Define Required variables
let startLocation;
let endLocation;
let logical;
let operator;
let listOfOperators = ["<","<=", ">", ">=", "=="];

// Always Needed
let spanLetters = "abcdefghijklmnop"
let correct;
let options;
let challenge = "jsLO0";


function newChallenge() {
    // Generate requirements here
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
    // Picks which Box will be correct
    correct = Math.floor((Math.random() * 4) + 1);
    $("#textBack").text("");
    $("#instructions").text(`Which of these will define the variable x to ${startLocation} ${logical} ${endLocation}?`);
    generateQuestion();
}

function selectAnswer(selected) {
    if (correct == selected) {
        $("#textBack").text("You did it!");
        if (speedMode && timeLeft > 0) {
            score++;
            $("#score").text(score);
            newChallenge();
        }
    }
    else {

        for (let i = 0; i < options[selected].length; i++) {
            $(`#option${selected} .${options[selected][i]}`).addClass("incorrect");
        }
        let whatsWrong = options[selected]
        switch (whatsWrong) {
            case whatsWrong = "a":
                $("#textBack").text("There is no 'let' to initialize the new variable");
                break;
            case whatsWrong = "b":
                $("#textBack").text("What is the variable you are trying to set?");
                break;
            case whatsWrong = "c":
                $("#textBack").text("'==' is how you check if a value is the same.  '=' is used to set a new variable");
                break;
            case whatsWrong = "d":
                $("#textBack").text(`We need to target the array named`);
                break;
            case whatsWrong = "e":
                $("#textBack").text("The index is incorrect.  Remember - that array indexing starts at [0] for the first element");
                break;
            case whatsWrong = "f":
                $("#textBack").text("Careful!  It is missing the semi colon");
                break;

        }

        if (speedMode && timeLeft > 0) {
            score = score - 3;
            $("#score").text(score);
        }

    }

}

function incorrectGenerator() {
    // Which issue will be randomised
    let boption = Math.floor((Math.random() * 8));
    let back = "";

    let pos0 = "let";
    let pos1 = " x ";
    let pos2 = " = ";
    let pos3 = startLocation;
    let pos4 = ` ${operator} `;
    let pos5 = endLocation;
    let pos6 = ";";
    
    let listOfOperatorsInternal =  listOfOperators.filter(item => item !== operator);

    // 
    switch (boption) {
        case boption = 0:
            pos0 = "";
            back = "a"
            break;
        case boption = 1:
            pos0 = "let "
            pos1 = "";
            back = "b";
            break;
        case boption = 2:
            pos2 = "==";
            back = "c"
            break;
        case boption = 3:
            pos3 = "x";
            back = "d"
            break;
        case boption = 4:
            pos4 = ` ${listOfOperatorsInternal[Math.floor((Math.random() * listOfOperatorsInternal.length))]} `;
            back = "e";
            break;
        case boption = 5:
            pos4 = ` ${listOfOperatorsInternal[Math.floor((Math.random() * listOfOperatorsInternal.length))]} `;
            back = "e"
            break;
        case boption = 6:
            pos4 = ` ${listOfOperatorsInternal[Math.floor((Math.random() * listOfOperatorsInternal.length))]} `;
            back = "e"
            break;
        case boption = 7:
            pos6 = " ";
            back = "f"
            break;


    }
    let listOfReasons = [pos0, pos1, pos2, pos3, pos4, pos5, pos6];

    let badAnswer = "";
    for (let i=0; i<listOfReasons.length; i++){
        badAnswer += `<span class=${spanLetters[i]}>${listOfReasons[i]}</span>`
    }   
    
    return [badAnswer, back];
}

function generateQuestion() {

    options = {};

    let format;

    for (let i = 1; i < 5; i++) {

        if (i == correct) {
            format = `let x = ${startLocation} ${operator} ${endLocation};`;
        } else {
            let incorrect = incorrectGenerator();
            format = incorrect[0];
            options[i] = incorrect[1];
        }
        $("#option" + i).html(format);

    }

}