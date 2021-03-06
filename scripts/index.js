let requirements = {
    // L/O's
    "jsLO0": [2, 4, 6, 10],
    "jsLO1": [1, 2, 3, 4],
    "jsLO": [1, 2, 3, 4],
    // Loops
    "jsForLoop0": [2, 4, 6, 10],
    "jsForLoop1": [1, 2, 3, 4],
    "jsForLoop2": [1, 2, 3, 4],
    // Array Notation
    "jsArray0": [2, 4, 6, 10],
    "jsArray1": [1, 2, 3, 4],
    "jsArray2": [1, 2, 3, 4],
    
    // if
    "jsIf0": [2, 4, 6, 10],
    "jsIf1": [1, 2, 3, 4],
    "jsIf2": [1, 2, 3, 4],

    // def func
    "jsDefFunc0": [2, 4, 6, 10],
    "jsDefFunc1": [1, 2, 3, 4],
    "jsDefFunc2": [1, 2, 3, 4],
};


$('.medal').each(function () {
    let medalID = ($(this).attr('id'));
    let iID = medalID.substring(6, medalID.length)
    let x = localStorage.getItem(iID);
    let medalCase = 0;
    let medalClass;
    if (x != null) {
        requirements[iID].forEach(element => {
            if (x >= element) {
                medalCase++;
            }
        })
    }
    switch (medalCase) {
        case medalCase = 0:
            medalClass = "no-medal";
            break;
        case medalCase = 1:
            medalClass = "bronze"
            break;
        case medalCase = 2:
            medalClass = "silver"
            break;
        case medalCase = 3:
            medalClass = "gold"
            break;
        case medalCase = 4:
            medalClass = "diamond"
            break;
    }
    $(this).addClass(medalClass);

});


