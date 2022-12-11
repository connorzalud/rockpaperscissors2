
//game logic definitions
const buttons = document.querySelectorAll(".btn");
const output = document.querySelector(".output");
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");
const cGames = document.querySelector(".cGames");
const pGames = document.querySelector(".pGames");
const endGame = document.createElement("div");
const newGameMessage = document.createElement("p");
const newGameBtn = document.createElement("button");
newGameBtn.classList.add("newbtn");
endGame.classList.add("endGame");
const outputContainer = document.querySelector(".output-container");
let playerScore = 0;
let compScore = 0;
let playerGame = 0;
let compGame = 0;

//start screen definitions
const start = document.createElement("div");
const startText = document.createElement("div");
const startbtn = document.createElement("button");
start.classList.add("start-container");
startbtn.classList.add("start-btn");
startText.classList.add("start-text");

//start.textContent="Play rock, paper scissors against the computer! The first to 5 points wins one game. The first to win five games is the winner!";
startText.textContent= "Play rock, paper scissors against the computer! The first to 5 points wins one game. The first to win five games is the winner!"
startbtn.textContent = "START";
start.append(startText);
start.append(startbtn);

//game over definitions
const gameover = document.createElement("div");
const body = document.querySelector("body");
gameover.classList.add("game-over");
const winImg = document.createElement("img");
winImg.src = "../rockpaperscissors2/images/celebrate.png";
const loseImg = document.createElement("img");
loseImg.src = "../rockpaperscissors2/images/sad.png";
const endContainer = document.createElement("div");
endContainer.classList.add("end-container");
winImg.classList.add("image");
loseImg.classList.add("image");


//functions
function startScreen(){
    outputContainer.remove();
    body.append(start);
}

function computerChoice(){
    let compChoice = Math.floor(Math.random()*3);
    if(compChoice === 0){
        return "rock"
    } else if(compChoice === 1){
        return "paper"
    } else if (compChoice === 2){
        return "scissors"
    }
}

function playRound(playerSelection,computerSelection){
    
    if (playerSelection === computerSelection){
        let tie = `You tie! You played ${playerSelection} and the computer played ${computerSelection}`;
        output.textContent = tie
    } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper"
    && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        ++compScore;
        let lose = `You lose! You played ${playerSelection} and the computer played ${computerSelection}`
        output.textContent = lose
    } else {
       ++playerScore;
        let win =`You win! You played ${playerSelection} and the computer played ${computerSelection}`;
        output.textContent = win
    }
}




function playGame(){
    pScore.textContent = playerScore;
    cScore.textContent = compScore;

   if (playerScore === 5){
        ++playerGame;
        playerWin();
        disableButtons();

        return;
    } else if (compScore === 5){
        ++compGame;
        playerLose();
        disableButtons();
        return;
   }}

   function startGame(){
    start.remove();
    body.append(outputContainer);
}

function disableButtons(){
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function playerWin(){
    output.textContent = "You win this game!"
    cGames.textContent = compGame;
    pGames.textContent = playerGame;
    newGameMessage.textContent = "Click below to play again!"
    endGame.append(newGameMessage);
    newGameBtn.textContent = "Play again";
    endGame.append(newGameBtn);
    outputContainer.append(endGame);

    playerScore = 0;
    compScore = 0;
}

function playerLose(){
    output.textContent = "You lose this game!"
    cGames.textContent = compGame;
    pGames.textContent = playerGame;
    newGameMessage.textContent = "Click below to play again!"
    endGame.append(newGameMessage);
    newGameBtn.textContent = "Play again";
    endGame.append(newGameBtn);
    outputContainer.append(endGame);
    playerScore = 0;
    compScore = 0;
}

function playNewGame(){
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    endGame.remove();
    pScore.textContent = playerScore;
    cScore.textContent = compScore;
    output.textContent = "Choose rock, paper or scissors!"
}



function gameOver(){
    if(playerGame === 5){
        outputContainer.remove();
        gameover.textContent = "Congratulations you won! You were the first to win 5 games!";
        endContainer.append(gameover);
        endContainer.append(winImg);
        body.append(endContainer);

    } else if (compGame === 5){
        outputContainer.remove();
        gameover.textContent = "Too bad you lose! The computer won 5 games first.";
        endContainer.append(gameover);
        endContainer.append(loseImg);
        body.append(endContainer);
    } else{
        return;
    }
}


//game
startScreen();  

buttons.forEach(btn => {
    btn.addEventListener("click", function(){
        console.log("Did this work?")
        playerSelection = btn.id;
         computerSelection = computerChoice();
        playRound(playerSelection,computerSelection);
        playGame();
        gameOver();
        
    })
})

startbtn.addEventListener("click", function(){
    startGame();
})

newGameBtn.addEventListener("click", function(){
    playNewGame();
})

