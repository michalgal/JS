document.addEventListener('DOMContentLoaded', function () { addPlayers(addPlayers) })

var players = []
var scoreBoards = []

function addPlayers() {
    var player = prompt("Entesr player name")
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
    document.getElementById("player").innerHTML = players[0] + "'s turn"
};

function scoreBoardInstance(player, options) {
    this.player = player;
    this.options = options;
}