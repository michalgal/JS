var counter
var result = []
var selected = []

var gameChoices = {
    choice1: { id: 'radio-1', name: '1', result: null, isFirst:false, isPicked: false },
    choice2: { id: 'radio-2', name: '2', result: null, isFirst:false, isPicked: false },
    choice3: { id: 'radio-3', name: '3', result: null, isFirst:false, isPicked: false },
    choice4: { id: 'radio-4', name: '4', result: null, isFirst:false, isPicked: false },
    choice5: { id: 'radio-5', name: '5', result: null, isFirst:false, isPicked: false },
    choice6: { id: 'radio-6', name: '6', result: null, isFirst:false, isPicked: false },
    choice7: { id: 'radio-7', name: 'Pair', result: false, isFirst:null, isPicked: false },
    choice8: { id: 'radio-8', name: 'Double pair', result: false, isFirst:null, isPicked: false },
    choice9: { id: 'radio-9', name: 'Three of a kind', result: false, isFirst:null, isPicked: false },
    choice10: { id: 'radio-10', name: 'Four Of A Kind', result: false, isFirst:null, isPicked: false },
    choice11: { id: 'radio-11', name: 'Full', result: null, isFirst:false, isPicked: false },
    choice12: { id: 'radio-12', name: 'Small Straight', result: null, isFirst:false, isPicked: false },
    choice13: { id: 'radio-13', name: 'Large Straight', result: null, isFirst:false, isPicked: false },
    choice14: { id: 'radio-14', name: 'Even', result: null, isFirst:false, isPicked: false },
    choice15: { id: 'radio-15', name: 'Odd', result: null, isFirst:false, isPicked: false },
    choice16: { id: 'radio-16', name: 'General', result: null, isFirst:false, isPicked: false },
    choice17: { id: 'radio-17', name: 'Chance', result: null, isFirst:false, isPicked: false }
}

var upperSectionMap = {
    zero: [-3,-6,-9,-12,-15,-18],
    one: [-2,-4,-6,-8,-10,-12],
    two: [-1,-2,-3,-4,-5,-6],
    three:[0],
    four:[1,2,3,4,5,6],
    five:[2,4,6,8,10,12]
}

var handleChoiceSelection = (id) => {
    let testIfFirst = (counter-1 == 1) ? "True":"False";
    let picked = []
    selected = exchangeDices()
    for(i=0; i < selected.diceToExchange; i++)
        {
            let singlePick = document.getElementById("span-" + (selected.dicePosition[i] + 1))
            picked.push(singlePick.innerHTML)
        }

    //let  resultFilter = new Map([...new Set(picked)].map(x => [x, picked.filter(y => y === x).length]))

    let pick = {
        'radio-1': resultFilter.get(1),
        'radio-2': resultFilter.get(2),
        'radio-3': resultFilter.get(3),
        'radio-4': resultFilter.get(4),
        'radio-5': resultFilter.get(5),
        'radio-6': resultFilter.get(6),
        'radio-7': id, testIfFirst,
        'radio-8': id, testIfFirst,
        'radio-9': id, testIfFirst,
        'radio-10': id, testIfFirst,
        'radio-11': id, testIfFirst,
        'radio-12': id, testIfFirst,
        'radio-13': id, testIfFirst,
        'radio-14': id, testIfFirst,
        'radio-15': id, testIfFirst,
        'radio-16': id, testIfFirst,
        'radio-17': id, testIfFirst 
    }
    alert(pick["radio-1"])
};


document.getElementById("button-1").addEventListener("click", function () { rollDie(rollDie); })
document.getElementById("button-2").addEventListener("click", function () { openResults(openResults); })
document.getElementById("button-3").addEventListener("click", function () { checkAll(checkAll); })
document.getElementById("button-4").addEventListener("click", function () { uncheckAll(uncheckAll); })
document.getElementById("button-5").addEventListener("click", function () { closeResults(closeResults); })

function rollDie() {
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
    if(typeof counter === 'undefined')
    {
        document.getElementById("button-6").disabled = true
    }
    else 
    {
        document.getElementById("button-6").disabled = false;
    }
}

function closeResults() {
    document.getElementById("div-scoreForm").style.display = "none"
    document.getElementById("button-2").disabled = false;
}

function submit(id)
{
    //1. wybrany wynik zapisuje się na scoreboard
    //2. ekran wraca do początku gdzie; 
    // - counter == undefined
    // - znikają kości
    // - nie można submitować punktów
}