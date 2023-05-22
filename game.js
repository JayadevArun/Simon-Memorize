var buttonColour = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
function nextSeq() {
    var randomNumber = Math.floor((Math.random()) * 4);
    var randomColour = buttonColour[randomNumber];
    gamePattern.push(randomColour);
    $("#" + randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColour);
$(".btn").on("click", function () {
    var userColour = $(this).attr("id");
    userPattern.push(userColour);
function playSound(colour) {
