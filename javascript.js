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
    if (playerSelection === "rock" && computerSelection === "rock"){
        return `You tie! You played ${playerSelection} and the computer played ${computerSelection}.`
    } else if (playerSelection ==="paper" && computerSelection === "paper"){
        return `You tie! You played ${playerSelection} and the computer played ${computerSelection}`
    }
}

function playGame(){
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
   
    //playRound(playerSelection,computerSelection) 
    
    
    
}

