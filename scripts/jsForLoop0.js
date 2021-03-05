let startLocation;
let endLocation;
let correct;
let options;

function newChallenge() {
    startLocation = Math.floor(Math.random() * (2));
    endLocation = startLocation + Math.floor(Math.random() * (100));
    correct = Math.floor((Math.random() * 4) + 1);
    $("#textBack").text("");
    $("#instructions").text(`Which For Loop will loop from ${startLocation} to ${endLocation}?`);
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
                $("#textBack").text("The initial starting point was not definded correctly");
                break;
            case whatsWrong = "b":
                $("#textBack").text("The number the loop begins with is incorrect");
                break;
            case whatsWrong = "c":
                $("#textBack").text("Error selecting where to top");
                break;
            case whatsWrong = "d":
                $("#textBack").text("The last number the loop stops on is incorrect");
                break;
            case whatsWrong = "e":
                $("#textBack").text("How the loop increments/decrements was incorrect");
                break;
            case whatsWrong = "f":
                $("#textBack").text("The statement was not closed correctly");
                break;
            case whatsWrong = "ce":
                $("#textBack").text("The Commas should be semi-colons ';'");
                break;
        }
        
        if (speedMode && timeLeft > 0) {
            score = score-3;
            $("#score").text(score);
        }

    }

}

function incorrectGenerator() {
    let boption = Math.floor((Math.random() * 10));
    let xA = "for(let i = ";
    let xB = "; i < ";
    let xC = "; i++";
    let xD = "){";
    let back;
    xLocation = startLocation;
    yLocation = endLocation;
    switch (boption) {
        case boption = 0:
            xLocation = xLocation - 1;
            back = "b";
            break;
        case boption = 1:
            xLocation = xLocation + 1;
            back = "b";
            break;
        case boption = 2:
            yLocation = yLocation - 1;
            back = "d";
            break;
        case boption = 3:
            xD = ");";
            back = "f";
            break;
        case boption = 4:
            xD = "){;";
            back = "f";
            break;
        case boption = 5:
            xA = "for ";
            back = "a";
            break;
        case boption = 6:
            xA = "for(let i == ";
            back = "a";
            break;
        case boption = 7:
            xB = ", i < ";
            xC = ", i++";
            back = "ce";
            break;
        case boption = 8:
            xC = "; i+";
            back = "e";
            break;
        case boption = 9:
            xC = "; i";
            back = "e";
            break;

    }
    let badAnswer = `<span class="a">${xA}</span><span class="b">${xLocation}</span><span class="c">${xB}</span> <span class="d">${yLocation + 1}</span> <span class="e">${xC}</span><span class="f">${xD}</span>`;
    return [badAnswer, back];
}

function generateQuestion() {
    
    options = {};
    let xA = "for(let i = ";
    let xB = "; i < ";
    let xC = "; i++"
    let xD = "){";
    let format;

    for (let i = 1; i < 5; i++) {
        
        if (i == correct) {
            format = `${xA}${startLocation}${xB} ${endLocation + 1}${xC}${xD}`;
        } else {
            let incorrect = incorrectGenerator();
            format = incorrect[0];
            options[i] = incorrect[1];
        }
        $("#option" + i).html(format);

    }

}