// Selecting elements using dom selectors

var numInput = document.querySelector("input[type='number']");
var start = document.querySelector("#start");
var restart = document.querySelector("#restart");
var resetButton = document.querySelector("#reset");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");

// counter to increment, target for input and gameOver for gamecondition

var counter =0;
var target;
var gameOver = false;