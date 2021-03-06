let objArray = [
    {
        "name": "fruit",
        "arr": [
            "apple",
            "banana",
            "coconut",
            "kiwi",
            "orange"
        ]
    },
    {
        "name": "jedi",
        "arr": [
            "Luke",
            "Yoda",
            "Obi-Wan",
            "Anakin",
            "Mace"
        ]
    },
    {
        "name": "hobbit",
        "arr": [
            "Frodo",
            "Sam",
            "Merry",
            "Pippin",
            "Bilbo"
        ]
    },
    {
        "name": "pokemon",
        "arr": [
            "Bulbasaur",
            "Charmander",
            "Squirtle",
            "Pikachu",
            "Eevee"
        ]
    },
    {
        "name": "languange",
        "arr": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "C++"
        ]
    },
    {
        "name": "editor",
        "arr": [
            "GitPod",
            "VS Code",
            "Sublime Text",
            "Notepad++",
            "Eclipse"
        ]
    }
];


let correct;
let options;
let challenge = "jsArray0";
let varName = "";
let varIndex;

function newChallenge() {
    let ai = Math.floor(Math.random() * Math.floor(objArray.length));
    varIndex = Math.floor(Math.random() * Math.floor(objArray[ai]["arr"].length));
    varName = objArray[ai]["name"];
    console.log(varIndex);
    correct = Math.floor((Math.random() * 4) + 1);
    $("#textBack").text("");
    $("#instructions").text(`Which array notation with create a variable named ${varName} and set the value of "${objArray[ai]["arr"][varIndex]}" from the array ${varName}?`);
    $("#array").text(`let ${varName}s = [${objArray[ai]["arr"].join(", ")}];`);
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
                $("#textBack").text("The variable is trying to override the array!");
                break;
            case whatsWrong = "c":
                $("#textBack").text("'==' is how you check if a value is the same.  '=' is used to set a new variable");
                break;
            case whatsWrong = "d":
                $("#textBack").text(`We need to target the array named ${varName + "s"}`);
                break;
            case whatsWrong = "e":
                $("#textBack").text("The index is incorrect.  Remember - that array indexing starts at [0] for the first element");
                break;

        }

        if (speedMode && timeLeft > 0) {
            score = score - 3;
            $("#score").text(score);
        }

    }

}

function incorrectGenerator() {
    let boption = Math.floor((Math.random() * 6));
    let pos0 = "let "
    let pos1 = varName;
    let pos2 = varName + "s";
    let pos3 = `[${varIndex}]`;
    let posEqual = " = ";
    let back = "I don't know";
    switch (boption) {
        case boption = 0:
            pos1 = pos2;
            back = "b";
            break;
        case boption = 1:
            pos2 = pos1;
            back = "d";
            break;
        case boption = 2:
            pos3 = `[${varIndex + 1}]`;
            back = "e";
            break;
        case boption = 3:
            pos3 = `[${varIndex - 1}]`;
            back = "e";
            break;
        case boption = 4:
            pos0 = " ";
            back = "a";
            break;
        case boption = 5:
            posEqual = " == ";
            back = "c";
            break;


    }
    let badAnswer = `<span class="a">${pos0}</span><span class="b">${pos1}</span><span class="c">${posEqual}</span><span class="d">${pos2}</span><span class="e">${pos3}</span>;`;
    return [badAnswer, back];
}

function generateQuestion() {

    options = {};

    let format;

    for (let i = 1; i < 5; i++) {

        if (i == correct) {
            format = `let ${varName} = ${varName}s[${varIndex}];`;
        } else {
            let incorrect = incorrectGenerator();
            format = incorrect[0];
            options[i] = incorrect[1];
        }
        $("#option" + i).html(format);

    }

}