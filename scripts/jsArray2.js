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
        "name": "language",
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


let varName = "";
let varIndex;
let challenge = "jsArray1";
let ai;
let fullArray = "[";
for (let i=0; i<objArray.length;i++){
    fullArray =+ [objArray[i]["arr"].join(", ")];
}
console.log(fullArray);

function newChallenge() {
    ai = Math.floor(Math.random() * Math.floor(objArray.length));
    varIndex = Math.floor(Math.random() * Math.floor(objArray[ai]["arr"].length));
    varName = objArray[ai]["name"];
    

    $("#textBack").text("");
    $("#codeArea").val("");
    $("#instructions").text(`Given the nested array of objArray ${varName}s, set the variable ${varName} to ${objArray[ai]["arr"][varIndex]}.`);
    $("#array").text(`${varName}s = [${objArray[ai]["arr"].join(", ")}];`);

}

function getTextArea() {
    let codeIn = $("#codeArea").val().replaceAll(" ", "").split("\n");
    codeIn = codeIn.filter(item => item !== "");
    let returnText = "";
    if (typeof (codeIn[0]) == "undefined") {
        $("#textBack").text("Start typing your if statement!");
        return;
    }
    if (codeIn[0].substring(0, 3) != "let") {
        $("#textBack").text("Have you started to define the variable with let");
        return;
    }
    if (codeIn[0].substring(3, 3 + varName.length) != (varName)) {
        console.log(codeIn[0].substring(3, 3 + varName.length));
        console.log("let" + varName);

        $("#textBack").text(`You need to define the variable with the name ${varName}`);
        return;
    }

    console.log($("#codeArea").val());
    if ($("#codeArea").val().substring(0, 4 + varName.length) != `let ${varName}`) {
        $("#textBack").text(`Did you forget the space between let and ${varName}`);
        return;
    }
    if (codeIn[0].substring(3 + varName.length, 4 + varName.length) != ("=")) {
        $("#textBack").text(`You need to define the variable with the name ${varName}`);
        return;
    }
    if (codeIn[0].substring(3 + varName.length, 5 + varName.length) == ("==")) {
        $("#textBack").text(`= is used to set a variable.  == is used to compare variables.`);
        return;
    }
    if (codeIn[0] == `let${varName}=${varName}s[${varIndex}];`) {
        $("#textBack").text(`You have forgotten to take the objArray into account.  You need to access ${varName} before ${varName[varIndex]}.`);
        return;
    }
    console.log(codeIn[0].substring(13+varName.length));
    if (codeIn[0].substring(4 + varName.length, 13+varName.length) != "objArray") {
        $("#textBack").text(`You need get the outter array - objArray before accessing the inner array.`);
        return;
    }
    if (codeIn[0].substring(13+varName.length + 16+varName.length) != `[${ai}]`) {
        $("#textBack").text(`You need get the outter array - objArray before accessing the inner array.`);
        return;
    }

    if (codeIn[0] != `let${varName}=objArray[${ai}][${varIndex}];`) {
        $("#textBack").text(`You have accessed the outter array.  Now you need to access the inner array.`);
        return;
    }

    if (speedMode && timeLeft > 0) {
        score++;
        $("#score").text(score);
        newChallenge();
        $("#codeArea").val("");

    }

    $("#textBack").text(`So Far So good!`);

}