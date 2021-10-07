let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// return a random number from 0-9
function generateTarget(){
    return Math.floor(Math.random() * 10);;
}

function compareGuesses(humanGuess, computerGuess, targetGuess){
    var ab1 = Math.abs(targetGuess - humanGuess);
    var ab2 = Math.abs(targetGuess - computerGuess);
    if(ab1<=ab2) return true;
    else return false;
}

function updateScore(winner){
    if (winner === 'human') 
    {   
        humanScore +=1; 
    }
    else if (winner === 'computer') 
    {  
        computerScore +=1;
    }
}

function advanceRound()
{
    currentRoundNumber+=1;
}

