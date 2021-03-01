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
        console.log("Wow!");
    }
    else {
        console.log("Oops!");

    }

}

function incorrectGenerator() {
    let boption = Math.floor((Math.random() * 10));
    let xA = "for(let i = ";
    let xB = "; i < ";
    let xC = "; i++";
    let xD = "){";
    xLocation = startLocation;
    yLocation = endLocation;
    switch (boption) {
        case boption=0:
            xLocation = xLocation-1;
            break;
        case boption=1:
            xLocation = xLocation+1;
            break;
        case boption=2:
            yLocation = yLocation-1;
            break;
        case boption=3:
            xD = ");";
            break;
        case boption = 4:
            xD = "){;";
            break;
        case boption = 5:
            xA = "for "
            break;
        case boption = 6:
            xA = "for(let i == ";
            break;
        case boption = 7:
            xB = ", i < ";
            xC = ", i++";
            break;
        case boption = 8:
            xC = "; i+";
            break;
        case boption = 9:
            xC = "; i";
            break;
        default:
            xc="";
    }
    let badAnswer = `${xA}${xLocation}${xB} ${yLocation+1} ${xC}${xD}`;
    return badAnswer;
}

function generateQuestion() {
    console.log("Hello");
    options = [];
    let xA = "for(let i = ";
    let xB = "; i < ";
    let xC = "; i++"
    let xD = "){";
    let format;
    for (let i = 1; i < 5; i++) {
        console.log(i, correct);
        if(i == correct){
            format = `${xA}${startLocation}${xB} ${endLocation+1}${xC}${xD}`;
        }else{
            format = incorrectGenerator();
        }
        $("#option" + i).text(format);

    }
}