var choices = ["R", "P", "S"];
var wins
var losses 
var ties
var computerIndex = random(0,2);
var computerSelection = choices[computerIndex];

alert("You selected: " + userSelection);
alert("The opponent selcted: " + computerSelection);

if (userSelection === computerSelection) {
//tie
} else if (
(userSelection === "R" && computerSelection === "S")
(userSelection === "R" && computerSelection === "S")
(userSelection === "R" && computerSelection === "S")
) {}

function startGame() {
    var userSelection = prompt("Select your choice from R, P, S");
}

alert(`
You have won: ${wins} times
You have lost: ${losses} times
You have tied: ${ties} times
`)
function random(min, max) {
    const num = Math.floor(Math.random() * (max-min + 1)) + min;
    return num;
}

startGame 