var p1 = Math.floor(Math.random()*6) + 1;
var p2 = Math.floor(Math.random()*6) + 1;

var randDiceImg1 = "dice" + p1 + ".png";
var dice = document.querySelectorAll(".dice img")[0];
var diceSource = "images/" + randDiceImg1;

dice.setAttribute("src" , diceSource);

var p2 = Math.floor(Math.random()*6) + 1;

var randDiceImg2 = "dice" + p2 + ".png";
var dice2 = document.querySelectorAll(".dice img")[1];
var diceSource2 = "images/" + randDiceImg2;

dice2.setAttribute("src" , diceSource2);


if(p1 > p2)
document.querySelector("h1").textContent="Player 1 Wins !";
else if(p2 > p1)
document.querySelector("h1").textContent="Player 2 Wins !";
else 
document.querySelector("h1").textContent="Tie !";