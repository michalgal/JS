import { upperSectionMap, gameChoices } from '.result.js';

var result = []

var handleChoiceSelection = (id) => {
    let testIfFirst = (counter == 1) ? "True" : "False";
    var picked = selectDices()
    var selected = []
    for (var i = 0; i < picked.diceToExchange; i++) {
        let singlePick = document.getElementById("span-" + (picked.dicePosition[i] + 1))
        selected.push(singlePick.innerHTML)
    }
    console.log(selected)
    gameChoices.choice1.result = upperSectionMap["one"][selected.filter(x => x === 1).length], gameChoices.choice1.isFirst = false
    gameChoices.choice2.result = upperSectionMap["two"][selected.filter(x => x === 2).length], gameChoices.choice2.isFirst = false
    gameChoices.choice3.result = upperSectionMap["three"][selected.filter(x => x === 3).length], gameChoices.choice3.isFirst = false
    gameChoices.choice4.result = upperSectionMap["four"][selected.filter(x => x === 4).length], gameChoices.choice4.isFirst = false
    gameChoices.choice5.result = upperSectionMap["five"][selected.filter(x => x === 5).length], gameChoices.choice5.isFirst = false
    gameChoices.choice6.result = upperSectionMap["six"][selected.filter(x => x === 6).length], gameChoices.choice6.isFirst = false
    // gameChoices.choice7.result = gameChoices.choice7.testIfFirst,
    //gameChoices.choice8.result = gameChoices.choice8.testIfFirst,
    //gameChoices.choice9.result = gameChoices.choice9.testIfFirst,
    //gameChoices.choice10.result =  gameChoices.choice10.testIfFirst,
    //gameChoices.choice11.result =  gameChoices.choice11.testIfFirst,
    gameChoices.choice12.result = 15, gameChoices.choice12.testIfFirst,
        gameChoices.choice13.result = 20, gameChoices.choice13.testIfFirst,
        //gameChoices.choice14.result =  gameChoices.choice14.testIfFirst,
        //gameChoices.choice15.result =  gameChoices.choice15.testIfFirst,
        //gameChoices.choice16.result =  gameChoices.choice16.testIfFirst,
        gameChoices.choice17.result = gameChoices.choice17.testIfFirst

    //console.log(gameChoices)
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