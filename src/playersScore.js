document.addEventListener('DOMContentLoaded', function () { addPlayers(addPlayers) })

var players = []
var scoreBoards = []

function addPlayers() {
    var player = prompt("Enter player name")
    if (player == null) {
        document.getElementById("button-1").disabled = true
        document.getElementById("button-2").disabled = true
        return null
    }
    else {
        players.push(player)
        var player = new scoreBoardInstance(player, gameChoices)
        scoreBoards.push(player)
        if (window.confirm("Do you want to add another player?")) {
            addPlayers();
        }
    }
    document.getElementById("plasyer").innerHTML = players[0] + "'s turn"
};

function scoreBoardInstance(playerName, options) {
    this.playerName = playerName;
    this.options = options;
};