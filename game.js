var buttonColour = ["red", "blue", "green", "yellow"];
var gamePattern = [];
function nextSeq() {
    var randomNumber = Math.floor((Math.random()) * 4);
    var randomColour = buttonColour[randomNumber];
    gamePattern.push(randomColour);
