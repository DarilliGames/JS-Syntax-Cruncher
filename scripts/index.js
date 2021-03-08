let requirements = {
    "jsForLoop0": [2, 4, 6, 8],
    "jsForLoop1": [1, 2, 3, 4],
    "jsForLoop2": [1, 2, 3, 4],
    "if1": [1, 2, 3, 4]
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