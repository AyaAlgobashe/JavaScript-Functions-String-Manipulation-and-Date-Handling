//////q1
function firtoUperCase(theWord) {
    let wordArray = theWord.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].substr(1);
        theWord = wordArray;
    }
    return console.log(theWord.join(" "))

}
firtoUperCase("aya ahmed")



///////q2
function theLongestWord(stringWord) {
    word = stringWord.split(" ");
    return console.log(word.sort((a, b) => b.length - a.length)[0])

}

///////////q3
function sortString(theWrde) {
    orderLetter = theWrde.split("");
    return console.log(orderLetter.sort().join(""));

}


/////q4
function getMonthname(dayDate) {
    monthesNames = ["January", "February", "March", "April", "May", "June", "July",
        "Augus", "September", "October", "November", "December"]
   
    return console.log(monthesNames[dayDate.getMonth()])


};

//////// Q5
function randomArray() {
    let arrayNumbers = [];
    while (arrayNumbers.length < 5) {
        let data = ((Math.floor(Math.random() * 10)));
        if (arrayNumbers.indexOf(data) === -1) {
            arrayNumbers.push(data);

        }


    }
    return console.log(arrayNumbers)

}

