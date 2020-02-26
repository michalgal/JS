var result = []

var handleChoiceSelection = (id) => {
    var testIfFirst = (counter == 1) ? "True" : "False";
    var picked = selectDices()
    var selected = []
    for (var i = 0; i < picked.diceToExchange; i++) {
        let singlePick = document.getElementById("span-" + (picked.dicePosition[i] + 1))
        selected.push(parseInt(singlePick.innerHTML))
    }
    appendRes(id, selected, testIfFirst);
};

const rollDie = () => {

    // count roll number with countRoll function
    var counter = countRoll();
    //Throw a dice logic (first roll)
    if (counter == 1) {
        for (var i = 1; i <= 5; i++) {
            result.push(Math.floor(Math.random() * 6) + 1);
        }
        document.getElementById("button-1").disabled = true;
        unhideButtons();
    }

    //Throw a dice logic (rolls: 2 and 3) 

    else {
        var dicesToExchange = selectDices()
        for (var i = 0; i <= dicesToExchange.diceToExchange; i++) {
            result[dicesToExchange.dicePosition[i]] = Math.floor(Math.random() * 6) + 1
        }
    }

    pasteResults(result)
    uncheckAll();
}

function countRoll() {
    if (typeof counter === 'undefined') {
        counter = 1
        document.getElementById("span-counter").innerHTML = "Roll number: " + counter
    }
    else {
        counter++
        document.getElementById("span-counter").innerHTML = "Roll number: " + counter;
        if (counter == 3) {
            lastRoll();
        }
    }
    return counter;
}

function pasteResults(result) {
    document.getElementById("span-1").innerHTML = result[0]
    document.getElementById("span-2").innerHTML = result[1]
    document.getElementById("span-3").innerHTML = result[2]
    document.getElementById("span-4").innerHTML = result[3]
    document.getElementById("span-5").innerHTML = result[4];
}

function selectDices() {
    let dices = {
        diceToExchange: Number,
        dicePosition: []
    }
    if (document.getElementById("checkbox-1").checked) { dices.dicePosition.push(0); }
    if (document.getElementById("checkbox-2").checked) { dices.dicePosition.push(1); }
    if (document.getElementById("checkbox-3").checked) { dices.dicePosition.push(2); }
    if (document.getElementById("checkbox-4").checked) { dices.dicePosition.push(3); }
    if (document.getElementById("checkbox-5").checked) { dices.dicePosition.push(4); }

    dices.diceToExchange = dices.dicePosition.length
    return dices;
}

function submit(id) {
    //1. wybrany wynik zapisuje się na scoreboard
    //2. ekran wraca do początku gdzie; 
    // - counter == undefined
    // - znikają kości
    // - nie można submitować punktów
}