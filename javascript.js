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
        return `You tie! You played ${playerSelection} and the computer played ${computerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper"
    && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        ++compScore;
        return `You lose! You played ${playerSelection} and the computer played ${computerSelection}`
    } else {
        ++playerScore;
        return `You win! You played ${playerSelection} and the computer played ${computerSelection}`
    }
}

let playerScore = 0;
let compScore = 0;
let playerGame = 0;
let compGame = 0;

function playGame(){
    
    for (i =0; i<50; ++i){
    let x = prompt("Choose");
    let x_Lower = x.toLowerCase();
    while(true){
        if(x_Lower === "rock" || x_Lower === "paper" || x_Lower === "scissors"){
            break;
        } else 
             x = prompt("Choose again");
             x_Lower = x.toLowerCase();
    }

    let playerSelection = x_Lower;
    let computerSelection = computerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
   
    
    console.log(playRound(playerSelection, computerSelection))
    console.log("Player score: " + playerScore);
    console.log("Computer score " + compScore);

   if (playerScore === 5){
        ++playerGame;
        console.log("You win this game!")
        console.log("Player games won: " + playerGame);
        console.log("Computer games won: " + compGame);
        playerScore = 0;
        compScore = 0;

        return;
    } else if (compScore === 5){
        ++compGame;
        console.log("You lose this game!");
        console.log("Player games won: " + playerGame);
        console.log("Computer games won: " + compGame);
        playerScore = 0;
        compScore = 0;
        return;
   }}
   
   




}
