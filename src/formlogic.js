var playersCounter = 0

document.getElementById("button-1").addEventListener("click", function () { rollDie(rollDie) })
document.getElementById("button-2").addEventListener("click", function () { openResults(openResults) })
document.getElementById("button-3").addEventListener("click", function () { checkAll(checkAll) })
document.getElementById("button-4").addEventListener("click", function () { uncheckAll(uncheckAll) })
document.getElementById("button-5").addEventListener("click", function () { closeResults(closeResults) })
document.getElementById("button-6").addEventListener("click", function () { nextTurn(players) })

function nextTurn(players) {

    let nextPlayer = players[playersCounter += 1]
    if (playersCounter == players.length - 1) {
        playersCounter = -1
    }
    document.getElementById("player").innerHTML = nextPlayer + "'s turn";
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

function checkAll() {
    let checkBox = document.getElementsByTagName("input")
    for (let i = 0; i <= checkBox.length - 1; i++) {
        checkBox[i].checked = true;
    }
    document.getElementById("button-1").disabled = false
}


function uncheckAll() {
    let uncheckBox = document.getElementsByTagName("input")
    for (let i = 0; i <= uncheckBox.length - 1; i++) {
        uncheckBox[i].checked = false;
    }
    document.getElementById("button-1").disabled = true
}

function unhideButtons() {
    document.getElementById("span-counter").hidden = false
    document.getElementById("form-1").hidden = false
    document.getElementById("span-space").hidden = false
    document.getElementById("button-3").hidden = false
    document.getElementById("button-4").hidden = false
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

function lastRoll() {
    document.getElementById("button-1").hidden = true
    document.getElementById("span-space").hidden = true
    document.getElementById("div-scoreForm").style.display = "block"
    document.getElementById("button-2").disabled = true
    document.getElementById("button-5").disabled = true
};
