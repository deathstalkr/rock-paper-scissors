function randomNum() {
    return Math.floor(Math.random() * 3);
  }
  
  function getComputerChoice() {
    let i = randomNum();
    // let arr = ["rock", "paper", "scissors"];
    // return arr[i];

    switch (i) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
  }
  
//   function playRound(playerSelection, computerSelection) {
//     const player = playerSelection.toLowerCase();

//     if (player == "rock" && computerSelection == "paper") {
//       return `You lose! Paper beats Rock`;
//     } else if (player == "paper" && computerSelection == "rock") {
//       return `You Win! Paper beats Rock`;
//     } else if (player == "rock" && computerSelection == "scissors") {
//       return `You Win! Rock beats Scissors`;
//     } else if (player == "scissors" && computerSelection == "rock") {
//       return `You loose! Rock beats Scissors`;
//     } else if (player == "paper" && computerSelection == "scissors") {
//       return `You Loose! Scissors beats Paper`;
//     } else if (player == "scissors" && computerSelection == "paper") {
//       return `You Win! Scissors beats Paper`;
//     } else if (player == "rock" && computerSelection == "rock") {
//       return `Draw! play again`;
//     } else if (player == "paper" && computerSelection == "paper") {
//       return `Draw! play again`;
//     } else if (player == "scissors" && computerSelection == "scissors") {
//       return `Draw! play again`;
//     } else {
//       return `Please enter a valid option`;
//     }
//   }

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();

    if (player === computerSelection) {
        return `Draw! play again`;
    } else if (player == "rock" && computerSelection == "paper" || player == "scissors" && computerSelection == "rock" || player == "paper" && computerSelection == "scissors") {
        return `You loose! ${computerSelection} beats ${player}`;
    } else if (player == "paper" && computerSelection == "rock" || player == "rock" && computerSelection == "scissors" || player == "scissors" && computerSelection == "paper") {
        return `You win! ${player} beats ${computerSelection}`;
    } else {
        return `Please enter a valid option`;
    }
}

  function game(){
    const playerSelection = '';
    const computerSelection = '';
    let count = 0;
    for (let i = 0; i < 5; i++){

        playerSelection = prompt(`Please choose any one:\n rock, paper or scissors`, '');
        computerSelection = getComputerChoice();
        
        let match = playRound(playerSelection, computerSelection)
        console.log(match);

        if (match.includes("Win!")){
            count += 1;
        }
    }
    return `You won ${count} matches out of 5`;
  }

  game()
  