// Define Required variables
let startLocation;
let endLocation;
let logical;
let operator;
let listOfOperators = [["+", "sum (+)"],["-", "difference (-)"], ["*", "product (*)"], ["/", "quotient (/)"], ["%", "modulus (%)"]];



// Always Needed
let spanLetters = "abcdefghijklmnop"
let correct;
let options;
let challenge = "jsDefFunc0";


function newChallenge() {
    // Generate requirements here
    let logicGen = Math.floor(Math.random() * listOfOperators.length);
    startLocation = Math.floor(Math.random() * (50));
    endLocation = startLocation + Math.floor(Math.random() * (100));
    operator = listOfOperators[logicGen][0];
    logical = listOfOperators[logicGen][1];
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
                $("#textBack").text("To define the function, it needs the function keyword");
                break;
            case whatsWrong = "beg":
                $("#textBack").text("Arguments are not uses in this manner.");
                break;
            case whatsWrong = "f":
                $("#textBack").text("This is the wrong Mathimatical operator!");
                break;
            case whatsWrong = "i":
                $("#textBack").text("Careful!  It is missing the closing curly bracket");
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
    let pos0 = "function ";
    let pos1 = " doMath(){ ";
    let pos2 = "<br><tab></tab>";
    let pos3 = "return ";
    let pos4 = `${startLocation}`;
    let pos5 = ` ${operator} `;
    let pos6 = endLocation;
    let pos7 = ";<br>";
    let pos8 = "}";
    
    let listOfOperatorsInternal =  listOfOperators.filter(item => item[0] !== operator);

    // 
    switch (boption) {
        case boption = 0:
            pos0 = "";
            back = "a"
            break;
        case boption = 1:
            pos1 = `doMath(${startLocation}, ${endLocation}){ `
            pos4 = "x"
            pos6 = "y"
            back = "beg";
            break;
        case boption = 2:
            pos0 = "let "
            back = "a";
            break;
        case boption = 3:
            pos0 = "let "
            back = "a";
            break;
        case boption = 4:
            pos5 = ` ${listOfOperatorsInternal[Math.floor((Math.random() * listOfOperatorsInternal.length))][0]} `;
            back = "f"
            break;
        case boption = 5:
            pos5 = ` ${listOfOperatorsInternal[Math.floor((Math.random() * listOfOperatorsInternal.length))][0]} `;
            back = "f"
            break;
        case boption = 6:
            pos5 = ` ${listOfOperatorsInternal[Math.floor((Math.random() * listOfOperatorsInternal.length))][0]} `;
            back = "f"
            break;
        case boption = 7:
            pos8 = " ";
            back = "i"
            break;


    }
    let listOfReasons = [pos0, pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8];

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
            format = `function doMath(){ <br><tab></tab>return ${startLocation} ${operator} ${endLocation};<br>}`;
        } else {
            let incorrect = incorrectGenerator();
            format = incorrect[0];
            options[i] = incorrect[1];
        }
        $("#option" + i).html(format);

    }

}