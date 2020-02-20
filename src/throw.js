var counter
var result = []
var selected = []

var upperSectionMap = {
    one: [-3, -2, -1, 0, 1, 2],
    two: [-6, -4, -2, 0, 2, 4],
    three: [-9, -6, -3, 0, 3, 6],
    four: [-12, -8, -4, 0, 4, 8],
    five: [-15, -10, -5, 0, 5, 10],
    six: [-18, -12, -6, 0, 6, 12]
}

var gameChoices = {
    choice1: { id: 'radio-1', name: '1', result: null, isFirst: false, isPicked: false },
    choice2: { id: 'radio-2', name: '2', result: null, isFirst: false, isPicked: false },
    choice3: { id: 'radio-3', name: '3', result: null, isFirst: false, isPicked: false },
    choice4: { id: 'radio-4', name: '4', result: null, isFirst: false, isPicked: false },
    choice5: { id: 'radio-5', name: '5', result: null, isFirst: false, isPicked: false },
    choice6: { id: 'radio-6', name: '6', result: null, isFirst: false, isPicked: false },
    choice7: { id: 'radio-7', name: 'Pair', result: false, isFirst: null, isPicked: false },
    choice8: { id: 'radio-8', name: 'Double pair', result: false, isFirst: null, isPicked: false },
    choice9: { id: 'radio-9', name: 'Three of a kind', result: false, isFirst: null, isPicked: false },
    choice10: { id: 'radio-10', name: 'Four Of A Kind', result: false, isFirst: null, isPicked: false },
    choice11: { id: 'radio-11', name: 'Full', result: null, isFirst: false, isPicked: false },
    choice12: { id: 'radio-12', name: 'Small Straight', result: null, isFirst: false, isPicked: false },
    choice13: { id: 'radio-13', name: 'Large Straight', result: null, isFirst: false, isPicked: false },
    choice14: { id: 'radio-14', name: 'Even', result: null, isFirst: false, isPicked: false },
    choice15: { id: 'radio-15', name: 'Odd', result: null, isFirst: false, isPicked: false },
    choice16: { id: 'radio-16', name: 'General', result: null, isFirst: false, isPicked: false },
    choice17: { id: 'radio-17', name: 'Chance', result: null, isFirst: false, isPicked: false }
}

var handleChoiceSelection = (id) => {
    let testIfFirst = (counter - 1 == 1) ? "True" : "False";
    let picked = []
    selected = exchangeDices()
    for (i = 0; i < selected.diceToExchange; i++) {
        let singlePick = document.getElementById("span-" + (selected.dicePosition[i] + 1))
        picked.push(singlePick.innerHTML)
    }

    gameChoices.choice1.result = upperSectionMap["one"][picked.filter(x => x === 1).length], gameChoices.choice1.isFirst = false
    gameChoices.choice2.result = upperSectionMap["two"][picked.filter(x => x === 2).length], gameChoices.choice2.isFirst = false
    gameChoices.choice3.result = upperSectionMap["three"][picked.filter(x => x === 3).length], gameChoices.choice3.isFirst = false
    gameChoices.choice4.result = upperSectionMap["four"][picked.filter(x => x === 4).length], gameChoices.choice4.isFirst = false
    gameChoices.choice5.result = upperSectionMap["five"][picked.filter(x => x === 5).length], gameChoices.choice5.isFirst = false
    gameChoices.choice6.result = upperSectionMap["six"][picked.filter(x => x === 6).length], gameChoices.choice6.isFirst = false
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

    console.log(picked)
    console.log(gameChoices)
};


document.getElementById("button-1").addEventListener("click", function () { rollDie(rollDie); })
document.getElementById("button-2").addEventListener("click", function () { openResults(openResults); })
document.getElementById("button-3").addEventListener("click", function () { checkAll(checkAll); })
document.getElementById("button-4").addEventListener("click", function () { uncheckAll(uncheckAll); })
document.getElementById("button-5").addEventListener("click", function () { closeResults(closeResults); })

const rollDie = () => {
    //Throw a dice logic (first roll)
    if (typeof counter === 'undefined') {
        for (let i = 1; i <= 5; i++) {
            result.push(Math.floor(Math.random() * 6) + 1);
        }
        document.getElementById("button-1").disabled = true;
        unhideButtons();
    }

    //Throw a dice logic (rolls: 2 and 3)
    else {
        let dicesToExchange = exchangeDices()
        if (dicesToExchange.diceToExchange !== 0) {
            for (let i = 0; i <= dicesToExchange.diceToExchange; i++) {
                result[dicesToExchange.dicePosition[i]] = Math.floor(Math.random() * 6) + 1;
            }
            uncheckAll();
        }

    }
    pasteResults(result)
    countRoll(counter)
}

function countRoll() {
    if (typeof counter === 'undefined') {
        counter = 1
        document.getElementById("span-counter").innerHTML = "Roll number: " + counter
        counter++;
    }
    else {
        document.getElementById("span-counter").innerHTML = "Roll number: " + counter
        counter++;
        if (counter == 4) {
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

function unhideButtons() {
    document.getElementById("span-counter").hidden = false
    document.getElementById("form-1").hidden = false
    document.getElementById("span-space").hidden = false
    document.getElementById("button-3").hidden = false
    document.getElementById("button-4").hidden = false
}

function uncheckAll() {
    let uncheckBox = document.getElementsByTagName("input")
    for (let i = 0; i <= uncheckBox.length - 1; i++) {
        uncheckBox[i].checked = false;
    }
    document.getElementById("button-1").disabled = true
}

function exchangeDices() {
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

function lastRoll() {
    document.getElementById("button-1").hidden = true
    document.getElementById("span-space").hidden = true
    document.getElementById("button-3").disabled = true
    document.getElementById("button-4").disabled = true
}

function checkAll() {
    let checkBox = document.getElementsByTagName("input")
    for (let i = 0; i <= checkBox.length - 1; i++) {
        checkBox[i].checked = true;
    }
    document.getElementById("button-1").disabled = false
}

function checkIfChecked() {
    let boolTest = document.getElementsByClassName("check")
    for (let i = 0; i <= boolTest.length - 1; i++) {
        if (boolTest[i].checked) {
            document.getElementById("button-1").disabled = false
            { break }
        }
        else {
            document.getElementById("button-1").disabled = true
        }
    }
}

function openResults() {
    document.getElementById("div-scoreForm").style.display = "block"
    document.getElementById("button-2").disabled = true
    if (typeof counter === 'undefined') {
        document.getElementById("button-6").disabled = true
    }
    else {
        document.getElementById("button-6").disabled = false;
    }
}

function closeResults() {
    document.getElementById("div-scoreForm").style.display = "none"
    document.getElementById("button-2").disabled = false;
}

function submit(id) {
    //1. wybrany wynik zapisuje się na scoreboard
    //2. ekran wraca do początku gdzie; 
    // - counter == undefined
    // - znikają kości
    // - nie można submitować punktów
}