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


let varName = "";
let varIndex;

function newChallenge() {
    let ai = Math.floor(Math.random() * Math.floor(objArray.length));
    varIndex = Math.floor(Math.random() * Math.floor(5));
    varName = objArray[ai]["name"];
    
    $("#textBack").text("");
    $("#codeArea").val("");
    $("#instructions").text(`Given the array of ${varName}s, set the variable ${varName} to ${objArray[ai]["arr"][varIndex]}.`);
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
    if(codeIn[0].substring(0,3)!="let"){
        $("#textBack").text("Have you started to define the variable with let");
        return;
    }
    if(codeIn[0].substring(3,3+varName.length)!=(varName)){
        console.log(codeIn[0].substring(3,3+varName.length));
        console.log("let"+varName);
        
        $("#textBack").text(`You need to define the variable with the name ${varName}`);
        return;
    }
    console.log($("#codeArea").val());
    if($("#codeArea").val().substring(0,4+varName.length) != `let ${varName}`){
        $("#textBack").text(`Did you forget the space between let and ${varName}`);
        return;
    }
    if(codeIn[0].substring(3+varName.length, 4+varName.length)!=("=")){
        $("#textBack").text(`You need to define the variable with the name ${varName}`);
        return;
    } 
    if(codeIn[0].substring(3+varName.length, 5+varName.length)==("==")){
        $("#textBack").text(`= is used to set a variable.  == is used to compare variables.`);
        return;
    }
    if(codeIn[0] != `let${varName}=${varName}s[${varIndex}];`){
        $("#textBack").text(`= is used to set a variable.  == is used to compare variables.`);
        return;
    }

    

    $("#textBack").text(`So Far So good!`);

}