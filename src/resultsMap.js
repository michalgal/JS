var selected = []

const upperSectionMap = {
    one: [-3, -2, -1, 0, 1, 2],
    two: [-6, -4, -2, 0, 2, 4],
    three: [-9, -6, -3, 0, 3, 6],
    four: [-12, -8, -4, 0, 4, 8],
    five: [-15, -10, -5, 0, 5, 10],
    six: [-18, -12, -6, 0, 6, 12]
}

const smallStraight = [1, 2, 3, 4, 5]
var countSmall = (selected) => { if (selected.reduce((value, nextValue) => smallStraight.includes(nextValue)) == true) { return 15 } else { return 0 } }
const largeStraight = [2, 3, 4, 5, 6]
var countLarge = (selected) => { if (selected.reduce((value, nextValue) => largeStraight.includes(nextValue)) == true) { return 20 } else { return 0 } }

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