var players = []

function Player () {
        this.name = prompt("Enter player's name");
        this.score = 0;
        this.board = new Scoreboard(this.name, this.score);
        players.push(this);
}

function Scoreboard(playerName, playerScore) {
    this.playerName = playerName;
    this.playerScore = playerScore;
    this.playerBoard = gameChoices
}