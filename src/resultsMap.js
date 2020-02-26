var selected = []

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

const upperSectionMap = {
    one: [-3, -2, -1, 0, 1, 2],
    two: [-6, -4, -2, 0, 2, 4],
    three: [-9, -6, -3, 0, 3, 6],
    four: [-12, -8, -4, 0, 4, 8],
    five: [-15, -10, -5, 0, 5, 10],
    six: [-18, -12, -6, 0, 6, 12]
}

const smallStraight = [1, 2, 3, 4, 5]
const countSmall = (selected) => { if (JSON.stringify(smallStraight) == JSON.stringify(selected.sort())) { return 15 } else { return 0 } }
const largeStraight = [2, 3, 4, 5, 6]
const countLarge = (selected) => { if (JSON.stringify(largeStraight) == JSON.stringify(selected.sort())) { return 20 } else { return 0 } }

const countGeneral = (selected) => {
    if (selected.filter(x => x === 1).length == 5) { return 55 }
    if (selected.filter(x => x === 2).length == 5) { return 60 }
    if (selected.filter(x => x === 3).length == 5) { return 65 }
    if (selected.filter(x => x === 4).length == 5) { return 70 }
    if (selected.filter(x => x === 5).length == 5) { return 75 }
    if (selected.filter(x => x === 6).length == 5) { return 80 }
    else { return 0 }
}

const countPair = (selected) => {
    if (selected.length !== 2) {
        alert('Please check two dices for Pair')
        return null
    }
    else {
        if (selected[0] !== selected[1]) {
            return 0
        }
        else {
            return (selected[0] + selected[1])
        }
    }
}

const countDoublePair = (selected) => {
    var sorted = selected.sort()
    if (sorted.length !== 4) {
        alert('Please check four dices for Double Pair')
        return null
    }
    else {
        if (sorted[0] !== sorted[1] || sorted[2] !== sorted[3]) {
            return 0
        }
        else {
            return (sorted[0] + sorted[1] + sorted[2] + sorted[3])
        }
    }
}

const countThree = (selected) => {
    if (selected.filter(x => x === 1).length == 3) { return 3 }
    if (selected.filter(x => x === 2).length == 3) { return 6 }
    if (selected.filter(x => x === 3).length == 3) { return 9 }
    if (selected.filter(x => x === 4).length == 3) { return 12 }
    if (selected.filter(x => x === 5).length == 3) { return 15 }
    if (selected.filter(x => x === 6).length == 3) { return 18 }
    else { return 0 }
}

const countFour = (selected) => {
    if (selected.filter(x => x === 1).length == 4) { return 4 }
    if (selected.filter(x => x === 2).length == 4) { return 8 }
    if (selected.filter(x => x === 3).length == 4) { return 12 }
    if (selected.filter(x => x === 4).length == 4) { return 16 }
    if (selected.filter(x => x === 5).length == 4) { return 20 }
    if (selected.filter(x => x === 6).length == 4) { return 24 }
    else { return 0 }
}

const countFull = (selected) => {
    let sorted = selected.sort();
    if (sorted[0] == sorted[1] == sorted[2] && sorted[3] == sorted[4] ||  sorted[0] == sorted[1] && sorted[2] == sorted[3] == sorted[4])
    {
        return sorted.reduce((currentValue, nextValue) => currentValue += nextValue)
    }
    else {
        return 0
    }
}

function appendRes(id, selected, isFirst) {
    if (id == gameChoices.choice1.id) { gameChoices.choice1.result = upperSectionMap["one"][selected.filter(x => x === 1).length], gameChoices.choice1.isFirst = false }
    if (id == gameChoices.choice2.id) { gameChoices.choice2.result = upperSectionMap["two"][selected.filter(x => x === 2).length], gameChoices.choice2.isFirst = false }
    if (id == gameChoices.choice3.id) { gameChoices.choice3.result = upperSectionMap["three"][selected.filter(x => x === 3).length], gameChoices.choice3.isFirst = false }
    if (id == gameChoices.choice4.id) { gameChoices.choice4.result = upperSectionMap["four"][selected.filter(x => x === 4).length], gameChoices.choice4.isFirst = false }
    if (id == gameChoices.choice5.id) { gameChoices.choice5.result = upperSectionMap["five"][selected.filter(x => x === 5).length], gameChoices.choice5.isFirst = false }
    if (id == gameChoices.choice6.id) { gameChoices.choice6.result = upperSectionMap["six"][selected.filter(x => x === 6).length], gameChoices.choice6.isFirst = false }
    if (id == gameChoices.choice7.id) { gameChoices.choice7.result = countPair(selected), gameChoices.choice7.isFirst = isFirst }
    if (id == gameChoices.choice8.id) { gameChoices.choice8.result = countDoublePair(selected), gameChoices.choice8.isFirst = isFirst }
    if (id == gameChoices.choice9.id) { gameChoices.choice9.result = countThree(selected), gameChoices.choice9.isFirst = isFirst }
    if (id == gameChoices.choice10.id) { gameChoices.choice10.result = countFour(selected), gameChoices.choice10.isFirst = isFirst }
    if (id == gameChoices.choice11.id) { gameChoices.choice11.result = countFull(selected), gameChoices.choice11.isFirst = isFirst }
    if (id == gameChoices.choice12.id) { gameChoices.choice12.result = countSmall(selected), gameChoices.choice12.isFirst = isFirst }
    if (id == gameChoices.choice13.id) { gameChoices.choice13.result = countLarge(selected), gameChoices.choice13.isFirst = isFirst }
    //gameChoices.choice14.result =  gameChoices.choice14.testIfFirst,
    //gameChoices.choice15.result =  gameChoices.choice15.testIfFirst,
    if (id == gameChoices.choice16.id) { gameChoices.choice16.result = countGeneral(selected), gameChoices.choice16.isFirst = isFirst }
    if (id == gameChoices.choice17.id) { gameChoices.choice17.result = selected.reduce((value, nextValue) => value + nextValue), gameChoices.choice17.isFirst = false }
    console.log(gameChoices)
}