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


let playerScore = 0;
let compScore = 0;
let playerGame = 0;
let compGame = 0;

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

   const buttons = document.querySelectorAll(".btn");
const output = document.querySelector(".output");
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");
const cGames = document.querySelector(".cGames");
const pGames = document.querySelector(".pGames");
const endGame = document.querySelector(".endGame");
const newGameMessage = document.createElement("p");
const newGameBtn = document.createElement("button");
newGameBtn.classList.add("newbtn");


buttons.forEach(btn => {
    btn.addEventListener("click", function(){
        console.log("Did this work?")
        playerSelection = btn.id;
         computerSelection = computerChoice();
        playRound(playerSelection,computerSelection);
        playGame();
        
    })
})

newGameBtn.addEventListener("click", function(){
    playNewGame();
})

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
    playerScore = 0;
    compScore = 0;
}

function playNewGame(){
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    newGameMessage.remove();
    newGameBtn.remove();
    pScore.textContent = playerScore;
    cScore.textContent = compScore;
    output.textContent = "Choose rock, paper or scissors!"
}





