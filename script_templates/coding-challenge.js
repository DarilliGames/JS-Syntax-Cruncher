function newChallenge() {
    //  Generate conditions which the student must meet


    // Clear the feedback given to the student
    $("#textBack").text("");
    $("#codeArea").val("");
    $("#instructions").text(`Here you write the challenge the student must complete`);

}

function getTextArea() {
    // Breaks down the text area and remove spaces and splits on new lines.
    let codeIn = $("#codeArea").val().replaceAll(" ", "").split("\n");
    codeIn = codeIn.filter(item => item !== "");
    let returnText = "";
    if (typeof (codeIn[0]) == "undefined") {
        $("#textBack").text("Start typing your if statement!");
        return;
    }

    
    // Must always be feedback provided to the student in the event a challenge fails
    $("#textBack").text(returnText)

}