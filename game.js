var buttonColour = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];

var level = 0;
var flag = false;

function nextSeq() {
    userPattern = [];

    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor((Math.random()) * 4);
    var randomColour = buttonColour[randomNumber];
    gamePattern.push(randomColour);

    $("#" + randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColour);

$(".btn").on("click", function () {
    var userColour = $(this).attr("id");
    userPattern.push(userColour);
    playSound(userColour);


    checkAnswer(userPattern.length - 1);
})

function playSound(colour) {

function Animation(colour) {
    $("#" + colour).addClass("pressed");
    setTimeout(function () {
        $("#" + colour).removeClass("pressed");
    }, 100);
}

$(document).on("keydown", function () {
    if (flag == false) {
        $("h1").text("Level " + level);
        nextSeq();
        flag = true;
    }
})

function checkAnswer(index) {
    if (userPattern[index] == gamePattern[index]) {
        if (userPattern.length == gamePattern.length) {
            setTimeout(function () {
                nextSeq();
            }, 1000);
        }
    }




