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

    /*for (i =0; i<50; ++i){
    let x = prompt("Choose");
    let x_Lower = x.toLowerCase();
    while(true){
        if(x_Lower === "rock" || x_Lower === "paper" || x_Lower === "scissors"){
            break;
        } else 
             x = prompt("Choose again");
             x_Lower = x.toLowerCase();
    }

    playerSelection = x_Lower;
    computerSelection = computerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
   
    
    console.log(playRound(playerSelection, computerSelection))
    console.log("Player score: " + playerScore);
    console.log("Computer score " + compScore);*/

   if (playerScore === 5){
        ++playerGame;
        output.textContent = "You win this game! Choose to play again."
        playerScore = 0;
        compScore = 0;

        return;
    } else if (compScore === 5){
        ++compGame;
        output.textContent = "You lose this game! Choose to play again."
        playerScore = 0;
        compScore = 0;
        return;
   }}

   const buttons = document.querySelectorAll(".btn");
const output = document.querySelector(".output");
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");

/*for (let i = 0; i<buttons.length; i++){
    buttons[i].style.color = "red"
}*/

buttons.forEach(btn => {
    btn.addEventListener("click", function(){
        console.log("Did this work?")
        playerSelection = btn.id;
         computerSelection = computerChoice();
        playRound(playerSelection,computerSelection);
        playGame();
        
    })
})




