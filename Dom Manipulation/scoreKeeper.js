var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1ScoreTrack = 0;
var p2ScoreTrack = 0;
var gameOver = false;
var winningScore = 5;
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var numInput = document.querySelector("input");
var endDisplay = document.querySelector("p span");

numInput.addEventListener("change", function(){
    endDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1ScoreTrack++;
        updatep1(p1ScoreTrack);
    }
    if (p1ScoreTrack == winningScore){
        gameOver = true;
        p1Display.classList.add("winner");
    }

});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2ScoreTrack ++;
        updatep2(p2ScoreTrack);
    }
    if (p2ScoreTrack == winningScore){
        gameOver = true;
        p2Display.classList.add("winner");
    }

});

resetButton.addEventListener("click", function(){
    reset();
});

function updatep1(number){
    p1Display.textContent = number;
};
function updatep2(number){
    p2Display.textContent = number;
};
function reset(){
    updatep1(0);
    updatep2(0);
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    p1ScoreTrack = 0;
    p2ScoreTrack = 0;
};