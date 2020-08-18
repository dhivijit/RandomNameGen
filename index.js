function start() {
    document.getElementById("firstTitle").style.display = "none"
    document.getElementById("firstStart").style.display = "none";
    document.getElementById("rulesBlock").style.display = "contents";
    document.getElementById("start").style.visibility = "visible";
}

function game() {
    var playerNum = prompt("Enter the number of players:");
    console.log("The number of players are " + playerNum);
    var players = [];
    for (var i = 0; i < playerNum; i++) {
        players.push(prompt("Enter the name of the player:"));
    }
    console.log("The players are " + players);
    var playerr = prompt("Enter the number of rounds you want to play:");
    console.log("The number of rounds are " + playerr + ".");
    for (var j = 1; j <= playerr; j++) {
        var playerTurn = Math.random() * players.length;
        playerTurn = Math.floor(playerTurn);
        alert("The next player is " + players[playerTurn] + ".");
    }
    document.getElementById("rulesBlock").style.display = "none";
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("thank").style.visibility = "visible";
}
